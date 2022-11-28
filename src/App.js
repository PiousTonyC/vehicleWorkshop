import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import Login from './pages/login/login';
import Garage from './pages/garage/garage';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
const [login,setLogin]=useState(false)

  return (
    
      <div className="Container">
        <Router>
          <Navbar login={login}/>
          <div className="Body">
            <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='/login' element={<Login login={login} setLogin={setLogin}/>}></Route>
              <Route path='/garage' element={<Garage/>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;

