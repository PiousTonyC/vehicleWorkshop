import { useEffect, useState,useRef} from 'react';
import './myProfle.css'
import Vcard from '../vcard/vcard';


const Myprofile = () => {

    const [edit,setEdit]=useState('false');
    const nameRef = useRef(null);
    const addRef = useRef(null);
    const dobRef = useRef(null);
    const emailRef = useRef(null);
    const phnoRef = useRef(null);

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

    const customer = {name:"Pious Tony",
                    email:"pioustony44733@gmail.com",
                    address:"Chiramel House,Ayyanthole,Thrissur",
                    phno:"9072272724",
                    dob:"2002-06-19"};


    
    function submit(){
        setEdit('false')
        console.log(nameRef.current.value);
        customer.name=nameRef.current.value;
        customer.dob=dobRef.current.value;
        customer.email=emailRef.current.value;
        customer.ph=phnoRef.current.value;
        customer.add=addRef.current.value;
        console.log(customer);
    }


    return (
        <div className="profileContainer">
            <div className="pSegment">
                <h3 className='subHeading'>Personal Details</h3>
                <div className="gridcontainer">
                {edit==='true' ? 
                <>  <div className="name">
                            <span>Name: </span>
                            <span><input type="text" ref={nameRef} placeholder="Enter Name" /></span>
                        </div>
                        <div className="dob">
                            <span>DOB: </span>
                            <span><input type="text" ref={dobRef} placeholder="Date-of-Birth" /></span>
                        </div>
                            <div className="email">
                                <span>Email: </span>
                                <span><input type="text" ref={emailRef} placeholder="Enter Email" /></span>
                            </div>
                            <div className="phonenum">
                                <span>Ph Num: </span>
                                <span><input type="text" ref={phnoRef} placeholder="Enter Phone num" /></span>
                            </div>
                            <div className="address">
                                <span>City: </span>
                                <span><input type="text" ref={addRef} placeholder="Enter Address" /></span>
                            </div>
                        </>
                     :  <>  <div className="name">
                        <span>Name: </span>
                        <span><input type="text" placeholder="Enter Name" value={customer.name}  /></span>
                    </div>
                    <div className="dob">
                        <span>DOB: </span>
                        <span><input type="text" placeholder="Date-of-Birth" value={customer.dob} /></span>
                    </div>
                    <div className="email">
                        <span>Email: </span>
                        <span><input type="text" placeholder="Enter Email" value={customer.email}/></span>
                    </div>
                    <div className="phonenum">
                        <span>Ph Num: </span>
                        <span><input type="text" placeholder="Enter Phone num" value={customer.phno} /></span>
                    </div>
                    <div className="address">
                        <span>City: </span>
                        <span><input type="text" placeholder="Enter Address" value={customer.address}/></span>
                    </div>
                    </>
                    }
                </div>
                <div className="buttons">
                    {edit==='false' 
                        ? <button className='editButton' onClick={()=>setEdit('true')}>Edit</button>
                        :
                        <>  <button className='cancelButton' onClick={()=>setEdit('false')}>Cancel</button>
                            <button className='saveButton' onClick={submit}>Save</button>     
                        </>
                    }
                </div>
            </div>

            <div className="pSegment">
                <h3 className='subHeading'>Vehicle customer</h3>
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