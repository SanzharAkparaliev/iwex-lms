import styles from '../Profile/profile.module.css';

const User = () => {
  return (
    <div className={styles.user_wrapper}>
      <div className={styles.user_img}>
        <img src="../../img/user.png" alt="user" className={styles.image}></img>
      </div>
      <div className={styles.user_info}>
        <h5 className={styles.user_name}>Марат Укиев</h5>
        <a href="#" className={styles.user_email}>
          iwex@gmail.com
        </a>
      </div>
    </div>
  );
};

export default User;
