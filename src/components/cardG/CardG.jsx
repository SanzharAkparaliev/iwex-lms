import React from 'react'
import styles from './cardg.module.css'
import img from './flag.jpg'
import { IoBookSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";



const CardG = ({name ,lesson , people}) => {
  return (
    <div className={styles.box}>
        <div className={styles.flagBox}>
            <img className={styles.imgGer} src={img} alt="" />
        </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.boxlesPepl}>
<div className={styles.lessonsBlok}>
<i className={styles.iconBook}><IoBookSharp/></i>
<p className={styles.leson}>{lesson}</p>
</div>
<div className={styles.lessonsBlok}>
<i className={styles.iconBook}><MdPeopleAlt/></i>
<p className={styles.leson}>{people}k</p>
</div>
      </div>
    </div>
  )
}

export default CardG
