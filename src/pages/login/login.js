import './login.css'

const Login = () => {
    return (
        <div className="pageContainer">
            <div className="container">
                <div className="login">
                    <h2>Login</h2>
                    <div id="userName" className="inputfield">
                        <input type="text" placeholder='User Name'/>
                    </div>
                    <div id="password" className="inputfield">
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="buttons">
                    <button className='loginButton'>Login</button>
                </div>
                </div>
                <p className='signup'>Don't have an account ? <a href="https://www.google.com" target='_blank'>Click here</a> </p>
            </div>
        </div>
        
    );
}
 
export default Login;