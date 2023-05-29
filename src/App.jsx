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

function App() {
  return (
   
    <Layout>
      <Routes>
        <Route path="/home"  >
        <Route index element={<Home />} />
        <Route path=":id" element={<Cardinfo/>} /> 
           </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/tech" element={<Techers />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/corses">
          <Route index element={<Courses />} />

           <Route path=":id" element={<Lessons/>} /> 


        </Route>
      </Routes>
    </Layout>
  );
}
export default App;
