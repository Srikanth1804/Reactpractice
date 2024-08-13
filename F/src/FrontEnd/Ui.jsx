import React, { useState } from 'react';
import axios from 'axios';

const Ui = () => {
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(type);

    axios.get("http://localhost:7000/search", {
      params: {type}
    })
    .then((res) => {
      console.log("Search Data Posted!", res.data);

    })
    .catch((e) => {
      console.log("Error To Fetch Data!");
    });
  };

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Foodtype'
          onChange={(e) => setType(e.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Ui;
