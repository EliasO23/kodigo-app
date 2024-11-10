import CardRegisterBootcamp from "./components/CardRegisterBootcamp"
import styles from './BootcampsPage.module.css'
import Navbar from "../shared/components/Navbar/Navbar";


function BotcampsPage() {
  const bootcamps = [
    {
      name: 'Full Stack Jr.',
      description: "Curso orientado a aprender desarrollo Fullstack con ReactJS, Laravel y MySQL.",
      startDate: 'Enero 27',
      registrationDeadline: 'Enero 24',
      duration: '26 Semanas',
      mode: 'Modalidad Virtual',
      technologies: ['HTML', 'Laravel', 'JavaScript', 'ReactJs']
    },
    {
      name: 'Java Developer',
      description: "Aprende Java desde cero hasta un nivel avanzado, incluyendo el desarrollo de aplicaciones backend robustas.",
      startDate: 'Febrero 24',
      registrationDeadline: 'Febrero 21',
      duration: '24 Semanas',
      mode: 'Modalidad Virtual',
      technologies: ['Java', 'Spring Boot', 'MySQL']
    },
    {
      name: 'Data Analytics',
      description: "Curso de análisis de datos con enfoque en Python, PowerBI y R para generar insights y visualización de datos.",
      startDate: 'Marzo 10',
      registrationDeadline: 'Marzo 7',
      duration: '20 Semanas',
      mode: 'Modalidad Virtual',
      technologies: ['Python', 'PowerBy', 'R']
    },
    {
      name: 'Blockchain',
      description: 'En el curso de Blockchain aprenderás sobre contratos inteligentes, criptografía, y desarrollo de aplicaciones descentralizadas.',
      startDate: 'Abril 5',
      registrationDeadline: 'Abril 2',
      duration: '22 Semanas',
      mode: 'Modalidad Virtual',
      technologies: ['Solidity', 'Ethereum', 'Smart Contracts']
    }
  ];

  return (

    <>
      <Navbar/>
      <div className={styles.text}>
        <h1>Elige tu Bootcamp</h1>
        <h4>Reserva tu cupo en nuestros bootcamps y comienza tu carrera tecnológica hoy mismo</h4>      
      </div>
      <div className={styles.container}>
        {bootcamps.map((bootcamp, index) => (
          <CardRegisterBootcamp key={index} {...bootcamp} />
        ))}
      </div>
      
    </>
  )
}

export default BotcampsPage