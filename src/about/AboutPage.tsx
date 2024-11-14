import { Link } from "react-router-dom"
import Navbar from "../shared/components/Navbar/Navbar"
import styles from './AboutPage.module.css'


function AboutPage() {
  return (
    <>
        <Navbar/>
        <div className={styles.content}>
          <h2>Inicia una carrera</h2>
          <h1>tech</h1>
          <h3>con nosotros</h3>
          <p>Kodigo es una academia de tecnología creativa que capacita a nuevos talentos con habilidades tech, de acuerdo a las actuales exigencias de la industria Tech y la demanda de profesionales a nivel nacional y regional</p>
          <p>Nuestros bootcamps están diseñados para que te incorpores a un trabajo en corto plazo.</p>
          <Link to={'/login'}> <button>Aplica</button> </Link>

        </div>
    </>
  )
}

export default AboutPage