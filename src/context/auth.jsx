import React, { createContext, useContext, useEffect, useState } from 'react';
import { userAuth } from '../api/clientApi';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router';
// import { Redirect } from 'react-router';

const authContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const router = redirect();

  useEffect(() => {
    async function checkToken() {
      const token = Cookies.get('token');
      if (token) {
        const userData = await checkUser(token);
        if (userData) setUser(userData);
      }
      setLoading(false);
    }
    checkToken();
  }, []);

  const login = async (userData) => {
    const data = await userAuth(userData);
    console.log(data);

    const date = new Date();
    date.setTime(date.getTime() + 20 * 1000);
    Cookies.set('token', data.token, {
      expires: date,
    });

    // if (data) {
    //   return <Navigate to="../Pages/ProfileUser.jsx" />;
    // }
  };

  return (
    <authContext.Provider value={{ login, loading, user, isAuth: !!user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
