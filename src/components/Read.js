import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62789e06d00bded55adb6201.mockapi.io/crudapi`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://62789e06d00bded55adb6201.mockapi.io/crudapi`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62789e06d00bded55adb6201.mockapi.io/crudapi/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checkbox ? 1 : 0}</td>
              <td>
                <Link to="/update">
                  <button onClick={() => setData(data)}>Update</button>
                </Link>
              </td>
              <td>
                <button onClick={() => onDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
