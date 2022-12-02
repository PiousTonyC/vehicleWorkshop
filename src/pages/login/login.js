import './login.css'
import { useState } from 'react'

const Login = ({login,setLogin}) => {
    
    function submit(){
        setLogin(true)
        console.log(login)
    }
    
    const [inputs,setInputs]=useState({
        username:"",
        password:""
      })

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
                <p className='signup'>Don't have an account ? <a href="https://www.google.com" target='_blank'>Click here</a> </p>
            </div>
        </div>
        
    );
}
 
export default Login;