import './loginSignup.css'
import { useState } from 'react';
import Login from '../../components/login/login'
import Signin from '../../components/signIn/signIn';



const Loginsignup = ({login,setLogin}) => {

    const [isActive,setIsActive] = useState(true);

    return (
        <div className="lsContainer">
            <div className="logindiv" id={!isActive ? 'on_of' : ''}><Login login={login} setLogin={setLogin}/></div>
            <div className="signinLink" id={!isActive ? 'on_of' : ''}>
                    <span >Don't have an account ? </span>
                    <span className='signup' onClick={()=>{setIsActive(!isActive)}}>Click here</span>
            </div>
            <div className="signindiv" id={isActive ? 'on_of' : ''}><Signin login={login} setLogin={setLogin} isActive={isActive} setIsActive={setIsActive}/></div>
        </div>
    );
}
 
export default Loginsignup;