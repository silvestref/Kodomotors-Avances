// Nota esto se usara tambien para el primer acceso

import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../../assets/styles/auth/NewPassword.module.scss';
import logo from '../../../assets/images/novaly/kodologo.png';

const NewPassword = () => {
const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la nueva contraseña
    history.push('/password-updated');
  };

  return (
    <div className={styles.newPasswordContainer}>
      <div className={styles.newPasswordBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Crear nueva contraseña</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="newPassword">Nueva contraseña</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Debe tener al menos 8 caracteres"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Repetir nueva contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Ingrese nuevamente la contraseña"
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

export default NewPassword;
