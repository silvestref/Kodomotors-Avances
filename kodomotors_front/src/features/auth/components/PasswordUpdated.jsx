import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../../assets/styles/auth/PasswordUpdated.module.scss';
import logo from '../../../assets/images/novaly/kodologo.png';

const PasswordUpdated = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/sign-in'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className={styles.passwordUpdatedContainer}>
      <div className={styles.passwordUpdatedBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>
          Tu contraseña se ha actualizado correctamente
        </h1>
        <p className={styles.subtitle}>
          Ahora puedes ingresar con tu nueva contraseña.
        </p>
        <hr className={styles.divider} />
        <button className={styles.returnButton} onClick={handleRedirect}>
          Regresar a inicio de sesión
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdated;
