import './vcard.css'

const Vcard = ({ ...vehicle }) => {

    // console.log(vehicle)
    // console.log(vehicle.data.vid)

    return (
        <div className="vcard">
            <p>Vehicle id: {vehicle.data.vid}</p>
            <p>Registration no:{vehicle.data.regno}</p>
            <p>Vehicle type{vehicle.data.vtype}</p>
            <p>Brand{vehicle.data.brand}</p>
        </div>
    );
}
 
export default Vcard;