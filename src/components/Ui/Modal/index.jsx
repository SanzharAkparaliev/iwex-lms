import styles from './Moda;.module.css';

const ModalLogout = () => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_content}>
        <h3>Вы действительно хотите выйти?</h3>
        <button className={styles.btnExit}>Да</button>
        <button className={styles.btnExit}>Нет</button>
      </div>
    </div>
  );
};

export default ModalLogout;
