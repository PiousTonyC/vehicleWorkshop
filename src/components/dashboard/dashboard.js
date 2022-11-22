import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboardContainer">
            <div className="segment">
                <h2 id='hmain'>Hello "Name" !</h2>
                <hr />
                <div className="sub">
                    <div className="left">
                        <p>Full name</p>
                        <p>Address</p>
                    </div>
                    <div className='right'>
                        <p>email</p>
                        <p>phone num</p>
                    </div>
                </div>
            </div>

            <div className="segment" id='myvehicles'>
                <h3 className='subHeading'>My Vehicles</h3>
                <p>my dynamic list is going to be here</p>
            </div>

            <div className="segment" id='service'>
                <h3 className='subHeading'>Service History</h3>
                <p>my dymanic list of service is going to be here</p>
            </div>
        </div>
    );
}
 
export default Dashboard;