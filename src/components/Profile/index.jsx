import Navbarr from '../Navbar/Navbar';
import styles from './profile.module.css';

const ProfilePage = () => {
  return (
    <>
      <Navbarr />
      <div className={styles.wrapper_profile}>
        <h2 className={styles.title}>Страница профиля</h2>
      </div>
    </>
  );
};

export default ProfilePage;
