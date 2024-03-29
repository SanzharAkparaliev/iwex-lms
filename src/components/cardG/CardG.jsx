import React, { useState } from 'react';
import styles from './cardg.module.css';
import img from './flag.jpg';

import { IoBookSharp } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const CardG = ({ name, lesson, people, item }) => {
  const redir = useNavigate();

  const hendNavigeit = () => {
    redir(`/home/${item.id}`);
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.flagBox}>
        <img className={styles.imgGer} src={img} alt="" />
      </div>
      <div className={styles.boxlesPepl}>
        <div className={styles.lessonsBlok}>
          <i className={styles.iconBook}>
            <IoBookSharp />
          </i>
          <p className={styles.leson}>{lesson}</p>
        </div>
        <div className={styles.lessonsBlok}>
          <i className={styles.iconBook}>
            <MdPeopleAlt />
          </i>
          <p className={styles.leson}>{people}k</p>
        </div>
      </div>
      <div className={styles.starANDButton}>
        <div className={styles.lessonsBlok2}>
          <p className={styles.leson}>5</p>
          <i className={styles.iconBook2}>
            <AiFillStar />
          </i>
        </div>
        <div className={styles.lessonsBlok}>
          {/* <NavLink to="/home/:id">holo</NavLink> */}
          <button onClick={hendNavigeit} className={styles.goRegistr}>
            More
          </button>
        </div>
      </div>
      <Outlet context={item} />
    </div>
  );
};

export default CardG;
