import React, { Component } from "react";

import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/login.css";

import Button from "../components/Button";
import LeftSide from "../components/LeftSide";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    role: "company",
  };

  handleLogin() {
    console.log("login");

    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //https://www.w3resource.com/javascript/form/email-validation.php

    if (!emailPattern.test(this.state.email))
      return alert("please enter valid email");

    let passwordPattern = /^[A-Za-z0-9]\w{7,14}$/; // https://www.w3resource.com/javascript/form/password-validation.php

    if (!passwordPattern.test(this.state.password))
      return alert(
        "password must be between 8-15 characters, any word characters"
      );

    console.log({
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    });
  }

  handleRegister() {
    console.log("register");
  }

  render() {
    return (
      <div className="login-container">
        <LeftSide />
        <div className="right-side">
          <div className="title height-30">
            <h1>Login</h1>
          </div>

          <div className="input height-45">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Check
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  label="Company"
                  onClick={() => {
                    this.setState({ role: "company" });
                  }}
                  defaultChecked
                />
                <Form.Check
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  label="Engineer"
                  onClick={() => {
                    this.setState({ role: "engineer" });
                  }}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="button-container height-25">
            <Button
              action={() => this.handleLogin()}
              buttonName="Login"
              buttonType="1"
            />

            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                action={() => this.handleRegister()}
                buttonName="Register"
                buttonType="2"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
