import React, { useEffect, useState } from 'react';
import styles from './GerCard.module.css';
import CardG from '../cardG/CardG';
import { DataGer } from '../GercardData';

const GerBlok = () => {
  const data = DataGer;
  console.log(data);

  return (
    <div className={styles.conteiner}>
      <div className={styles.cardBlok}>
        {data.map((item) => {
          return (
            <CardG
              item={item}
              key={item.id}
              name={item.name}
              lesson={item.leson}
              people={item.people}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GerBlok;
