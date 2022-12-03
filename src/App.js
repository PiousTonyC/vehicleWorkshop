import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
// import Login from './pages/login/login';
import Garage from './pages/garage/garage';
// import Signin from './components/signIn/signIn';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Loginsignup from './pages/loginSignup/loginSignup';
import { useState } from 'react';

function App() {
const [login,setLogin]=useState(false)

  return (
    
      <div className="Container">
        <Router>
          <Navbar login={login} setLogin={setLogin}/>
          <div className="Body">
            <Routes>
              <Route path='/' element={<Main/>}></Route>
              {/* <Route path='/login' element={<Login login={login} setLogin={setLogin}/>}></Route> */}
              <Route path='/garage' element={<Garage/>}></Route>
              {/* <Route path='/signin' element={<Signin login={login} setLogin={setLogin}/>}></Route> */}
              <Route path='/loginsignup' element={<Loginsignup login={login} setLogin={setLogin}/>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;

