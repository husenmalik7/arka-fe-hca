import React, { useEffect, useState } from "react";

import axios from "axios";
import { Table } from "react-bootstrap";

import baseUrl from "../helper/baseUrl";

import checkLogo from "../assets/check.png";

import "../styles/main.css";
import "../styles/project.css";

const Project = (props) => {
  const [dataEngineer, setDataEngineer] = useState({});
  const [dataProject, setDataProject] = useState([]);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let url = baseUrl + "/company/engineerList/project";
    let engineer_id = props.history.location.state.engineer_id;

    console.log(url);

    console.log(engineer_id);

    axios
      .post(url, { engineer_id })
      .then((response) => {
        console.log(response.data);

        setDataEngineer(response.data.data);
        setDataProject(response.data.dataProject);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDone(id) {
    console.log("done", id);
    let url = baseUrl + "/project/done";

    axios
      .put(url, { id })
      .then((response) => {
        console.log(response);
        alert("success finish the project");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddProject() {
    let engineer_id = props.history.location.state.engineer_id;
    console.log(engineer_id);
    console.log(projectName);

    let url = baseUrl + "/project/add";
    let data = {
      engineer_id,
      project_name: projectName,
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="main-full">
      <div className="side"></div>
      <div className="middle project">
        <p>Create Project</p>

        <div>
          Project name{" "}
          <input onChange={(e) => setProjectName(e.target.value)}></input>
        </div>
        <br />
        <button onClick={() => handleAddProject()}>submit</button>

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
                    onClick={() => handleDone(item.id)}
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

export default Project;
