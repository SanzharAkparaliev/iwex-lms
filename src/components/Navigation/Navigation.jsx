import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import cn from 'clsx';
import { BiLogIn } from 'react-icons/bi';
import logo1 from './logo3.png';
import './habmerger.css';

const Navigation = () => {
  const [show, setShow] = useState(false);

  //   var nav = document.querySelector(".nav");
  //   var hamburger = document.querySelector(".hamburger");
  //  const hambActive = (e) => {
  //    hamburger.classList.toggle("is-active")
  //    nav.classList.toggle("is-active");
  //    // Do something else, like open/close menu
  // }

  const hendler = () => {
    setShow((show) => !show);
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.blok}>
        <div className={styles.contlogo}>
          <img className={styles.img} src={logo1} alt="" />

          <p className={styles.parag}>LMS</p>
        </div>

        <button
          className="hamburger hamburger--spring "
          onClick={hendler}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className={cn(styles.nav, show && styles.active)}>
          <NavLink className={styles.join} to={'/'}>
            Home
          </NavLink>
          <NavLink className={styles.join} to={'/tech'}>
            Techers
          </NavLink>
          <NavLink className={styles.join} to={'/login'}>
            {<BiLogIn />}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
