import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';
import { useNavigate } from 'react-router-dom'

const Navbar = ({login,setLogin}) => {

    const navigate = useNavigate();

    const logoutfunction = () => {
        const response = window.confirm("Do you wan to Logout !");
        if (response){
            setLogin(false)
            navigate('/');
        }
        else{
        }
    }

    return (
        <div className="navbar">
            <h2 className="navHeading">e-Workshop</h2>
            <div className="navLinks">
                <NavLink to="/" style={({ isActive }) => ({background: isActive ? 'rgb(226, 226, 191)' : '' , color : isActive ? 'black' :'' })}>
                    Home
                </NavLink>
                { login === true ? <NavLink to="/garage" style={({ isActive }) => ({background: isActive ? 'rgb(226, 226, 191)' : '' , color : isActive ? 'black' :'' })}>
                    Garage
                </NavLink> : <></> 
                }
                { login === false ? <NavLink to="/loginSignup" style={({ isActive }) => ({background: isActive ? 'rgb(226, 226, 191)' : '' , color : isActive ? 'black' :'' })}>
                Login/SignUp
                </NavLink>
                    : <div className="logoutContainer" onClick={logoutfunction} >Logout</div>
                }
            </div>
        </div>
    );
}
 
export default Navbar;

// style={{backgroundColor: "blue" }}