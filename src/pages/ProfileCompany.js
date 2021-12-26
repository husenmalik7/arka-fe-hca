import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/profile.css";
import backLogo from "../assets/left-arrow.png";
import Button from "../components/Button";
import baseUrl from "../helper/baseUrl";

const ProfileCompany = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let localStorageData = {
      email: localStorage.getItem("email"),
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
    };

    if (localStorageData.role !== "company") {
      alert("you must login as company to continue");
      return props.history.push("/login");
    }

    // console.log(localStorageData);

    if (localStorageData.token === null) {
      alert("you must login to continue");
      return props.history.push("/login");
    }

    let config = {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    };

    let id = localStorageData.id;
    let url = `${baseUrl}/company/${id}`;

    console.log(url);
    axios
      .get(url, config)
      .then((response) => {
        let resData = response.data.data[0];

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
    /* eslint-disable-next-line */
  }, []);

  function handleBack() {
    props.history.push("/home");
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
            action={() => props.history.push("/company/profile/edit")}
            buttonName="Edit"
            buttonType="1"
          />
          <Button
            action={() => props.history.push("/company/profile/engineer-list")}
            buttonName="Engineer List"
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
      </div>
    </div>
  );
};

export default ProfileCompany;
