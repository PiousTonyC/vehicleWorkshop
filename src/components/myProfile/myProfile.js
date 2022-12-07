import { useEffect, useState, useRef } from "react";
import "./myProfle.css";
import Vcard from "../vcard/vcard";
import { options } from "../../util";

const Myprofile = () => {
  const [edit, setEdit] = useState("false");
  const nameRef = useRef(null);
  const addRef = useRef(null);
  const dobRef = useRef(null);
  const emailRef = useRef(null);
  const phnoRef = useRef(null);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fun = async () => {
      let resp = await fetch(
        "http://localhost:8000/api/v1/user/view-vehicles",
        options("GET")
      );

      let data = await resp.json();
      console.log(data.data);
      setVehicles(data.data);

      resp = await fetch(
        "http://localhost:8000/api/v1/user/view-user-details",
        options("GET")
      );

      data = await resp.json();
      setCustomer(data.data);
    };
    fun();
  }, []);

  const [customer, setCustomer] = useState({});

  async function submit() {
    setEdit("false");
    console.log(nameRef.current.value);
    customer.name = nameRef.current.value;
    // customer.dob = dobRef.current.value;
    customer.email = emailRef.current.value;
    // customer.ph = phnoRef.current.value;
    // customer.add = addRef.current.value;
    console.log(customer);
    let body = JSON.stringify({
      name: customer.name,
    });
    let resp = await fetch(
      "http://localhost:8000/api/v1/user/modify-name",
      options("POST", body)
    );
    let respJson = await resp.json();
    console.log("name changed");
  }

  return (
    <div className="profileContainer">
      <div className="pSegment">
        <h3 className="subHeading">Personal Details</h3>
        <div className="gridcontainer">
          {edit === "true" ? (
            <>
              {" "}
              <div className="name">
                <span>Name: </span>
                <span>
                  <input type="text" ref={nameRef} placeholder="Enter Name" />
                </span>
              </div>
              {/* <div className="dob">
                <span>DOB: </span>
                <span>
                  <input type="text" ref={dobRef} placeholder="Date-of-Birth" />
                </span>
              </div> */}
              <div className="email">
                <span>Email: </span>
                <span>
                  <input type="text" ref={emailRef} placeholder="Enter Email" />
                </span>
              </div>
              {/* <div className="phonenum">
                <span>Ph Num: </span>
                <span>
                  <input
                    type="text"
                    ref={phnoRef}
                    placeholder="Enter Phone num"
                  />
                </span>
              </div> */}
              {/* <div className="address">
                <span>City: </span>
                <span>
                  <input type="text" ref={addRef} placeholder="Enter Address" />
                </span>
              </div> */}
            </>
          ) : (
            <>
              {" "}
              <div className="name">
                <span>Name: </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={customer.name} readOnly
                  />
                </span>
              </div>
              {/* <div className="dob">
                <span>DOB: </span>
                <span>
                  <input
                    type="text"
                    placeholder="Date-of-Birth"
                    value={customer.dob} readOnly
                  />
                </span>
              </div> */}
              <div className="email">
                <span>Email: </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={customer.email} readOnly
                  />
                </span>
              </div>
              {/* <div className="phonenum">
                <span>Ph Num: </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Phone num"
                    value={customer.phno} readOnly
                  />
                </span>
              </div>
              <div className="address">
                <span>City: </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={customer.address} readOnly
                  />
                </span>
              </div> */}
            </>
          )}
        </div>
        <div className="buttons">
          {edit === "false" ? (
            <button className="editButton" onClick={() => setEdit("true")}>
              Edit
            </button>
          ) : (
            <>
              {" "}
              <button className="cancelButton" onClick={() => setEdit("false")}>
                Cancel
              </button>
              <button className="saveButton" onClick={submit}>
                Save
              </button>
            </>
          )}
        </div>
      </div>

      <div className="pSegment">
        <h3 className="subHeading">Vehicle Details</h3>
        <div className="vcards">
          {vehicles &&
            vehicles.map((vehicle, index) => (
              <>
                <Vcard data={vehicle} key={vehicle.id} />
                <div className="deletediv">
                  <button
                    className="deleteButton"
                    onClick={async (e) => {
                      let body = JSON.stringify({
                        vid: vehicle.id,
                      });
                      let resp = await fetch(
                        "http://localhost:8000/api/v1/user/remove-vehicle",
                        options("POST", body)
                      );

                      let data = await resp.json();
                      vehicles.splice(index, 1);
                      let na = [...vehicles];
                      setVehicles(na);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
