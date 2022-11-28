import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = ({login}) => {

    return (
        <div className="navbar">
            <h2 className="navHeading">e-Workshop</h2>
            <div className="navLinks">
                <Link to="/">Home</Link>
                { login === true ? <Link to="/garage">Garage</Link> : <></> }
                { login === false ? <Link to="/login">Login/SignUp</Link>
                    : <><Link to="/login">Login/SignUp</Link></>
                }
            </div>
        </div>
    );
}
 
export default Navbar;