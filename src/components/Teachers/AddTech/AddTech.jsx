import React, { useState } from 'react';
import styled from './AddTech.module.css';
import { BiPlusMedical } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const AddTech = () => {
  const [open, setOpen] = useState(false);
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const handleOnChange = (event) => {
    event.preventDefault();
    console.log('change', event.target.files);
    const file = event.target.files[0];
    setImage(file);
    fileReader.readAsDataURL(file);
  };

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
              <form className={styled.form}>
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
                      onChange={handleOnChange}
                    />
                    <p></p>
                  </div>
                  <div className={styled.imgh}>
                    <img className={styled.imgg} src={imageURL} alt="" />
                  </div>
                </div>
                {/* -------------------------- */}
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
