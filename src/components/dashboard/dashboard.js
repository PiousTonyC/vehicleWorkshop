import './dashboard.css'
import Vcard from '../vcard/vcard';
import Scard from '../scard/scard';
import { useState,useEffect } from 'react';

const Dashboard = () => {

    // details from the "Customer table"
    const customer = {name:"Pious Tony",
                    email:"pioustony44733@gmail.com",
                    address:"Chiramel House,Ayyanthole,Thrissur",
                    phno:"9072272724"};

    
    const[vehicles,setVehicles]=useState([]);
    const[services,setServices]=useState([]);

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

    const serviceData = [{
        sid:"001",
        date:"2022-11-12",
        vid:"AA01"
    },
    {
        sid:"002",
        date:"2022-02-12",
        vid:"AA01"
    },{
        sid:"003",
        date:"2022-06-21",
        vid:"AA03"
    }]


    useEffect(()=>{
        setVehicles(vehiclesData);
        setServices(serviceData);
    },[]);

    return (
        <div className="dashboardContainer">
            <div className="segment">
                <h2 id='hmain'>Hello {customer.name}</h2>
                <hr />
                <div className="sub">
                    <div className="left">
                        <p>{customer.name}</p>
                        <p>{customer.address}</p>
                    </div>
                    <div className='right'>
                        <p>{customer.email}</p>
                        <p>{customer.phno}</p>
                    </div>
                </div>
            </div>

            <div className="segment" id='myvehicles'>
                <h2 className='subHeading'>My Vehicles</h2>
                <div className="vcards">
                    {vehicles && vehicles.map((vehicle)=>(
                            <Vcard  data={vehicle} key={vehicle.vid} />
                    ))}
                </div>
            </div>

            <div className="segment" id='service'>
                <h2 className='subHeading'>Service History</h2>
                <div className="scards">
                    {services && services.map((service)=>(
                            <Scard  data={service} key={service.sid} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;