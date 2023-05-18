import BannerContent from '../Banner';
import InputLabel from '../Input';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>
        <BannerContent />
      </div>
    </div>
  );
};

export default HomePage;
