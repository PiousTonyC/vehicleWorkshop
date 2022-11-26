import './bookservice.css'

const Bookservice = () => {

    const current = new Date();
    const currDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    const minDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    const maxDate = `${current.getFullYear()+2}-${current.getMonth()+1}-${current.getDate()}`;
    
    return (
        <div className="bscontainer">
            <div className="serviceContainer">
                <div className="innerContainer">
                    <div className="serviceHeading">
                        <h2>Book Serivce</h2>
                    </div>
                    <hr/>
                    <div className="serviceBody">
                        <div className="dateField">
                            <label htmlFor="sdate">Select Date</label>
                            <input type="date" id='sdate' defaultValue={currDate} min={minDate} max={maxDate} />
                        </div>
                        <div className="vehid">
                            <label htmlFor="vid">Enter Vehicle id</label>
                            <input type="text" id="vid" placeholder='Enter vehicle id...' />
                        </div>
                        <div className="buttons">
                            <button className='bookButton'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Bookservice;