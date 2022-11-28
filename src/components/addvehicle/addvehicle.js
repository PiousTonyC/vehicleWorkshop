import { useRef } from 'react';
import './addvehicle.css'

const vehicle={
    regno:"",
    year:"",
    type:'',
    wdrive:'',
    tran:'',
    fueltype:'',
    hp:''
}

const Addvehicle = () => {

    const regnoRef = useRef(null);
    const yearRef = useRef(null);
    const typeRef = useRef(null);
    const wdriveRef = useRef(null);
    const tranRef = useRef(null);
    const fueltypeRef=useRef(null);
    const hpRef = useRef(null);

    function submit(){
        console.log(regnoRef.current.value);
        vehicle.regno=regnoRef.current.value;
        vehicle.type=typeRef.current.value;
        vehicle.year=yearRef.current.value;
        vehicle.wdrive=wdriveRef.current.value;
        vehicle.tran=tranRef.current.value;
        vehicle.fueltype=fueltypeRef.current.value;
        vehicle.hp=hpRef.current.value;
        console.log(vehicle);
    }

    function clear(){
        regnoRef.current.value='';
        typeRef.current.value='';
        yearRef.current.value='';
        wdriveRef.current.value='';
        tranRef.current.value='';
        fueltypeRef.current.value='';
        hpRef.current.value='';
    }

    return (
        <div className="avcontainer">
            <div className="pSegment">
                <h4>Enter vehicle details</h4>
                <div className="gridcontainer">
                        <div className="name">
                            <span>Reg.no: </span>
                            <span><input type="text" placeholder="Reg no:" ref={regnoRef}/></span>
                        </div>
                        <div className="dob">
                            <span>Year: </span>
                            <span><input type="text" placeholder="Year"  ref={yearRef}/></span>
                        </div>
                        <div className="email">
                            <span>Type: </span>
                            <span><input type="text" placeholder="-select-" ref={typeRef}/></span>
                        </div>
                        <div className="phonenum">
                            <span>Fuel Type: </span>
                            <span><input type="text" ref={fueltypeRef} placeholder="-select-"  /></span>
                        </div>
                        <div className="HP">
                            <span>Hp: </span>
                            <span><input type="text" ref={hpRef} placeholder="Horsepower"/></span>
                        </div>
                        <div className="wdrive">
                            <span>Wheel drive:</span>
                            <span><input type="text" placeholder="-select-" ref={wdriveRef}/></span>
                        </div>
                        <div className="transmission">
                            <span>Transmission: </span>
                            <span><input type="text" ref={tranRef} placeholder="Transmision"/></span>
                        </div>
                    </div>
                <div className="buttons">
                    <button className='editButton' onClick={clear}>Clear</button>
                    <button className='saveButton' onClick={submit}>Add</button>
                </div>
            </div>
        </div>
    );
}
 
export default Addvehicle;