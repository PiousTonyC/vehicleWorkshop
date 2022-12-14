import "./dashboard.css";
import Vcard from "../vcard/vcard";
import Scard from "../scard/scard";
import { useState, useEffect } from "react";
import { options } from "../../util";

const Dashboard = () => {
  // details from the "Customer table"
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fd = async () => {
      let resp = await fetch(
        "http://localhost:8000/api/v1/user/view-service-req",
        options("GET")
      );

      let data = await resp.json();
      console.log(data.data);
      setServices(data.data);

      resp = await fetch(
        "http://localhost:8000/api/v1/user/view-vehicles",
        options("GET")
      );

      data = await resp.json();
      console.log(data.data);
      setVehicles(data.data);

      resp = await fetch(
        "http://localhost:8000/api/v1/user/view-user-details",
        options("GET")
      );

      data = await resp.json();
      setCustomer(data.data);
    };

    fd();
  }, []);
  //   useEffect(() => {
  //     setVehicles(vehiclesData);
  //     // setServices(serviceData);
  //   }, []);

  return (
    <div className="dashboardContainer">
      <div className="segment">
        <h2 id="hmain">Hello {customer.name}</h2>
        <hr />
        <div className="sub">
          <div className="left">
            <p>{customer.name}</p>
            <p>{customer.address}</p>
          </div>
          <div className="right">
            <p>{customer.email}</p>
            <p>{customer.phno}</p>
          </div>
        </div>
      </div>

      <div className="segment" id="myvehicles">
        <h2 className="subHeading">My Vehicles</h2>
        <div className="vcards">
          {vehicles &&
            vehicles.map((vehicle) => (
              <Vcard data={vehicle} key={vehicle.id} />
            ))}
        </div>
      </div>

      <div className="segment" id="service">
        <h2 className="subHeading">Service History</h2>
        <div className="scards">
          {services &&
            services.map((service) => (
              <Scard data={service} key={service.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
