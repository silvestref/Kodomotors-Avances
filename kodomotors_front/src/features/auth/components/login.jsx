import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../../../assets/styles/auth/Login.module.scss';
import logo from '../../../assets/images/novaly/kodologo.png';
import axios from "axios";

const Login = () => {
  
  const history = useHistory();

  //Definición de variables de formulario y estados
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Lógica de login
    axios.post("http://localhost:8081/sign-in", values)  //Obtención de variable de formulario
    .then(res => {
      if(res.data.Status === "Success") {  //Caso de Login exitoso redirigir a Dashboard
        history.push('/dashboard')
      } else {                             //Mostrar error
        alert(res.data.Error || "Error inesperado");
      }
    })

    .catch(err => console.error(err));
    //.then(err => console.log(err));

    //history.push('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Bienvenido de nuevo</h1>
        <p className={styles.subtitle}>
          Ingresa tu usuario y contraseña para continuar
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              onChange={e => setValues({...values, email: e.target.value})} //Obtencion de valor
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              onChange={e => setValues({...values, password: e.target.value})} //Obtencion de valor
              required
            />
          </div>
          <Link to="/ForgotPassword" className={styles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
          <hr className={styles.divider} />
          <button type="submit" className={styles.submitButton}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
