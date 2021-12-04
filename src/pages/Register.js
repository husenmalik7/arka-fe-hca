// import "../styles/login.css";

import LeftSide from "../components/LeftSide";
import Button from "../components/Button";
import baseUrl from "../helper/baseUrl";

import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import {
  lengthRegex,
  emailRegex,
  alertEmail,
  passwordRegex,
  alertPassword,
} from "../helper/regex";

const Register = () => {
  const [role, setRole] = useState("company");

  const [company, setCompany] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    description: "",
  });
  const [engineer, setEngineer] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  function handleRole(role) {
    if (role === "company") {
      setRole("company");

      setEngineer({
        name: "",
        email: "",
        password: "",
        location: "",
      });
    } else {
      setRole("engineer");

      setCompany({
        name: "",
        email: "",
        password: "",
        location: "",
        description: "",
      });
    }
  }

  function handleSubmit() {
    if (role === "company") {
      let isCompanyNameValid = lengthRegex(company.name);
      if (!isCompanyNameValid)
        return alert("company name must be 3 to 100 characters length");

      let isCompanyEmailValid = emailRegex(company.email);
      if (!isCompanyEmailValid) return alert(alertEmail);

      let isCompanyPasswordValid = passwordRegex(company.password);
      if (!isCompanyPasswordValid) return alert(alertPassword);

      let isCompanyLocationValid = lengthRegex(company.location);
      if (!isCompanyLocationValid)
        return alert("company location must be 3 to 100 characters length");

      let isCompanyDescriptionValid = lengthRegex(company.description);
      if (!isCompanyDescriptionValid)
        return alert("company description must be 3 to 100 characters length");

      console.log({ company });

      let url = baseUrl + "/company/register";

      axios
        .post(url, {
          name: company.name,
          description: company.description,
          email: company.email,
          password: company.password,
          location: company.location,
        })
        .then((response) => {
          console.log(response.data);
          let message = response.data.msg;

          if (message.includes("already used")) {
            alert(message);
          } else {
            alert(message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let isEngineerNameValid = lengthRegex(engineer.name);
      if (!isEngineerNameValid)
        return alert("engineer name must be 3 to 100 characters length");

      let isEngineerEmailValid = emailRegex(engineer.email);
      if (!isEngineerEmailValid) return alert(alertEmail);

      let isEngineerPasswordValid = passwordRegex(engineer.password);
      if (!isEngineerPasswordValid) return alert(alertPassword);

      let isEngineerLocationValid = lengthRegex(engineer.location);
      if (!isEngineerLocationValid)
        return alert("engineer location must be 3 to 100 characters length");

      console.log({ engineer });

      let url = baseUrl + "/engineer/register";

      axios
        .post(url, {
          name: engineer.name,
          email: engineer.email,
          password: engineer.password,
          location: engineer.location,
        })
        .then((response) => {
          console.log(response.data);
          let message = response.data.msg;

          if (message.includes("already used")) {
            alert(message);
          } else {
            alert(message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="login-container">
      <LeftSide />
      <div className="right-side">
        <div className="title height-20">
          <h1>Register</h1>
        </div>

        <div className="input">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "bold" }}>
                Register as
              </Form.Label>
              <Form.Check
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                label="Company"
                onClick={() => handleRole("company")}
                defaultChecked
              />
              <Form.Check
                name="group1"
                type="radio"
                id={`inline-radio-2`}
                label="Engineer"
                onClick={() => handleRole("engineer")}
              />
            </Form.Group>

            {role === "company" ? (
              <>
                <Form.Group className="mb-3" controlId="formCompanyName">
                  <Form.Control
                    type="name"
                    placeholder="Company Name"
                    value={company.name}
                    onChange={(e) =>
                      setCompany({
                        ...company,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCompanyEmail">
                  <Form.Control
                    type="email"
                    placeholder="Company Email"
                    value={company.email}
                    onChange={(e) =>
                      setCompany({
                        ...company,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCompanyPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={company.password}
                    onChange={(e) =>
                      setCompany({
                        ...company,
                        password: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCompanyLocation">
                  <Form.Control
                    type="name"
                    placeholder="Location"
                    value={company.location}
                    onChange={(e) =>
                      setCompany({
                        ...company,
                        location: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCompanyDescription">
                  <Form.Control
                    type="email"
                    placeholder="Short description"
                    value={company.description}
                    onChange={(e) =>
                      setCompany({
                        ...company,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formEngineerName">
                  <Form.Control
                    type="email"
                    placeholder="Name"
                    value={engineer.name}
                    onChange={(e) =>
                      setEngineer({
                        ...engineer,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEngineerEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={engineer.email}
                    onChange={(e) =>
                      setEngineer({
                        ...engineer,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEngineerPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={engineer.password}
                    onChange={(e) =>
                      setEngineer({
                        ...engineer,
                        password: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEngineerLocation">
                  <Form.Control
                    type="email"
                    placeholder="Location"
                    value={engineer.location}
                    onChange={(e) =>
                      setEngineer({
                        ...engineer,
                        location: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </div>

        <div className="button-container mt-5">
          <Button
            action={() => handleSubmit()}
            buttonName="Submit"
            buttonType="1"
          />
        </div>

        <div className="already-have-account" style={alreadyHaveAccountStyle}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p>already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

let alreadyHaveAccountStyle = {
  fontWeight: "bold",
  justifyContent: "center",
  display: "flex",
};

export default Register;
