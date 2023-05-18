import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from './header-logo2.png';
const Navbar = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.blok}>
        <div className={styles.contlogo}>
          <img className={styles.img} src={logo} alt="" />
          <NavLink className={styles.logo} to="/">
            IWEX
          </NavLink>
          <p className={styles.parag}>LMS</p>
        </div>
        <nav className={styles.contlink}>
          <NavLink to="/" className={styles.join}>
            Home
          </NavLink>
          <NavLink to="/login" className={styles.join}>
            sign in
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
