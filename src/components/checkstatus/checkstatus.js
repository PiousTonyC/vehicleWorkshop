import './checkstatus.css'
import { useState } from 'react';

const Checkstatus = () => {

    const [isActive,setIsActive] = useState(true);
    const service = {
        id:"1234",
        vid:"A0017",
        status:"Completed"
    }

    return (
        <div className="cscontainer">
            <div className="CScontainer">
                <div className="innerContainer">
                    <div className="csHeading">
                        <h2>Check Service status</h2>
                    </div>
                    <hr />
                    <div className="csBody">
                        <div className="sid">
                                <label htmlFor="sid">Enter Service number</label>
                                <input type="text" id="sid" placeholder='Enter serviec number...' />
                        </div>
                        <div className="buttons">
                            <button className='checkButton' onClick={()=>{setIsActive(false)}}>Check</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sreport" id={isActive ? 'on_of' : ''}>
                    <p>Service id: {service.id} Vehicle id:{service.vid} Status:{service.status}</p>
            </div>
        </div>
    );
}
 
export default Checkstatus;