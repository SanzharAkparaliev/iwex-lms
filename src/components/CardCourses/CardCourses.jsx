import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const CardCourses = ({ name, title, item }) => {
  const [data, setData] = useState(item);

  const navigate = useNavigate();
  const hendler = () => {
    navigate(`/corses/${item.id}`);
  };

  return (
    <div className={styles.box}>
      <div className={styles.flagBox}>
        <img
          className={styles.imgGer}
          src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
          alt=""
        />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.boxlesPepl}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.starANDButton}>
        {/* <NavLink to='/corses/:id'  className={styles.goRegistr} >Go Now</NavLink> */}
        <button onClick={hendler} className={styles.goRegistr}>
          Go Now
        </button>
      </div>
    </div>
  );
};

export default CardCourses;
