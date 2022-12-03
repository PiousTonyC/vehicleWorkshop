import './login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({login,setLogin}) => {

    
    const navigate = useNavigate();

    const [inputs,setInputs]=useState({
        username:"",
        password:""
      })
    
    function submit(){
        setLogin(true)
        console.log(login)
        navigate('/garage');
        console.log(inputs);
    }

    function signin(){
        navigate('/signin');
        
    }

      const handleChange = e=>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
      }

    return (
        <div className="pageContainer">
            <div className="container">
                <div className="login">
                    <h2>Login</h2>
                    <div id="userName" className="inputfield" >
                        <input type="text" placeholder='UserName' name='username' onChange={handleChange}/>
                    </div>
                    <div id="password"  className="inputfield">
                        <input type="password" placeholder='Password' onChange={handleChange} name='password'/>
                    </div>
                    <div className="buttons">
                        <button className='loginButton' onClick={submit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Login;