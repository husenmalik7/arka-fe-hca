// import "../styles/login.css";

import LeftSide from "../components/LeftSide";
import Button from "../components/Button";

import { Form } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("company");

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
                onClick={() => setRole("company")}
                defaultChecked
              />
              <Form.Check
                name="group1"
                type="radio"
                id={`inline-radio-2`}
                label="Engineer"
                onClick={() => setRole("engineer")}
              />
            </Form.Group>

            {role === "company" ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Company Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Short description" />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Date of birth" />
                </Form.Group>
              </>
            )}
          </Form>
        </div>

        <div className="button-container mt-5">
          <Button buttonName="Submit" buttonType="1" />
        </div>
      </div>
    </div>
  );
};

export default Register;
