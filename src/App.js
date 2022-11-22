import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import Login from './pages/login/login';
import Garage from './pages/garage/garage';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    
      <div className="Container">
        <Router>
          <Navbar></Navbar>
          <div className="Body">
            <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/garage' element={<Garage/>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;

