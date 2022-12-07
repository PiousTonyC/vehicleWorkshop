import './garage.css';
import Sidebar from '../../components/sidebar/sidebar';
import Dashboard from '../../components/dashboard/dashboard';
import Myprofile from '../../components/myProfile/myProfile';
import Addvehicle from '../../components/addvehicle/addvehicle';
import Bookservice from '../../components/bookservice/bookservice';
import Checkstatus from '../../components/checkstatus/checkstatus';
import { useState ,useEffect} from 'react';

const Garage = () => {
    const [toggle,setToggle]=useState(1)



    return (
        <div className="garageContainer">
            <div className="grdContainer">
                <div className="item1">
                    <Sidebar toggle={toggle} setToggle={setToggle} />
                </div>
                <div className="item2">
                    {console.log(toggle)}
                    {toggle===1 && <Dashboard/>}
                    {toggle===2 && <Myprofile />} 
                    {toggle===3 && <Addvehicle/>}
                    {toggle===4 && <Bookservice/>}
                    {toggle===5 && <Checkstatus/>}                    
                </div>
            </div>
        </div>
    );
}


export default Garage;