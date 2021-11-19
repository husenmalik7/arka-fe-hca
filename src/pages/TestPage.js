import React from "react";

import "../styles/main.css";
import { Spinner } from "react-bootstrap";

const TestPage = () => {
  return (
    <div className="main">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default TestPage;
