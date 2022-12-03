import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar = ({login}) => {

    return (
        <div className="navbar">
            <h2 className="navHeading">e-Workshop</h2>
            <div className="navLinks">
                <NavLink to="/" style={({ isActive }) => ({background: isActive ? 'violet' : ''})}>
                    Home
                </NavLink>
                { login === true ? <NavLink to="/garage" style={({ isActive }) => ({background: isActive ? 'violet' : ''})}>
                    Garage
                </NavLink> : <></> 
                }
                { login === false ? <NavLink to="/login" style={({ isActive }) => ({background: isActive ? 'violet' : ''})}>
                Login/SignUp
                </NavLink>
                    : <><NavLink to="/login" style={({ isActive }) => ({background: isActive ? 'violet' : ''})}>
                    Logout</NavLink>
                </>
                }
            </div>
        </div>
    );
}
 
export default Navbar;

// style={{backgroundColor: "blue" }}