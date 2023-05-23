
import styles from './style.module.css';
import { BsCurrencyDollar } from "react-icons/bs"; 
import img from './a.jpg';
import CountUp from 'react-countup';
const AboutContent = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.postBlok}>
        <div className={styles.blok}>
          <img className={styles.imgmen} src={img} alt="" />
        </div>
        <div className={styles.blok}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            adipisci hic tempore aliquid nihil eos iure, consequatur omnis, unde
            repellat aliquam distinctio placeat odit debitis voluptatum suscipit
            perferendis asperiores exercitationem.
          </p>
          <div className={styles.cont}>
            <div className={styles.contblok}>
                <div className={styles.intblok}>
                <span className={styles.par}>  <CountUp start={0} end={25} duration={2}suffix='K'/></span>
                 {/* <i className={styles.icon}>{<BsCurrencyDollar/>}</i> */}
                </div>
                <div className={styles.intblok}>
                <span className={styles.par}>  <CountUp   start={0} end={12} duration={2}suffix='M'/></span>
                 {/* <i className={styles.icon}>{<BsCurrencyDollar/>}</i> */}
                </div>
            
                <div className={styles.intblok}>
                <span className={styles.par}>  <CountUp   start={0} end={25} duration={2}suffix='K'/></span>
                {/* <p className={styles.par}>k</p> */}
                 {/* <i className={styles.icon}>{<BsCurrencyDollar/>}</i> */}
                </div>
                <div className={styles.intblok}>
                <span className={styles.par}>  <CountUp   start={0} end={12} duration={2}suffix='M'/></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
