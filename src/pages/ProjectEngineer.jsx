import React, { useEffect, useState } from "react";

import axios from "axios";
import { Table } from "react-bootstrap";

import baseUrl from "../helper/baseUrl";

import checkLogo from "../assets/check.png";
import backLogo from "../assets/left-arrow.png";

import "../styles/main.css";
import "../styles/project.css";

const ProjectEngineer = (props) => {
  const [dataProject, setDataProject] = useState([]);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let url = baseUrl + "/project";
    let engineer_id = localStorage.getItem("id");

    axios
      .post(url, { engineer_id })
      .then((response) => {
        console.log(response.data);

        setDataProject(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDo(id) {
    console.log("done", id);
    let url = baseUrl + "/project/do";

    axios
      .put(url, { id })
      .then((response) => {
        console.log(response);
        alert("success do the project");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="main-full">
      <div className="side">
        <img
          onClick={() => props.history.push("/profile/engineer")}
          src={backLogo}
          alt="back-button"
          width={"22px"}
        />
      </div>
      <div className="middle project">
        <br />
        <br />
        <p>Project List</p>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataProject.map((item, index) => (
              <tr key={index}>
                <td>{item.project_name}</td>
                <td>{item.status}</td>
                <td>
                  <img
                    className="img-done"
                    onClick={() => handleDo(item.id)}
                    src={checkLogo}
                    alt="check"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="side"></div>
    </div>
  );
};

export default ProjectEngineer;
