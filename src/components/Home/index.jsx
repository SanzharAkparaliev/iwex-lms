import AboutContent from '../AboutContent/AboutContent';
import BannerContent from '../Banner';
import { Footer } from '../Footer/Footer';
import { Teachers } from '../Teachers/Teachers';

import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>
        <Teachers/>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
