import AboutContent from '../AboutContent/AboutContent';
import BannerContent from '../Banner';

import ChooseUs from '../ChooseUs';


import { Teachers } from '../Teachers/Teachers';


import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>

        <BannerContent />
        <AboutContent />
        <ChooseUs />

        <Teachers/>

      </div>
     
    </div>
  );
};

export default HomePage;
