import { useRef } from "react";
import { options } from "../../util";
import "./addvehicle.css";

const vehicle = {
  regNo: "",
  year: "",
  vType: "",
};

const Addvehicle = () => {
  const regnoRef = useRef(null);
  const yearRef = useRef(null);
  const typeRef = useRef(null);
  // const wdriveRef = useRef(null);
  // const tranRef = useRef(null);
  // const fueltypeRef = useRef(null);
  // const hpRef = useRef(null);

  async function submit() {
    console.log(typeRef.current.value);
    vehicle.regNo = regnoRef.current.value;
    vehicle.vType = typeRef.current.value;
    vehicle.year = yearRef.current.value;
    // vehicle.wdrive = wdriveRef.current.value;
    // vehicle.tran = tranRef.current.value;
    // vehicle.fueltype = fueltypeRef.current.value;
    // vehicle.hp = hpRef.current.value;

    let body = JSON.stringify(vehicle);
    let resp = await fetch(
      "http://localhost:8000/api/v1/user/add-vehicle",
      options("POST", body)
    );
    let respJson = await resp.json();
    console.log("vehicle added");

  }

  function clear() {
    regnoRef.current.value = "";
    typeRef.current.value = "";
    yearRef.current.value = "";
    // wdriveRef.current.value = "";
    // tranRef.current.value = "";
    // fueltypeRef.current.value = "";
    // hpRef.current.value = "";
  }

  return (
    <div className="avcontainer">
      <div className="pSegment">
        <h4>Enter vehicle details</h4>
        <div className="gridcontainer">
          <div className="name">
            <span>Reg.no: </span>
            <span>
              <input type="text" placeholder="Reg no:" ref={regnoRef} />
            </span>
          </div>
          <div className="dob">
            <span>Year: </span>
            <span>
              <input type="text" placeholder="Year" ref={yearRef} />
            </span>
          </div>
          <div className="email">
            {/* <span>Type: </span>
            <span>
              <input type="" placeholder="-select-" ref={typeRef} />
            </span> */}
            <span>Select Type: </span>
            <select name="cars" id="cars" ref={typeRef}>
              <option value="">Type</option>
              <option value="SUV">SUV</option>
              <option value="sedan">Sedan</option>
            </select>
          </div>
          {/* <div className="phonenum">
            <span>Fuel Type: </span>
            <span>
              <input type="text" ref={fueltypeRef} placeholder="-select-" />
            </span>
          </div>
          <div className="HP">
            <span>Hp: </span>
            <span>
              <input type="text" ref={hpRef} placeholder="Horsepower" />
            </span>
          </div>
          <div className="wdrive">
            <span>Wheel drive:</span>
            <span>
              <input type="text" placeholder="-select-" ref={wdriveRef} />
            </span>
          </div>
          <div className="transmission">
            <span>Transmission: </span>
            <span>
              <input type="text" ref={tranRef} placeholder="Transmision" />
            </span>
          </div> */}
        </div>
        <div className="buttons">
          <button className="editButton" onClick={clear}>
            Clear
          </button>
          <button className="saveButton" onClick={submit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addvehicle;
