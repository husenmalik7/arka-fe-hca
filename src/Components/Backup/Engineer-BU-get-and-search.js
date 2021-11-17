import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import logo from "../Asset/logo-arkademy.svg";

import {
  InputGroup,
  FormControl,
  Button,
  Navbar,
  Nav,
  Form,
  Table,
  Card,
  CardColumns,
} from "react-bootstrap";

import Posts from "./Posts";
import Pagination from "./Pagination";

const url = "http://localhost:9000/engineer/";

let sig = Math.floor(Math.random() * 100 + 1);

class Engineer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input_name: "",
      input_skill: "",
      engineerses: [],
      f_url: "http://localhost:9000/engineer/",
      image_random: [
        "https://source.unsplash.com/random?sig=",
        "https://source.unsplash.com/random?sig=",
      ],
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  submit() {
    this.searchEngineer(this.state.input_name, this.state.input_skill);
  }

  searchEngineer(input_name, input_skill) {
    let querySearch = "";

    if (input_name !== "" && input_skill !== "") {
      querySearch = "?name=" + input_name + "&skill=" + input_skill;
    } else {
      if (input_name !== "") {
        querySearch = "?name=" + input_name;
      }

      if (input_skill !== "") {
        querySearch = "?skill=" + input_skill;
      }
    }

    axios
      .get(url + querySearch)
      .then((item) => {
        this.setState({ engineerses: item.data.response });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    axios
      .get(url)
      // .then(item => console.log(item.data.response))
      .then((item) => {
        this.setState({ engineerses: item.data.response });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              // src="/logo.svg"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button>  */}{" "}
            {/*optional */}
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Ngaran maneh</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-5">
          <InputGroup size="sm" className="mb-3">
            <FormControl
              id="input_name"
              aria-describedby="basic-addon3"
              placeholder="Name"
              value={this.state.input_name}
              onChange={this.handleChange}
            />
            <FormControl
              id="input_skill"
              aria-describedby="basic-addon3"
              placeholder="Skill"
              value={this.state.input_skill}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.submit}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <h1 className="text-primary mb-3">xzc</h1>

          <CardColumns>
            {this.state.engineerses.map((item) => (
              <Card key={this.state.engineerses.id}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.image_random +
                    Math.floor(Math.random() * 100 + 1)
                  }
                />
                <Card.Body>
                  <Card.Title> {item.name} </Card.Title>
                  <Card.Text>{item.skill}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>12</th>
                <th>13</th>
              </tr>
            </thead>
            <tbody>
              {this.state.engineerses.map((name) => (
                <tr key={this.state.engineerses.id}>
                  <td>{name.skill}</td>
                  <td>{name.name}</td> {/* post.title */}
                </tr>
              ))}
            </tbody>
          </Table>

          {/* <Posts posts={currentPosts} loading={loading} />   */}
        </div>
      </div>
    );
  }
}
export default Engineer;
