import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import cn from 'clsx';
import { BiLogIn } from 'react-icons/bi';
<<<<<<< HEAD
=======
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

>>>>>>> 283f2cfe3e3628d1e53b776361c235ddbc459815
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

<<<<<<< HEAD
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
          <NavLink className={styles.join} to={'/profile'}>
            Profile
          </NavLink>
            {<BiLogIn />}
=======
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
>>>>>>> 283f2cfe3e3628d1e53b776361c235ddbc459815
          </NavLink>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
{
  /* <i className={styles.icon2}>{<BiLogIn/>} </i> */
}
>>>>>>> 283f2cfe3e3628d1e53b776361c235ddbc459815
export default Navigation;
