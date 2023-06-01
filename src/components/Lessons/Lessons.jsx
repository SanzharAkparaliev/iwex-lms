import React from 'react';
import Taskwork from './../TaskWork/Taskwork';

import styles from './Lessons.module.css'
import { useNavigate, useParams } from 'react-router';
import AddLesons from '../AddLeson';


const Lessons = () => {
  const navigate = useNavigate()
 const params =  useParams()

 const  hendRouter = () => {
  navigate(`/corses/:${params.id}/lessons`)
//  реализуем айдишник каторы получили с парамс , вызываем функцыю сетегого запроса на получение 
//  информацый адного конкретного курса по айди пробвурасывая в функцыю этот самы айди.
// получаяем в стейт всю инфу о конкретном курсе  и вместе  снимм же масив с уроками каторы мы перебераем мэпом 
// и возрощяем таскворк а просто раставим все ключи по местам 
 }
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.title}>Lessons</h1>
      <div className={styles.blok_button}>
        <button onClick={hendRouter} className={styles.addButton}>Add Lessons</button>
      </div>
    
    <Taskwork/>
    </div>
      
    )

 }; export default Lessons



