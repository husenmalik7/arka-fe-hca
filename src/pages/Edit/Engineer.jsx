import React, { useEffect, useState } from "react";

import { Form } from "react-bootstrap";
import axios from "axios";

import Button from "../../components/Button";
import baseUrl from "../../helper/baseUrl";
import backLogo from "../../assets/left-arrow.png";

import "../../styles/main.css";
import "../../styles/edit.css";

const EditProfileEngineer = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let localStorageData = handleToken();
    getProfileById(localStorageData);
    // eslint-disable-next-line
  }, []);

  function getProfileById(localStorageData) {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    };
    let id = localStorageData.id;

    console.log(id);

    let url = `${baseUrl}/engineer/${id}`;

    axios
      .get(url, config)
      .then((response) => {
        let resData = response.data.data;

        console.log(resData);

        let resMessage = response.data.msg;
        if (resMessage.includes("expired")) {
          alert("you must login to continue");
          return props.history.push("/login");
        }

        setData({
          name: resData.name,
          description: resData.description,
          location: resData.location,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleToken() {
    let localStorageData = {
      email: localStorage.getItem("email"),
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
    };

    console.log(localStorageData);

    if (localStorageData.token === null) {
      alert("you must login to continue");
      return props.history.push("/login");
    } else {
      return localStorageData;
    }
  }

  function handleSubmit() {
    console.log(data);

    let id = localStorage.getItem("id");

    console.log(id);

    let url = `${baseUrl}/engineer/${id}`;
    axios
      .put(url, data)
      .then((response) => {
        console.log(response);

        // if success
        localStorage.setItem("name", data.name);

        alert("success edit data");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="main">
      <div className="side">
        <img
          onClick={() => props.history.push("/profile/engineer")}
          src={backLogo}
          alt="back-button"
          width={"22px"}
        />
      </div>
      <div className="middle">
        <div className="photo-form">
          <img
            className="profile-image"
            src="https://dummyimage.com/150x200/d1d1d1/616161"
            alt="profile-pic"
          />
        </div>
        <div className="basic-form">
          <div className="input-group">
            <Form>
              <Form.Group controlId="formCompanyName">
                <Form.Control
                  type="name"
                  className="mb-3"
                  placeholder="Engineer Name"
                  value={data.name}
                  onChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value,
                    })
                  }
                />

                <Form.Control
                  type="name"
                  as="textarea"
                  rows={3}
                  className="mb-3"
                  placeholder="Description"
                  value={data.description === null ? "" : data.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      description: e.target.value,
                    })
                  }
                />

                <Form.Control
                  type="name"
                  className="mb-3"
                  placeholder="Location"
                  value={data.location}
                  onChange={(e) =>
                    setData({
                      ...data,
                      location: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </div>

          <div className="button-section">
            <Button
              action={() => handleSubmit()}
              buttonName="Save"
              buttonType="1"
            />
          </div>
        </div>
      </div>
      <div className="side"></div>
    </div>
  );
};

export default EditProfileEngineer;
