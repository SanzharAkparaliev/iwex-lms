import React from 'react'
import styles from './card.module.css'
const CardCourses = ({name, title}) => {
  return (
    <div className={styles.box}>
        <div className={styles.flagBox}>
            <img className={styles.imgGer} src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png" alt="" />
        </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.boxlesPepl}>

<p className={styles.title}>{title}</p>

      </div>
<div className={styles.starANDButton}>
    
    <button className={styles.goRegistr}>Go Now</button>
    
    
</div>
    </div>
  )
}

export default CardCourses