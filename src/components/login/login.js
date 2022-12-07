import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { options } from "../../util";

const Login = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  async function submit() {
    
    console.log(login);
    console.log("hello1");
    const body = JSON.stringify({
      email: inputs.username,
      password: inputs.password,
    });

    let resp = await fetch(
      "http://localhost:8000/api/v1/auth/user/create-session",
      options("POST", body)
    );
    let respJson = await resp.json();
    if (resp.status === 422) {
      console.log("incorrect credentials");
    } else {
      localStorage.setItem("token", respJson.data.token);
      console.log("set in local storage");
      navigate("/garage");
      setLogin(true);
    }

    // console.log(inputs);
  }

  function signin() {
    navigate("/signin");
  }

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pageContainer">
      <div className="container">
        <div className="login">
          <h2>Login</h2>
          <div id="userName" className="inputfield">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div id="password" className="inputfield">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="buttons">
            <button className="loginButton" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
