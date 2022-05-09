import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  let navigate = useNavigate();
  const postData = () => {
    axios
      .post(`https://62789e06d00bded55adb6201.mockapi.io/crudapi`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div className="create-form">
      <div>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input type="checkbox" onChange={(e) => setCheckbox(!checkbox)} />
        <span style={{ color: "white" }}>
          I agree to the Terms and Conditions
        </span>
      </div>
      <button type="submit" onClick={postData}>
        Submit
      </button>
    </div>
  );
};

export default Create;
