import React from 'react';
import styles from '../../../assets/styles/auth/VerifyEmail.module.scss';
import logo from '../../../assets/images/novaly/kodologo.png';

const VerifyEmail = () => {
  return (
    <div className={styles.verifyEmailContainer}>
      <div className={styles.verifyEmailBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Verifica tu correo electrónico</h1>
        <p className={styles.subtitle}>
          Enviamos un correo a h12334@gmail.com
        </p>
        <p className={styles.instructions}>
          Haz clic en el enlace dentro del correo para resetear tu contraseña.
        </p>
        <br />
        <a href="#" className={styles.resendLink}>
          Reenviar correo
        </a>
      </div>
    </div>
  );
};

export default VerifyEmail;
