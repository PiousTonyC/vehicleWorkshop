import "./signIn.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { options } from "../../util";

const Signin = ({ login, setLogin, isActive, setIsActive }) => {
  const navigate = useNavigate();

  const customer = {
    name: "",
    email: "",
    password: "",
  };

  const nameRef = useRef(null);
  const passRef = useRef(null);
  const emailRef = useRef(null);

  async function submit() {
    customer.name = nameRef.current.value;
    customer.email = emailRef.current.value;
    customer.password = passRef.current.value;
    console.log(customer);
    const body = JSON.stringify(customer);

    let resp = await fetch(
      "http://localhost:8000/api/v1/auth/user/register",
      options("POST", body)
    );

    let respJson = await resp.json();
    if (resp.status === 422) {
      console.log("error");
    } else {
      localStorage.setItem("token", respJson.data.token);
      console.log("set in local storage");
      setLogin(true);

      navigate("/garage");
    }
  }

  function cancel() {
    setIsActive(!isActive);
  }

  return (
    <div className="pageContainer">
      <div className="container">
        <div className="signin">
          <h2>Signin</h2>
          <div id="userName" className="inputfield">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              ref={nameRef}
            />
          </div>
          <div id="email" className="inputfield">
            <input
              type="text"
              placeholder="Email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div id="password" className="inputfield">
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={passRef}
            />
          </div>
          <div className="buttons">
            <button className="signinButton" onClick={submit}>
              Sign in
            </button>
            <button className="cancelButton" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
