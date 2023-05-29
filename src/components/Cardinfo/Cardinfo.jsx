import React, { useEffect, useState } from 'react';
import styles from './cardinfo.module.css';
import {  useParams } from 'react-router';
import { DataGer } from '../GercardData';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Cardinfo = () => {
  const { id } = useParams();

  //  const {data , setData} = useState(DataGer)

  
//  кароч я буду постовлять этот айдишник каторы будет тянутся из общяй базы,  
// я саздам еще один сетевой запрос где будет ити запрос на адин урок каторы будет принимать в себя айдишник 
// и одовать конкретный урок 

  return (
    <div className={styles.cont}>
      <div className={styles.blok}></div>
    </div>
  );
};

export default Cardinfo;
