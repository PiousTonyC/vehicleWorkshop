import './garage.css';
import Sidebar from '../../components/sidebar/sidebar';
import Dashboard from '../../components/dashboard/dashboard';
import Myprofile from '../../components/myProfile/myProfile';
import Addvehicle from '../../components/addvehicle/addvehicle';
import Checkstatus from '../../components/checkstatus/checkstatus';

const Garage = () => {
    return (
        <div className="garageContainer">
            <div className="grdContainer">
                <div className="item1">
                    <Sidebar/>
                </div>
                <div className="item2">
                    {/* <p>button click cheyumbol dashboard my profile my vehicle book service check status okkey ivede render aaye veranam</p> */}
                    {/* <Dashboard/> */}
                    {/* <Myprofile/> */}
                    {/* <Addvehicle/> */}
                    <Checkstatus/>
                </div>
            </div>
        </div>
    );
}
 
export default Garage;