import './checkstatus.css'

const Checkstatus = () => {
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
                            <button className='checkButton'>Check</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Checkstatus;