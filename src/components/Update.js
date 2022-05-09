import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(!!localStorage.getItem("Checkbox Value"));
  }, []);
  const updateAPIData = () => {
    axios
      .put(`https://62789e06d00bded55adb6201.mockapi.io/crudapi/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        history.push("/read");
      });
  };

  return (
    <div>
      <form className="create-form">
        <div>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
          <span style={{ color: "white" }}>
            I agree to the Terms and Conditions
          </span>
        </div>

        <button type="submit" onClick={updateAPIData}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
