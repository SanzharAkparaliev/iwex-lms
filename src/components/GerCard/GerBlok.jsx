import React from 'react'
 import styles from './GerCard.module.css'
import CardG from '../cardG/CardG'
const GerBlok = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.cardBlok}>
      <CardG/>
      <CardG/>
      <CardG/>
      </div>
    </div>
  )
}

export default GerBlok