import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/profile.css";
import backLogo from "../assets/left-arrow.png";
import Button from "../components/Button";
import baseUrl from "../helper/baseUrl";

const Profile = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let localStorageData = {
      email: localStorage.getItem("email"),
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
    };

    if (localStorageData.token === null) {
      alert("you must login to continue");
      return props.history.push("/login");
    }

    let config = {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    };

    let id = props.match.params.id;
    let url = `${baseUrl}/engineer/${id}`;
    axios
      .get(url, config)
      .then((response) => {
        let resData = response.data.data;
        let resMessage = response.data.msg;
        if (resMessage.includes("expired")) {
          alert("you must login to continue");
          return props.history.push("/login");
        }

        setData({
          name: resData.name,
          position: resData.position,
          description: resData.description,
          email: resData.email,
          location: resData.location,
          skills: resData.skills,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function handleBack() {
    props.history.push("/home");
  }

  function handleHire() {
    let id_engineer = props.match.params.id;
    let id_company = localStorage.getItem("id");

    let url = baseUrl + "/engineer/hire";
    let data = {
      id_company,
      id_engineer,
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.msg);

        if (response.data.msg.includes("success")) {
          alert(response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="profile">
      <div className="upper-background"></div>
      <div className="back-button">
        <img
          onClick={() => handleBack()}
          src={backLogo}
          alt="back-button"
          width={"22px"}
        />
      </div>
      <div className="left-box-container">
        <div className="left-box-upperside">
          <img
            className="profile-image"
            src="https://dummyimage.com/150x200/d1d1d1/616161"
            alt="profile-pic"
          />
          <p className="bold-text">{data.name}</p>
          <p>{data.email}</p>
          <p>{data.location}</p>
        </div>

        <div className="left-box-downside">
          <Button
            action={() => handleHire()}
            buttonName="Hire Me"
            buttonType="1"
          />
        </div>
      </div>
      <div className="right-box">
        <div className="name-section">
          <p className="bold-text larger">{data.name}</p>
          <p className="bold-text">{data.position}</p>
        </div>

        <div className="description-section">
          <p>{data.description}</p>
        </div>

        <div className="skills-section">
          <p className="bold-text">Skills :</p>
          {data.skills !== undefined
            ? data.skills.map((item, index) => (
                <p className="pl" key={index}>
                  {item.name}
                </p>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
