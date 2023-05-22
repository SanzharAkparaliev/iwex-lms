import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Techers from './Pages/Techers';
import ProfilePage from './components/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tech" element={<Techers />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}
export default App;
