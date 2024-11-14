import Navbar from "../shared/components/Navbar/Navbar"
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.content}>
          <h3>Transforma tu pasion</h3>
          <h1>en tu profesion</h1>
          <p>Estudia una carrera tecnológica y descubre tu potencial para rekodificar el futuro</p>
        </div>
        
    </>
    
  )
}

export default HomePage