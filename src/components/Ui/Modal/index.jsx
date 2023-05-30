import { useState } from 'react';
import styles from './Moda;.module.css';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const ModalLogout = ({ close }) => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const [closeModal, setCloseModal] = useState(false);

  const logout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return toggle ? (
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
              onClick={() => setToggle((toggle) => !toggle)}
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
