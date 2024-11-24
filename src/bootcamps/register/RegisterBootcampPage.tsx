"use client";
import Navbar from "../../shared/components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "./RegisterBootcamPage.module.css";
import { ISubscripcion } from '../../shared/interfaces/subscripcion.interface';
import { createSubscripcion } from "../../services/subscripciones.services";
import Swal from 'sweetalert2'


const RegisterBootcampPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bootcamp = queryParams.get("name") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISubscripcion>({
    defaultValues: { bootcamp }
  });

  const onSubmit = async (data: ISubscripcion) => {
    try {
      const newSubscripcion = await createSubscripcion(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha registrado exitosamente!",
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirige después de que el usuario cierre la alerta
        navigate('/bootcamps');
      });
      reset() // Resetea el formulario después de inscribirse

    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ocurrio un error durante el registro!",
        confirmButtonText: 'OK'
      }).then(() => {
      });
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className={styles.comment}>
        <h1>Inscríbete a nuestro bootcamp</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Bootcamp:</label>
          <input
            type="text"
            defaultValue={bootcamp}
            {...register("bootcamp", { required: true })}
            readOnly
          />
          {errors.bootcamp && <span>Debe de seleccionar un bootcamp</span>}

          <label>Nombre de usuario:</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            {...register("fullname", {
              required: true,
              minLength: 3,
              maxLength: 75,
            })}
          />
          {errors.fullname?.type === "required" && <span>El nombre es requerido</span>}
          {errors.fullname?.type === "minLength" && <span>Minimo de caracteres es de 3</span>}
          {errors.fullname?.type === "maxLength" && <span>Maximo de caracteres es de 75</span>}

          <label>Email:</label>
          <input
            type="email"
            placeholder="Ingrese un correo electrónico"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/,
                message: "Correo electrónico no válido",
              },
            })}
          />
          {errors.email?.type === "required" && <span>El correo es requerido</span>}
          {errors.email?.type === "pattern" && <span>Email inválido</span>}

          <label>Telefono:</label>
          <input
            type="text"
            placeholder="Ingrese su numero de telefono"
            {...register("cellphone", {
              required: true,
              pattern: /^[0-9]{8}$/,
            })}
          />
          {errors.cellphone?.type === "required" && <span>El teléfono es requerido</span>}
          {errors.cellphone?.type === "pattern" && <span>Teléfono inválido</span>}

          <button type="submit">Inscribirse</button>
        </form>
      </section>
    </div>
  );
};

export default RegisterBootcampPage;

