import React, { useState } from 'react';
import styles from './Courses.module.css';
import { CoursesData } from '../CardCoursesData';
import CardCourses from '../CardCourses/CardCourses';
import { Footer } from '../Footer/Footer';
import Cookies from 'js-cookie';

import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from '../AddLeson/EditorToolbar';
import '../../App.css';
import ReactQuill from 'react-quill';
import { Addcorses } from './AddCorses/Addcorses';

const CoursesPages = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [state, setState] = useState();

  const handleChange = (event) => {
    selectedOption({ value });
  };

  const data = CoursesData;
  return (
    <div className={styles.conteiner}>
      <Addcorses />

      <div className={styles.cardBlok}>
        {Cookies.get('token') &&
          data.map((item) => {
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

export default CoursesPages;
