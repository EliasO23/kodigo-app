import Navbar from "../shared/components/Navbar/Navbar";
import styles from './NotFoundPage.module.css'


function NotFoundPage() {
  return (
    <>
        <Navbar/>
        <div className={styles.notFoundContainer}>
          <img src="https://png.pngtree.com/png-vector/20220316/ourmid/pngtree-modern-and-creative-vector-design-for-error-404-page-not-found-layoutideal-for-websites-vector-png-image_26395144.png" alt="Página no encontrada" className={styles.notFoundImage} />
          <h1 className={styles.notFoundText}>Ruta no encontrada</h1>
      </div>
    </>
    
  )
}

export default NotFoundPage