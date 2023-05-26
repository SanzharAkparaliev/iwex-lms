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
  const [user, setUser] = useState(false);

  console.log(location.pathname);

  const path = useLocation().pathname;
  console.log(path);
  useEffect(() => {
    const checkUserData = async () => {
      const checkTokenUser = Cookies.get('token');
      if (checkTokenUser) {
        return;
        setShowLink(checkTokenUser);
      }
    };
    checkUserData();
    if (path === '/login' || '/') {
      setLink(loginLink);
    } else {
      setLink(NavData);
    }
  }, [path]);
  //  console.log(showLink)
  const hendler = () => {
    setShow((show) => !show);
  };

  if (Cookies.get('token')) {
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
            {NavData.map((item) => {
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
            {loginLink.map((item) => {
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
          </div>
        </div>
      </div>
    );
  }
};

export default Navigation;
