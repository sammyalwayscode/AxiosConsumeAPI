import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Consume = () => {
  const [fecthData, setFecthData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);

    if (res) {
      setFecthData(res.data);
      console.log("this is it: ", fecthData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>API</h1>
      {fecthData.map(({ name, id, username, email, address }) => (
        // <div key={id}> {name} </div>
        <div
          key={id}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "gold",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: "darkred",
              color: "#fff",
              margin: "20px",
            }}
          >
            <div> {name} </div>
            <div> {username} </div>
            <div> {email} </div>
            <div> {address.street} </div>
            <div> {name} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consume;

const Card = styled.div`
  width: "100px";
`;
