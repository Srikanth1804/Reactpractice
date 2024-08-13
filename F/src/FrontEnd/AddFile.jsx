import React, { useState } from "react";
import axios from "axios";
const AddFile = () => {
  let [name, setname] = useState("");
  let [age, setage] = useState("");

  let handlesubmit = (e) => {
    e.preventDefault();

    let userdata = {
      name,
      age,
    };
    console.log(userdata);

    axios
      .post("http://localhost:7000/search", userdata)
      .then((res) => {
        console.log("Data posted!");
      })
      .catch((e) => {
        console.log("Data Failed To Post!", e);
      });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddFile;
