import './myProfle.css'

const veh1 = {
    id:"123",
    regno:"kl 08 6543",
    vtype:"SUV",
    year:"2022"
}

const Myprofile = () => {
    return (
        <div className="profileContainer">
            <div className="pSegment">
                <h3 className='subHeading'>Personal Details</h3>
                <div className="gridcontainer">
                    <div className="name">
                        <span>Name: </span>
                        <span><input type="text" placeholder="Enter Name"  /></span>
                    </div>
                    <div className="dob">
                        <span>DOB: </span>
                        <span><input type="text" placeholder="Date-of-Birth"  /></span>
                    </div>
                    <div className="email">
                        <span>Email: </span>
                        <span><input type="text" placeholder="Enter Email"/></span>
                    </div>
                    <div className="phonenum">
                        <span>Ph Num: </span>
                        <span><input type="text" placeholder="Enter Phone num"  /></span>
                    </div>
                    <div className="address">
                        <span>City: </span>
                        <span><input type="text" placeholder="Enter Address"/></span>
                    </div>
                </div>
                <div className="buttons">
                    <button className='editButton'>Edit</button>
                    <button className='saveButton'>Save</button>
                </div>
            </div>

            <div className="pSegment">
                <h3 className='subHeading'>Vehicle details</h3>
                <ul>
                    <li>vehicle id:{veh1.id} vehicle regno:{veh1.regno} vehicle type:{veh1.vtype}</li>
                    <li>Vehicle 2 and details</li>
                    <li>Vehicle 3 and details</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            ithil ene eeh page initially load cheyumbol presonal detail ill value db ill ninnum ketanam
            ....adhyam edit button only pinne save button visible aaya mathe....vechicles inum edit and save button ketanam...........
            vehicle display cheyunathu pinne korachu kude bange aakam

        </div>
    );
}
 
export default Myprofile;