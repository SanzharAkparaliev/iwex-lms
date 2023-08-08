import AboutContent from '../AboutContent/AboutContent';
import BannerContent from '../Banner';
import Cardinfo from '../Cardinfo/Cardinfo';

import ChooseUs from '../ChooseUs';
import { Footer } from '../Footer/Footer';
import GerBlok from '../GerCard/GerBlok';

import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>
        {/* <BannerContent /> */}
        <GerBlok />
        <AboutContent />
        <ChooseUs />
        {/* <Cardinfo/> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
