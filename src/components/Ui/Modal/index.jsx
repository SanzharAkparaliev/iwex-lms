import { useState } from 'react';
import styles from './Moda;.module.css';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const ModalLogout = ({ isVisible, setIsVisible }) => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove('token');
    setIsVisible(false);
    navigate('/login');
  };

  return isVisible ? (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_content}>
        <h3 className={styles.title}>Вы действительно хотите выйти?</h3>
        <div className={styles.btns}>
          <div>
            <button className={styles.btnExit} onClick={logout}>
              Да
            </button>
          </div>
          <div>
            <button
              className={styles.btnExit}
              onClick={() => setIsVisible((toggle) => !toggle)}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalLogout;
