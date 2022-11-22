import './addvehicle.css'

const Addvehicle = () => {
    return (
        <div className="pSegment">
            <h4>Enter vehicle details</h4>
            <div className="gridcontainer">
                    <div className="name">
                        <span>Reg.no: </span>
                        <span><input type="text" placeholder="Reg no:"  /></span>
                    </div>
                    <div className="dob">
                        <span>Year: </span>
                        <span><input type="text" placeholder="Year"  /></span>
                    </div>
                    <div className="email">
                        <span>Type: </span>
                        <span><input type="text" placeholder="-select-"/></span>
                    </div>
                    <div className="phonenum">
                        <span>Fuel Type: </span>
                        <span><input type="text" placeholder="-select-"  /></span>
                    </div>
                    <div className="HP">
                        <span>Hp: </span>
                        <span><input type="text" placeholder="Horsepower"/></span>
                    </div>
                    <div className="wdrive">
                        <span>Wheel drive:</span>
                        <span><input type="text" placeholder="-select-"/></span>
                    </div>
                    <div className="transmission">
                        <span>Transmission: </span>
                        <span><input type="text" placeholder="Transmision"/></span>
                    </div>
                </div>
                <div className="buttons">
                    <button className='editButton'>Clear</button>
                    <button className='saveButton'>Add</button>
                </div>

                mandatory field vellom set cheyanamenkil cheythollu.........as you wish.....vere pinne onnum vendallo ivede
        </div>
    );
}
 
export default Addvehicle;