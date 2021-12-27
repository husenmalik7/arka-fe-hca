import React, { useEffect, useState } from "react";

import axios from "axios";
import baseUrl from "../helper/baseUrl";

import "../styles/main.css";
import "../styles/engineer-list.css";

const EngineerList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    console.log("get data");

    let url = baseUrl + "/company/engineerList";

    let company_id = localStorage.getItem("id");
    let data = {
      company_id,
    };

    /**
     * this must be get, but we send data to it and error happened
     * so we change this to post and no error happen
     */
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="main-full">
      <div className="side"></div>
      <div className="middle engineer-list">
        {data.map((item, index) => (
          <div className="engineer-card">
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
      <div className="side"></div>
    </div>
  );
};

export default EngineerList;
