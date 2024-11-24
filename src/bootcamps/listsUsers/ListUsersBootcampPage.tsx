import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import supabase from '../../utils/supabase';
import styles from './ListUsersBootcampPage.module.css';
import Navbar from "../../shared/components/Navbar/Navbar"


const ListUsersBootcampPage = () => {
  const { name } = useParams();
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('subscripciones')
          .select('*')
          .eq('bootcamp', name);

        if (error) {
          throw error;
        }

        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [name]);


  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Usuarios inscritos en {name}</h1>
        {loading ? (
          <p>Cargando usuarios...</p>
        ) : usuarios.length === 0 ? (
          <p>No hay usuarios inscritos en el bootcamp {name}.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre Completo</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{usuario.fullname}</td>
                  <td>{usuario.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className={styles.btn}>
          <Link to='/bootcamps'><button className={styles.back}>Regresar</button></Link>
        </div>
      </div>

    </>
  )
}

export default ListUsersBootcampPage