import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sideBarContainer">
            <div className="elements" id='dashboard'>Dashboard</div>
            <div className="elements" id='myprofile'>My Profile</div>
            <div className="elements" id='addvehicles'>Add Vehicles</div>
            <div className="elements" id='bookservices'>Book Service</div>
            <div className="elements" id='checkstatus'>Check Status</div>
        </div>
    );
}

export default Sidebar;