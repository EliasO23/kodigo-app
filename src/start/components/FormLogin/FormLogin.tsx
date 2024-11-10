import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuth } from '../../../context/AuthProvider'
import supabase from '../../../utils/supabase'
import styles from './FormLogin.module.css'
import { Navigate } from 'react-router-dom'

export default function FormLogin() {

  const {session} = useAuth()

  if (!session) {
    return (
      <div className={styles.login}>
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
          providers={['google']}
        />
      </div>
    )
  }
  else {
    return (
    <Navigate to={'/bootcamps'}/>
  )
  }
}
