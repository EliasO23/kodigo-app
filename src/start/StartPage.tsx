import Navbar from "../shared/components/Navbar/Navbar"
import FormLogin from "./components/FormLogin/FormLogin"
import styles from "./StartPage.module.css"


function StartPage() {
  return (
    <>
        <Navbar/>
        
        <div className={styles.text}>
          <h1>Bienvenido</h1>
          <h5>Inicia sesion o Registrate</h5>
        </div>
        <FormLogin/> 
        
    </>
  )
}

export default StartPage