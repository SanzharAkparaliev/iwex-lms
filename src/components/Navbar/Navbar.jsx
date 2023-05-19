import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

import logo1 from './logo3.png';
import { BiLogIn } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.blok}>
        <div className={styles.contlogo}>
          <img className={styles.img} src={logo1} alt="" />

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

export default Navbar;
