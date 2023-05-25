import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="../Home" />;
  }
};

export default Protected;
