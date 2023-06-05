import React, { useState, useRef, useEffect } from 'react';
import styled from './AddTech.module.css';
import { BiPlusMedical } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { DiYeoman, DiUikit, DiSqllite } from 'react-icons/di';
import ky from 'ky';
import Cookies from 'js-cookie';
import { getTeachers } from '../../../api/clientApi';

export const AddTech = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState();

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const handleOnChange = (event) => {
    if (event.target.files[0]) {

      event.preventDefault();

      console.log('change', event.target.files);
      const file = event.target.files[0];
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.value]: e.target.name,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await getTeachers(token);
        const data = await response.json();
        console.log(data);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

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
              <form onSubmit={handleOnChange} className={styled.form}>
                {/* ------------------------------ */}
                <h1 className={styled.aa}>Avatar</h1>
                <div className={styled.imgv}>
                  <div className={styled.inp_file}>
                    <label htmlFor="file_loader" className={styled.lab}>
                      Загрузить файл
                    </label>
                    <input
                      className={styled.inp_ff}
                      type="file"
                      id="file_loader"
                      onChange={handleInput}
                    />
                    <p></p>
                  </div>
                  <div className={styled.imgh}>
                    <img className={styled.imgg} src={imageURL} alt="" />
                  </div>
                </div>
                {/* -------------------------- */}
                <h2 className={styled.aa}>Name Techers</h2>
                <div className={styled.inputbox}>
                  <DiYeoman className={styled.icon} />

                  <input
                    className={styled.ino}
                    required
                    type="text"
                    onChange={handleInput}
                  />


                  <label className={styled.la} htmlFor="">
                    Name
                  </label>
                </div>
                <h2 className={styled.aa}>Profession</h2>
                <div className={styled.inputbox}>
                  <DiUikit className={styled.icon} />
                  <input className={styled.ino} required type="text" />
                  <label className={styled.la} htmlFor="">
                    Profession
                  </label>
                </div>
                <h2 className={styled.aa}>Descriptions</h2>
                <div className={styled.inputbox}>
                  <DiSqllite className={styled.icon} />
                  <input
                    className={styled.ino}
                    required
                    type="text"
                    onChange={handleInput}
                  />
                  <label className={styled.la} htmlFor="">
                    Descriptions
                  </label>
                </div>
                <button className={styled.btn_modal}>Save Teachers</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(true)} className={styled.addTech}>
        Add a Teacher <BiPlusMedical className={styled.icon_add} />
      </button>
    </div>
  );
};
