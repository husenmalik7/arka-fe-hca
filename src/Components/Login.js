import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../CSS/split.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: null,
      role: null,
      id_company: null,
      id_engineer: null,
    };
  }

  handleLogin(event) {
    event.preventDefault();
    const url = "http://localhost:9000/user/login";
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id_user", res.data.data.id_user);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("role", res.data.data.role);

        if (res.data.data.id_engineer == null) {
          console.log("you are login as a company");
          localStorage.setItem("id_company", res.data.data.id_company);
          this.props.history.push("/engineer");
        } else {
          localStorage.setItem("id_engineer", res.data.data.id_engineer);
          console.log("you are login as an engineer");
          this.props.history.push("/engineer/" + res.data.data.id_engineer);
        }
        //sekarang ke page engineer dia bisa terima hiring atau tidak
      })
      .catch((err) => {
        console.log(err);
        alert("email or password not found");
      });
  }

  register = () => {
    //prop history push must use arrow function
    this.props.history.push("/user/register");
    console.log("register");
  };

  render() {
    return (
      <div>
        <p>===================================</p>

        <div className="split left">
          <div className="centered">
            <h2>Hire expert freelancer for any job, online</h2>
            <p>
              Millions of small businesses use Freelancer to turn their ideas
              into reality
            </p>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <h2 align="top">Login</h2>

            <Form method="POST" onSubmit={(event) => this.handleLogin(event)}>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="buttonlogin">
                Login
              </Button>
            </Form>

            <Button
              variant="primary"
              type="register"
              className="buttonlogin"
              onClick={this.register}
            >
              Register
            </Button>
          </div>
        </div>

        <p>===================================</p>
      </div>
    );
  }
}

export default Login;
