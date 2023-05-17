
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'


function App() {


  return (
   <Layout>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
   </Layout>
  )
}
export default App
