import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';
import cn from 'clsx';
import { BiLogIn } from 'react-icons/bi';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from './logo3.png';
import './habmerger.css';
import { NavData, loginLink } from '../navigation';
import Cookies from 'js-cookie';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [showLink, setShowLink] = useState(null);
  const [link, setLink] = useState();

  console.log(location.pathname);

  const path = useLocation().pathname;
  console.log(path);
  useEffect(() => {
    const checkUserData = () => {
      const checkTokenUser = Cookies.get('token');
      if (checkTokenUser) {
        return;
        setShowLink(checkTokenUser);
      }
    };
    checkUserData();
    if (path === '/login') {
      setLink(loginLink);
    } else {
      setLink(NavData);
    }
  }, [path]);
  //  console.log(showLink)
  const hendler = () => {
    setShow((show) => !show);
  };
  const [user, setUser] = useState(false);

  if (path === '/login') {
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
            {link &&
              loginLink.map((item) => {
                if (showLink && item.href === '/login') return null;

                if (!showLink && item.href === '/tech') return null;

                return (
                  <NavLink
                    key={item.id}
                    className={({ isActive }) =>
                      cn(styles.join, isActive && styles.activeJoin)
                    }
                    to={item.href}
                  >
                    {item.title}
                  </NavLink>
                );
              })}

            {/* <NavLink
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
            to={'/corses'}
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/profile'}
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/login'}
          >
            <label className={styles.lab}>login </label>
          </NavLink> */}
          </div>
        </div>
      </div>
    );
  } else {
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
            {link &&
              NavData.map((item) => {
                if (showLink && item.href === '/login') return null;

                if (!showLink && item.href === '/tech') return null;

                return (
                  <NavLink
                    key={item.id}
                    className={({ isActive }) =>
                      cn(styles.join, isActive && styles.activeJoin)
                    }
                    to={item.href}
                  >
                    {item.title}
                  </NavLink>
                );
              })}

            {/* <NavLink
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
            to={'/corses'}
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/profile'}
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.join, isActive && styles.activeJoin)
            }
            to={'/login'}
          >
            <label className={styles.lab}>login </label>
          </NavLink> */}
          </div>
        </div>
      </div>
    );
  }
};

export default Navigation;
