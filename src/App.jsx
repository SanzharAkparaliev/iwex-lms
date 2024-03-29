import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Techers from './Pages/Techers';
import ProfilePage from './components/Profile';
import Courses from './Pages/Courses';
import Lessons from './components/Lessons/Lessons';

import Cardinfo from './components/Cardinfo/Cardinfo';
import Cookies from 'js-cookie';
import AddLesons from './components/AddLeson/index';
import Page404 from './components/PageNotFound';
import { useState } from 'react';
import Material from './components/Materials';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home/:id" element={<Cardinfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {Cookies.get('token') ? (
          <>
            <Route path="/tech" element={<Techers />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/materials" element={<Material />} />
          </>
        ) : (
          <Route path="*" element={<Page404 />} />
        )}
        {Cookies.get('token') ? (
          <Route path="/corses">
            <Route index element={<Courses />} />
            <Route path=":id" element={<Lessons />} />
            <Route path=":id/lessons" element={<AddLesons />} />
          </Route>
        ) : (
          <Route path="*" element={<Page404 />} />
        )}
      </Routes>
    </Layout>
  );
}
export default App;
