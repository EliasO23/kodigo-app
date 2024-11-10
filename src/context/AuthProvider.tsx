import  supabase  from "../utils/supabase"
import { Session } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IAuthContext{
    session: Session | null
    singIn: () => void
    singOut: () => void
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({children}:{children: ReactNode}) => {

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        const getSession = async() =>{
            const {data: {session}} = await supabase.auth.getSession()
            setSession(session)
        }

        getSession()

        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => {
            subscription.unsubscribe()
        }

    }, [])

    const singIn = async () => {
        //Pendiente
    }

    const singOut = async () => {
        await supabase.auth.signOut()
        setSession(null)
    }
    
    return (
        <AuthContext.Provider value={{session, singIn, singOut}}>
            {children}

        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error('AuthContext not working')
    }

    return context
}