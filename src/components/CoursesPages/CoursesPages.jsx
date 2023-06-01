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



const CoursesPages = () => {
  

  const [selectedOption, setSelectedOption] = useState('');
  const [state, setState] = useState();

  const handleChange = (event) => {
    selectedOption({ value });
  };
  
  const data = CoursesData;
  return (
    <div className={styles.conteiner}>

<div className={styles.input_wrapper}>
  
  <div className={styles.input_group}>
            <input className={styles.input} placeholder="Название Курса" />
          </div>
  <div className={styles.input_group}>
            <input className={styles.input} placeholder="описание" />
          </div>
          <div className={styles.input_group}>
            {/* <textarea className={styles.input} placeholder="content"></textarea> */}
            {/* <ReactQuill theme="snow" /> */}
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              // value={state.value}
              onChange={handleChange}
              placeholder={'Write something awesome...'}
              modules={modules}
              formats={formats}
              className={styles.editor}
              name="editor"
            />
          </div>
          <div className={styles.blokk}>
            <button className={styles.btn}>Добавить</button>
          </div>
  
  
</div>

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
