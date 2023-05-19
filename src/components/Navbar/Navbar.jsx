import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

import { BiLogIn } from "react-icons/bi";
const Navbarr = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.blok}>
        <div className={styles.contlogo}>
          {/* <img className={styles.img} src={logo1} alt="" />
         */}
          <p className={styles.parag}>LMS</p>
        </div>
        <nav className={styles.contlink}>
          <NavLink to="/" className={styles.join}>
            Home
          </NavLink>
          <NavLink to="/login" className={styles.join}>
            {BiLogIn}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr;
