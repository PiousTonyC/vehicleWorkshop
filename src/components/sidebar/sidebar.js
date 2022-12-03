import './sidebar.css'

const Sidebar = ({toggle,setToggle}) => {
    
    return (
        <div className="sideBarContainer">
            <div className="elements" id={toggle===1 ? 'active' : ''} onClick={()=>setToggle(1)}>Dashboard</div>
            <div className="elements" id={toggle===2 ? 'active' : ''} onClick={()=>setToggle(2)}>My Profile</div>
            <div className="elements" id={toggle===3 ? 'active' : ''} onClick={()=>setToggle(3)}>Add Vehicles</div>
            <div className="elements" id={toggle===4 ? 'active' : ''} onClick={()=>setToggle(4)}>Book Service</div>
            <div className="elements" id={toggle===5 ? 'active' : ''} onClick={()=>setToggle(5)}>Check Service Status</div>
            {/* <div className="elements" id='dashboard' onClick={()=>setToggle(1)}>Dashboard</div>
            <div className="elements" id='myprofile' onClick={()=>setToggle(2)}>My Profile</div>
            <div className="elements" id='addvehicles' onClick={()=>setToggle(3)}>Add Vehicles</div>
            <div className="elements" id='bookservices' onClick={()=>setToggle(4)}>Book Service</div>
            <div className="elements" id='checkstatus' onClick={()=>setToggle(5)}>Check Service Status</div> */}
        </div>
    );
}

export default Sidebar;