import './Services.css';

const Services = () => {
    return (
    <div className="services">
        <h2>Services Offered</h2>
        <div className="gridContainer">
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Free Inspection</h4>
                    </div>
                    <div className="outer">
                        <p>Bring your car today and let us do a free inspection</p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Car Maintenance</h4>
                    </div>
                    <div className="outer">
                        <p>Proper maintenance helps extend the life of your vehicle</p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Car repair</h4>
                    </div>
                    <div className="outer">
                        <p>Engine repair,tire fixes,steering and suspension needs...</p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Wheel Adjustment</h4>
                    </div>
                    <div className="outer">
                        <p>Reduce tire wear and ensure that vehicle travel is straight and true</p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Air pressure</h4>
                    </div>
                    <div className="outer">
                        <p>Check the air pressure in your tires </p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Fluid</h4>
                    </div>
                    <div className="outer">
                        <p>check your car fluids</p>
                    </div>
                </div>
            </div>
            <div className="gridItem">
                <div className="flipCard">
                    <div className="inner">
                        <h4>Oil and Filter</h4>
                    </div>
                    <div className="outer">
                        <p>Check and Change oil and Filter for better efficiency</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Services;