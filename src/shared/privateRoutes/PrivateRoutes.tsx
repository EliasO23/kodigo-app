import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"


export default function PrivateRoutes() {
    const {session} = useAuth()

  return session ? <Outlet/> : <Navigate to={'/login'}/>
}
