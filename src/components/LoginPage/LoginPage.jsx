import React, { useState } from 'react';
import styled from './LoginPage.module.css';
import { BsEnvelopeFill, BsCpuFill } from 'react-icons/bs';
import { userAuth } from '../../api/clientApi';

export const LoginPage = () => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await userAuth(authData);
    console.log(data);
  };

  return (
    <div className={styled.wraper}>
      <div className={styled.box}>
        <div className={styled.value}>
          <form onSubmit={submitForm}>
            <h1 className={styled.text}>Login</h1>
            <div className={styled.inputbox}>
              <BsEnvelopeFill className={styled.icon} />
              <input type="email" required onChange={changeHandler} />
              <label htmlFor="">Email</label>
            </div>
            <div className={styled.inputbox}>
              <BsCpuFill className={styled.icon} />
              <input type="password" required onChange={changeHandler} />
              <label htmlFor="">Password</label>
            </div>
            <div className={styled.forget}>
              <label htmlFor="">
                <input type="checkbox" />
                Remember me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className={styled.btn}>Log in</button>
            <div className={styled.registr}>
              <p>
                Dont have a account <a href="@">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// <div className={styled.wrap}>
//     <div className={styled.card}>
//             <h1 className={styled.h}>Login </h1>
//             <div className={styled.inputbox}>
//                 <input type="text" placeholder='Email-adress' />
//                 <label for="">Email</label>
//             </div>
//             <div className={styled.inputbox}>
//                 <input type="password" placeholder='Password' />
//                 <label for="">Password</label>
//             </div>
//     </div>
// </div>
