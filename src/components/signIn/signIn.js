import './signIn.css'
import { useNavigate } from 'react-router-dom'
import { useRef} from 'react';

const Signin = ({login,setLogin,isActive,setIsActive}) => {

    const navigate = useNavigate();

    const customer = {
        name:"",
        email:"",
        password:""
    }

    const nameRef = useRef(null);
    const passRef = useRef(null);
    const emailRef = useRef(null);

    function submit(){
        customer.name=nameRef.current.value;
        customer.email=emailRef.current.value;
        customer.password=passRef.current.value;
        console.log(customer);
        setLogin(true)
        console.log(login)
        navigate('/garage');
    }

    function cancel(){
        setIsActive(!isActive)
    }

    return (
        <div className="pageContainer">
            <div className="container">
                <div className="signin">
                    <h2>Signin</h2>
                    <div id="userName" className="inputfield" >
                        <input type="text" placeholder='UserName' name='username' ref={nameRef} />
                    </div>
                    <div id="email" className="inputfield" >
                        <input type="text" placeholder='Email' name='email' ref={emailRef} />
                    </div>
                    <div id="password"  className="inputfield">
                        <input type="password" placeholder='Password'  name='password' ref={passRef}/>
                    </div>
                    <div className="buttons">
                        <button className='signinButton' onClick={submit}>Sign in</button>
                        <button className='cancelButton' onClick={cancel}>Cancel</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default Signin;