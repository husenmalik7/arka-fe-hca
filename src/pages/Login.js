import React, { Component } from "react";

import { Form } from "react-bootstrap";

import "../styles/login.css";

import arkaLogo from "../assets/arka-logo.svg";
import paperPeople from "../assets/paper-people.svg";
import Button from "../components/Button";

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
        <div className="left-side">
          <div className="arka-logo">
            <img src={arkaLogo} alt="arka logo" />
          </div>

          <div className="paper-people">
            <img src={paperPeople} alt="paper people" />
          </div>

          <div className="hiring-text">
            <p>
              <b> Hire expert freelancers for any job, online</b> <br />
              Millions of small businesses use Freelancer to turn their ideas
              into reality.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="title">
            <h1>Login</h1>
          </div>
          <div className="input">
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
          <div className="button-container">
            <Button
              action={() => this.handleLogin()}
              buttonName="Login"
              buttonType="1"
            />

            <Button
              action={() => this.handleRegister()}
              buttonName="Register"
              buttonType="2"
            />
          </div>
        </div>
      </div>
    );
  }
}
