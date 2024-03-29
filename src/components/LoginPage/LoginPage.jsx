import React, { useState } from 'react';
import styled from './LoginPage.module.css';
import { BsEnvelopeFill, BsCpuFill } from 'react-icons/bs';
import Cookies from 'js-cookie';
import { userAuth } from '../../api/clientApi';
import { useNavigate } from 'react-router';
import { Footer } from '../Footer/Footer';

export const LoginPage = () => {
  const redirect = useNavigate();
  const [err, setErr] = useState();

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

  const [inputType, setInputType] = useState('password');

  const toggleInputeType = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try{

  const data = await userAuth(authData);
  console.log(data);

  Cookies.set('token', data.token, {
    expires: 10,
  });
 
  if (data.token) {
    
    redirect('/');
    setAuthData(false);
  } 
  location.reload();

    }catch(error){
     setErr('Incorrect password or email address entered!')
    }
  };

  return (
    <>
      <div className={styled.wraper}>
        <div className={styled.box}>
          <div className={styled.value}>
            <form onSubmit={submitForm}>
              <h1 className={styled.text}>Login</h1>
              <div className={styled.inputbox}>
                <BsEnvelopeFill className={styled.icon} />
                <input
                  type="email"
                  required
                  onChange={changeHandler}
                  name="email"
                />
                <label htmlFor="">Email</label>
              </div>
              <div className={styled.inputbox}>
                <BsCpuFill onClick={toggleInputeType} className={styled.icon} />
                <input
                  type={inputType}
                  required
                  onChange={changeHandler}
                  name="password"
                />
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
                <p className={styled.error_title}>{err}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
