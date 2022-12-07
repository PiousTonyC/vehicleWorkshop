import "./scard.css";

const Scard = ({ ...service }) => {
  return (
    <div className="scard">
      <p>Service id: {service.data.id}</p>
      <p>Date :{service.data.date}</p>
      <p>Vehicle id: {service.data.vid}</p>
      <p>Status: {service.data.status}</p>
    </div>
  );
};

export default Scard;
