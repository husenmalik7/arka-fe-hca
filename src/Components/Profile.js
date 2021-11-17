import React, { Component } from "react";

import { Link } from "react-router-dom";

// import axios from 'axios';

import { connect } from "react-redux";
import { getAllEngineer, putEngineer } from "../Redux/Actions/actionEngineer";

import {
  CardColumns,
  Card,
  Row,
  Button,
  Nav,
  Table,
  Form,
  Col,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";

const url = "http://localhost:9000/engineer/";

class Profile extends Component {
  state = {
    id_engineer: "",
    profile: [],
    id_company: "kosong",
    company_name: "",
    hire_status: 0,
  };

  componentDidMount() {
    this.getDataById(this.props.match.params.id_engineer);

    this.getProjectById(this.props.match.params.id_engineer);
  }

  //------------------axios
  // getDataById(p_id_engineer){
  //     axios.get(url+p_id_engineer)
  //     .then(item => {
  //         // console.log(item.data.response[0],"data id");
  //         this.setState(  {profile: item.data.response[0]}  );
  //     })
  //     .catch(err => console.log(err));
  // }
  //------------------axios

  getProjectById(p_id_engineer) {
    const project = "/project";
    this.props
      .dispatch(getAllEngineer(url + p_id_engineer + project))
      .then((item) => {
        this.setState({
          company_name: item.value.data.response[0].name,
          hire_status: item.value.data.response[0].hire_status,
        });
      })
      .catch((err) => console.log(err));
  }

  //------------------redux
  getDataById(p_id_engineer) {
    this.props
      .dispatch(getAllEngineer(url + p_id_engineer))
      .then((item) => {
        this.setState({
          profile: item.value.data.response[0],
          id_engineer: item.value.data.response[0].id_engineer,
          hire_status: item.value.data.response[0].hire_status,
          // id_company: item.value.data.response[0].id_company
        });
      })
      .catch((err) => console.log(err));
  }
  //------------------redux

  handleClickHireMe() {
    const data = {
      id_company: localStorage.getItem("id_company"),
      id_user: this.state.profile.id_user,
      name: this.state.profile.name,
      description: this.state.profile.description,
      skill: this.state.profile.skill,
      location: this.state.profile.location,
      dateofbirth: this.state.profile.dateofbirth,
      showcase: this.state.profile.showcase,
      datecreated: this.state.profile.dateofbirth,
      dateupdated: this.state.profile.dateupdated,
      total_project: this.state.profile.total_project,
      total_project_done: this.state.profile.total_project_done,
      hire_status: 1, //0 for iddle, 1 for pending, 2 for hired
    };
    this.props.dispatch(putEngineer(url + this.state.id_engineer, data));
    alert("succes hire");
  }

  handleClickAccept() {
    const data = {
      id_company: this.state.profile.id_company,
      id_user: this.state.profile.id_user,
      name: this.state.profile.name,
      description: this.state.profile.description,
      skill: this.state.profile.skill,
      location: this.state.profile.location,
      dateofbirth: this.state.profile.dateofbirth,
      showcase: this.state.profile.showcase,
      datecreated: this.state.profile.dateofbirth,
      dateupdated: this.state.profile.dateupdated,
      total_project: this.state.profile.total_project,
      total_project_done: this.state.profile.total_project_done,
      hire_status: 2, //0 for iddle, 1 for pending, 2 for hired
    };
    this.props.dispatch(putEngineer(url + this.state.id_engineer, data));
    alert("succes accept");
  }

  logout = () => {
    //if u are not use arrow function it will error "props undefined"

    localStorage.clear();

    this.props.history.push("/user/login");
  };

  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png"
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Form inline>
            <InputGroup className="mr-sm-2" size="sm"></InputGroup>
          </Form>

          <Navbar.Collapse id="basic-navbar-nav" size="sm">
            <Nav className="ml-auto" size="sm">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#link">{localStorage.getItem("email")}</Nav.Link>
              <Button
                variant="dark"
                align="right"
                size="sm"
                onClick={this.logout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-5">
          {/* <p>id company mu = {this.state.profile.id_company}</p> */}

          <Form>
            <Row>
              <Col>
                <CardColumns>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://source.unsplash.com/random?sig=4"
                    />
                    <Card.Body>
                      <Card.Title> {this.state.profile.name}</Card.Title>
                      <Card.Text> {this.state.profile.skill} </Card.Text>

                      <Card.Text>
                        {" "}
                        <span className="glyphicon">&#x2710; </span>{" "}
                        {this.state.profile.total_project}{" "}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <span className="glyphicon">&#x2709; </span>{" "}
                        {(this.state.profile.total_project_done /
                          this.state.profile.total_project) *
                          100}{" "}
                        %{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Col>

              <Col>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td> {this.state.profile.name} </td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td> {this.state.profile.description} </td>
                    </tr>
                    <tr>
                      <td>location</td>
                      <td> {this.state.profile.location} </td>
                    </tr>
                    <tr>
                      <td>dateofbirth</td>
                      <td> {this.state.profile.dateofbirth} </td>
                    </tr>
                    <tr>
                      <td>total_project</td>
                      <td> {this.state.profile.total_project} </td>
                    </tr>
                    <tr>
                      <td>total_project_done</td>
                      <td> {this.state.profile.total_project_done} </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Form>

          {/* <p>role kamu = {localStorage.getItem('role')}</p> */}

          {localStorage.getItem("role") === "2" ? (
            <div>
              {this.state.company_name !== "" ? (
                // <p>your hire status = {this.state.hire_status}</p>

                <div>
                  {this.state.hire_status == 1 ? (
                    <Button onClick={this.handleClickAccept.bind(this)}>
                      Accept hiring from {this.state.company_name}
                    </Button>
                  ) : (
                    <p>You are hired by {this.state.company_name}</p>
                  )}
                </div>
              ) : (
                <p></p>
              )}

              <br />
              <br />

              <Button>Edit my profile</Button>
            </div>
          ) : (
            <div className="container mt-5">
              <Form>
                <Row>
                  {this.state.company_name !== "" ? (
                    <h2>Waiting for confirmation</h2>
                  ) : (
                    <Button onClick={this.handleClickHireMe.bind(this)}>
                      Hire me
                    </Button>
                  )}
                </Row>
                <br />
                <Row>
                  <Link to="/engineer">
                    <Button>Back</Button>
                  </Link>
                </Row>
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(Profile);
// export default Profile;
