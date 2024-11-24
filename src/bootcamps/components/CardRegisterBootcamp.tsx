import { Link } from 'react-router-dom'
import styles from './CardRegisterBootcamp.module.css'



function CardRegisterBootCamp({ name, description, startDate, registrationDeadline, duration, mode, technologies }) {
    
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img
                    src="https://cdn-knihf.nitrocdn.com/ibKONdxVNJApfXYlVVFSuGXgWUgPJrvN/assets/images/optimized/rev-f36b800/kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/11/Java-Developer@4x-1.webp"
                    alt="Logo"
                    className={styles.logo}
                />
                <h2>{name}</h2>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.details}>
                <p><span>Inicio del Bootcamp:</span> {startDate}</p>
                <p><span>Último día de inscripción:</span> {registrationDeadline}</p>
                <p><span>Duración:</span> {duration}</p>
                <p><span>Modalidad:</span> {mode}</p>
                <div className={styles.technologies}>
                    <span>Tecnologías</span>
                    <div className={styles.techChips}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={styles.techChip}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
            
            <Link to={`/bootcamps/register?name=${name}`}>
                <button className={`${styles.button} ${styles.firstButton}`}>Inscríbete</button>
            </Link>
            <Link to={`/bootcamps/listUsers/${name}`}>
                <button className={`${styles.button} ${styles.secondButton}`}>Inscritos</button>
            </Link>
            
        </div>
    )
}

export default CardRegisterBootCamp