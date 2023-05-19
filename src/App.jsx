import './App.scss';
import Home from './pages/Home';
import _404 from './pages/404';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { navContext } from './context/Context';
import LoginPage from './pages/LoginPage';


function App() {

  var context = useContext(navContext);

  return (
    <div className="App dark">
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/" exact element={ context.user ? (<Home/>) : <Navigate to={'/login'} />} />
        <Route path="*" element={<_404/>} />
    </Routes>
    </div>
  )
}

export default App
