/* eslint-disable */
import React, { useEffect, useState } from "react";

import "../styles/main.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const TestPage = (props) => {
  const [testState, setTestState] = useState("udin");
  const [data, setData] = useState([]);

  useEffect(() => {
    let localStorageData = {
      email: localStorage.getItem("email"),
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
    };

    console.log(localStorageData);

    // let url = `http://localhost:3001/company/${localStorageData.id}`;
    let url = `http://localhost:3001/company/9`;

    let config = {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleRemove() {
    console.log("remove");
    localStorage.removeItem("token");

    props.history.push("/login");
  }

  return (
    <div className="main">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <p>{testState}</p>

      <button onClick={() => handleRemove()}>asdasd</button>
    </div>
  );
};

export default TestPage;
