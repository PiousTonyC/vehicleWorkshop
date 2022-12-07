import "./bookservice.css";
import { useState } from "react";
import { options } from "../../util";

const Bookservice = () => {
  const current = new Date();
  const currDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const minDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const maxDate = `${current.getFullYear() + 2}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  // const service = {
  //   id: "1234",
  //   vid: "A0017",
  // };
  const [isActive, setIsActive] = useState(true);
  const [date, setDate] = useState("");
  const [vid, setvid] = useState();

  return (
    <div className="bscontainer">
      <div className="serviceContainer">
        <div className="innerContainer">
          <div className="serviceHeading">
            <h2>Book Serivce</h2>
          </div>
          <hr />
          <div className="serviceBody">
            <div className="dateField">
              <label htmlFor="sdate">Select Date</label>
              <input
                type="date"
                id="sdate"
                defaultValue={currDate}
                min={minDate}
                max={maxDate}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="vehid">
              <label htmlFor="vid">Enter Vehicle id</label>
              <input
                type="text"
                id="vid"
                placeholder="Enter vehicle id..."
                onChange={(e) => {
                  setvid(e.target.value);
                }}
              />
            </div>
            <div className="buttons">
              <button
                className="bookButton"
                onClick={async () => {
                  setIsActive(false);
                  let body = JSON.stringify({
                    vid,
                    date,
                  });
                  let resp = await fetch(
                    "http://localhost:8000/api/v1/user/book-service",
                    options("POST", body)
                  );
                  let respJson = await resp.json();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sreport" id={isActive ? "on_of" : ""}>
        <p style={{fontSize:"20px"}}>Service Booked</p>
      </div>
    </div>
  );
};

export default Bookservice;
