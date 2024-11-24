import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuth } from '../../../context/AuthProvider'

function Navbar() {

  const {session, singOut} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await singOut()
    navigate('/')

  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/'> 
          <img src="https://cdn-knihf.nitrocdn.com/ibKONdxVNJApfXYlVVFSuGXgWUgPJrvN/assets/images/optimized/rev-f36b800/kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/11/logo-1.webp" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.navLinks}>

        {
          session ?(
            <>
              <div className={styles.routeProtected}>
                <Link to='/bootcamps' className={styles.link}>Bootcamps</Link>
                <button onClick={handleLogout} className={styles.logout}>Logout</button>
              </div>
              
            </>
            
          ):<>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/about' className={styles.link}>About</Link>
            <Link to='/login' className={styles.link}>Login</Link>
          </>
        }
        
      </div>
    </nav>
  )
}

export default Navbar