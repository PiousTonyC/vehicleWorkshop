import "./vcard.css";

const Vcard = ({ ...vehicle }) => {
  console.log(vehicle);
  // console.log(vehicle.data.vid)

  return (
    <div className="vcard">
      <p>Vehicle id: {vehicle.data.id}</p>
      <p>Registration no: {vehicle.data.regNo}</p>
      <p>Vehicle type: {vehicle.data.vType}</p>
      <p>Type: {vehicle.data.vType}</p>
      <p>Fuel type: {vehicle.data.FuelType}</p>
      <p>Transmission{vehicle.data.Transmission}</p>
    </div>
  );
};

export default Vcard;
