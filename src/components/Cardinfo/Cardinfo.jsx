import React, { useEffect, useState } from 'react';
import styles from './cardinfo.module.css';
import { useParams } from 'react-router';
import { DataGer } from '../GercardData';
import { BsPeopleFill } from 'react-icons/bs';
import { IoBookSharp } from 'react-icons/io5';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Cardinfo = () => {
  const { id } = useParams();

  //  кароч я буду постовлять этот айдишник каторы будет тянутся из общяй базы,
  // я саздам еще один сетевой запрос где будет ити запрос на адин урок каторы будет принимать в себя айдишник
  // и одовать конкретный урок

  return (
    <div className={styles.cont}>
      <div className={styles.blok}>
        <h1 className={styles.title}>NAME_CORSES</h1>

        <div className={styles.infoblok}>
          <div className={styles.blokPeople}>
            <i className={styles.iconPeople}>
              <BsPeopleFill />
            </i>
            <p className={styles.people}>people</p>
          </div>
          <div className={styles.blokPeople}>
            <i className={styles.iconPeople}>
              <IoBookSharp />
            </i>
            <p className={styles.people}>Lessons</p>
          </div>

         
        </div>
        <div className={styles.discription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nulla quaerat vero totam pariatur iure, eius hic magni assumenda et
            voluptas consequatur possimus veniam sint nam voluptatem adipisci
            reiciendis animi?
          </div>
      </div>
    </div>
  );
};

export default Cardinfo;
