import AboutContent from '../AboutContent/AboutContent';
import BannerContent from '../Banner';

import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>
        <BannerContent />
        <AboutContent/>
      </div>
    </div>
  );
};

export default HomePage;
