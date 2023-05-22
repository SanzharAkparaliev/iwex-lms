import React from 'react'
import styles from './cardg.module.css'
import img from './flag.jpg'
const CardG = () => {
  return (
    <div className={styles.box}>
        <div className={styles.flagBox}>
            <img className={styles.imgGer} src={img} alt="" />
        </div>
    </div>
  )
}

export default CardG