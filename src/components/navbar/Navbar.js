import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navHeading">e-Workshop</h2>
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/garage">Garage</Link>
                <Link to="/login">Login/SignUp</Link>
            </div>
        </div>
    );
}
 
export default Navbar;