import React from 'react';
import styles from './Courses.module.css';
import { CoursesData } from '../CardCoursesData';
import CardCourses from '../CardCourses/CardCourses';
import { Footer } from '../Footer/Footer';

const CoursesPages = () => {
  const data = CoursesData;
  return (
    <div className={styles.conteiner}>
      <div className={styles.cardBlok}>
        {data.map((item) => {
          return (
            <CardCourses
              key={item.id}
              item={item}
              name={item.name}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};
