import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import cn from 'clsx';
import { BiLogIn } from 'react-icons/bi';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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

        <button className={styles.hamburger} onClick={hendler} type="button">
          {show ? (
            <AiOutlineClose className={styles.iconCloss} />
          ) : (
            <AiOutlineMenu className={styles.iconCloss} />
          )}
        </button>

        <div
          className={
            show ? [styles.nav, styles.active].join(' ') : [styles.nav]
          }
          onClick={() => setShow(false)}
        >
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/tech'}
          >
            Techers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/login'}
          >
            <label className={styles.lab}>login </label>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

{
  /* <i className={styles.icon2}>{<BiLogIn/>} </i> */
}

export default Navigation;
