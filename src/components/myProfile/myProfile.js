import './myProfle.css'
import { useState,useEffect } from 'react';
import Vcard from '../vcard/vcard';

const Myprofile = () => {

    const vehiclesData = [
        {
        vid:"AA01",
        regno:"KL 07 AZ 6553",
        vtype:"SUV",
        brand:"Toyota"   
    },
    {
        vid:"AA02",
        regno:"KL 34 BZ 9953",
        vtype:"SUV",
        brand:"KIA"   
    },
    {
        vid:"AA03",
        regno:"TN 07 CA 6444",
        vtype:"SEDAN",
        brand:"BMW"   
    }];

    const [vehicles,setVehicles] = useState([]);

    useEffect(()=>{
        setVehicles(vehiclesData)
    },[]);

    const customer = {fname:"Pious",
                    lname:"Tony",
                    email:"pioustony44733@gmail.com",
                    address:"Chiramel House,Ayyanthole,Thrissur",
                    phno:"9072272724",
                    dob:"2002-06-19"};

    return (
        <div className="profileContainer">
            <div className="pSegment">
                <h3 className='subHeading'>Personal Details</h3>
                <div className="gridcontainer">
                    <div className="name">
                        <span>Name: </span>
                        <span><input type="text" placeholder="Enter Name" defaultValue={customer.fname +" "+ customer.lname}  /></span>
                    </div>
                    <div className="dob">
                        <span>DOB: </span>
                        <span><input type="text" placeholder="Date-of-Birth" defaultValue={customer.dob} /></span>
                    </div>
                    <div className="email">
                        <span>Email: </span>
                        <span><input type="text" placeholder="Enter Email" defaultValue={customer.email}/></span>
                    </div>
                    <div className="phonenum">
                        <span>Ph Num: </span>
                        <span><input type="text" placeholder="Enter Phone num" defaultValue={customer.phno} /></span>
                    </div>
                    <div className="address">
                        <span>City: </span>
                        <span><input type="text" placeholder="Enter Address" defaultValue={customer.address}/></span>
                    </div>
                </div>
                <div className="buttons">
                    <button className='editButton'>Edit</button>
                    <button className='saveButton'>Save</button>
                </div>
            </div>

            <div className="pSegment">
                <h3 className='subHeading'>Vehicle details</h3>
                <div className="vcards">
                    {vehicles && vehicles.map((vehicle)=>(
                        <><Vcard  data={vehicle} key={vehicle.vid} />
                        <div className="deletediv"><button className='deleteButton'>Delete</button></div>
                    </>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Myprofile;