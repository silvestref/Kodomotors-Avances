import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../../assets/styles/auth/ForgotPassword.module.scss';
import logo from '../../../assets/images/novaly/kodologo.png';

const ForgotPassword = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del correo
    history.push('/VerifyEmail');
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPasswordBox}>  
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>¿Olvidaste tu contraseña?</h1>
        <p className={styles.subtitle}>
          Ingresa tu correo para continuar
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <hr className={styles.divider} />
          <button type="submit" className={styles.submitButton}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
