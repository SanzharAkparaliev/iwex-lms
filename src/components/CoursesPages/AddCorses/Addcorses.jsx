import React, { useState, useRef } from 'react';
import styled from './addcorses.module.css';

import { IoBookSharp } from 'react-icons/io5';
import { BiPlusMedical } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { DiYeoman, DiUikit, DiSqllite } from 'react-icons/di';
import Courses from './../../../Pages/Courses';
import { postImgCourses } from '../../../api/clientApi';

export const Addcorses = () => {
  const [open, setOpen] = useState(false);
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const [courses, setCorses] = useState({
    name: '',
    descriptions: '',
  });
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const handleOnChange = (event) => {
    event.preventDefault();
    console.log('change', event.target.files);
    const file = event.target.files[0];
    setImage(file);
    fileReader.readAsDataURL(file);

   
  
    const avatar = new FormData();
    avatar.append('file', file);
    console.log(avatar)
  };


  const changeHend = (e) => {
    setCorses((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

 const Submit = (e) => {
e.preventDefault()

postImgCourses(avatar)
 }

  return (
    <div className={styled.add}>
      {open && (
        <div className={styled.modal}>
          <div className={styled.modal_card}>
            <div className={styled.modal_vel}>
              <div className={styled.exitt}>
                <AiOutlineClose
                  onClick={() => setOpen(false)}
                  className={styled.exit}
                />
              </div>
              <form onSubmit={Submit} className={styled.form}>
                {/* ------------------------------ */}
                <h1 className={styled.aa}>Picture</h1>
                <div className={styled.imgv}>
                  <div className={styled.inp_file}>
                    <label htmlFor="file_loader" className={styled.lab}>
                      Загрузить файл
                    </label>
                    <input
                      className={styled.inp_ff}
                      type="file"
                      id="file_loader"
                      onChange={handleOnChange}
                    />
                    <p></p>
                  </div>
                  <div className={styled.imgh}>
                    <img className={styled.imgg} src={imageURL} alt="" />
                  </div>
                </div>
                {/* -------------------------- */}
                <h2 className={styled.aa}>Name Courses </h2>
                <div className={styled.inputbox}>
                  <IoBookSharp className={styled.icon} />
                  <input
                  onChange={changeHend}
                    name="name"
                    className={styled.ino}
                    required
                    type="text"
                  />
                  <label className={styled.la} htmlFor="">
                    Name Courses
                  </label>
                </div>

                <h2 className={styled.aa}>Descriptions</h2>
                <div className={styled.inputbox}>
                  <DiSqllite className={styled.icon} />
                  <input
                    onChange={changeHend}
                    name="descriptions"
                    className={styled.ino}
                    required
                    type="text"
                  />
                  <label className={styled.la} htmlFor="">
                    Descriptions
                  </label>
                </div>
                <button  className={styled.btn_modal}>Save Courses</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(true)} className={styled.addTech}>
        Add Courses <BiPlusMedical className={styled.icon_add} />
      </button>
    </div>
  );
};
