import "./vcard.css";

const Vcard = ({ ...vehicle }) => {
  console.log(vehicle);
  // console.log(vehicle.data.vid)

  return (
    <div className="vcard">
      <p>Vehicle id: {vehicle.data.id}</p>
      <p>Registration no:{vehicle.data.regNo}</p>
      <p>Vehicle type:{vehicle.data.vType}</p>
      <p>Brand{vehicle.data.brand}</p>
    </div>
  );
};

export default Vcard;
