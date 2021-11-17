import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getAllEngineer } from "../Redux/Actions/actionEngineer";

import {
  Button,
  InputGroup,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Row,
  FormControl,
  Form,
  Navbar,
  CardDeck,
  Card,
  CardColumns,
  Nav,
  Pagination,
  Col,
} from "react-bootstrap";

const URL = "http://localhost:9000/engineer";

class Engineer extends Component {
  state = {
    engineer: [], //store data

    //searchbox
    input_name: "", //input from search box
    input_skill: "", //input from search box

    //3 filter case
    query_searchBox: "",
    query_sortButton: "",
    query_pagin: "",
    current_pagin: 1,

    image_random: [
      "https://source.unsplash.com/random?sig=",
      "https://source.unsplash.com/random?sig=",
    ],
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  //try change data with response
  getDataFromApi = async () => {
    await this.props.dispatch(getAllEngineer(URL));
    const engineer = await this.props.engineer;

    this.setState({
      engineer: engineer.engineerData.response,
    });
  };

  handleChangeSearch({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  //use async when trouble for get data must take second action
  submitSearch = async () => {
    let querySearch = "";

    if (this.state.input_name !== "" && this.state.input_skill !== "") {
      querySearch =
        "&name=" + this.state.input_name + "&skill=" + this.state.input_skill;
    } else {
      if (this.state.input_name !== "") {
        querySearch = "&name=" + this.state.input_name;
      }
      if (this.state.input_skill !== "") {
        querySearch = "&skill=" + this.state.input_skill;
      }
    }

    await this.setState({ query_searchBox: querySearch });
    console.log(
      URL +
        "?" +
        this.state.query_searchBox +
        this.state.query_sortButton +
        this.state.query_pagin
    );
    await this.props.dispatch(
      getAllEngineer(
        URL +
          "?" +
          this.state.query_searchBox +
          this.state.query_sortButton +
          this.state.query_pagin
      )
    );
    this.setState({
      engineer: this.props.engineer.engineerData.response,
    });
  };

  handleClickSort = async (event) => {
    let querySearch = "";

    if (event.target.id === "sort_name_asc") {
      querySearch = "&sort=name&order=asc";
    }
    if (event.target.id === "sort_name_desc") {
      querySearch = "&sort=name&order=desc";
    }

    if (event.target.id === "sort_skill_asc") {
      querySearch = "&sort=skill&order=asc";
    }
    if (event.target.id === "sort_skill_desc") {
      querySearch = "&sort=skill&order=desc";
    }

    if (event.target.id === "sort_date_asc") {
      querySearch = "&sort=dateupdated&order=asc";
    }
    if (event.target.id === "sort_date_desc") {
      querySearch = "&sort=dateupdated&order=desc";
    }

    await this.setState({ query_sortButton: querySearch });
    console.log(
      URL +
        "?" +
        this.state.query_searchBox +
        this.state.query_sortButton +
        this.state.query_pagin
    );
    await this.props.dispatch(
      getAllEngineer(
        URL +
          "?" +
          this.state.query_searchBox +
          this.state.query_sortButton +
          this.state.query_pagin
      )
    );
    this.setState({
      engineer: this.props.engineer.engineerData.response,
    });
  };

  handlePagination = async (event) => {
    let queryPagin = "";
    let numPagin = 0;

    if (event.target.id === "pag_next") {
      await this.setState({ current_pagin: this.state.current_pagin + 1 });
      numPagin = (this.state.current_pagin - 1) * 10;
      queryPagin = "&limit=10&offset=" + numPagin;
    } else {
      await this.setState({ current_pagin: this.state.current_pagin - 1 });
      numPagin = (this.state.current_pagin - 1) * 10;
      queryPagin = "&limit=10&offset=" + numPagin;
    }

    await this.setState({ query_pagin: queryPagin });
    console.log(
      URL +
        "?" +
        this.state.query_searchBox +
        this.state.query_sortButton +
        this.state.query_pagin
    );
    await this.props.dispatch(
      getAllEngineer(
        URL +
          "?" +
          this.state.query_searchBox +
          this.state.query_sortButton +
          this.state.query_pagin
      )
    );
    this.setState({
      engineer: this.props.engineer.engineerData.response,
    });
  };

  logout = () => {
    //if u are not use arrow function it will error "props undefined"

    localStorage.clear();

    this.props.history.push("/user/login");
  };

  render() {
    const { engineer } = this.state;

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
            <InputGroup className="mr-sm-2" size="sm">
              <FormControl
                id="input_name"
                aria-describedby="basic-addon3"
                placeholder="Name"
                value={this.state.input_name}
                onChange={this.handleChangeSearch.bind(this)}
              />
              <FormControl
                id="input_skill"
                aria-describedby="basic-addon3"
                placeholder="Skill"
                value={this.state.input_skill}
                onChange={this.handleChangeSearch.bind(this)}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={this.submitSearch.bind(this)}
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
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
          <ButtonGroup aria-label="Basic example" className="mb-3" size="sm">
            <DropdownButton
              as={ButtonGroup}
              title="Name"
              id="bg-nested-dropdown1"
              size="sm"
              variant="dark"
            >
              <Dropdown.Item
                eventKey="1"
                id="sort_name_asc"
                onClick={this.handleClickSort}
              >
                ASC
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                id="sort_name_desc"
                onClick={this.handleClickSort}
              >
                DESC
              </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              as={ButtonGroup}
              title="Skill"
              id="bg-nested-dropdown2"
              size="sm"
              variant="dark"
            >
              <Dropdown.Item
                eventKey="1"
                id="sort_skill_asc"
                onClick={this.handleClickSort}
              >
                ASC
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                id="sort_skill_desc"
                onClick={this.handleClickSort}
              >
                DESC
              </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              as={ButtonGroup}
              title="Date Updated"
              id="bg-nested-dropdown3"
              size="sm"
              variant="dark"
            >
              <Dropdown.Item
                eventKey="1"
                id="sort_date_asc"
                onClick={this.handleClickSort}
              >
                ASC
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                id="sort_date_desc"
                onClick={this.handleClickSort}
              >
                DESC
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <Pagination size="sm">
            <Pagination.Prev id="pag_prev" onClick={this.handlePagination} />
            <Pagination.Ellipsis disabled />
            <Pagination.Next id="pag_next" onClick={this.handlePagination} />
          </Pagination>

          <CardColumns>
            {engineer.map((item) => (
              <Card key={item.id_engineer}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Img
                  variant="top"
                  src={
                    this.state.image_random +
                    Math.floor(Math.random() * 100 + 1)
                  }
                />
                <Card.Body>
                  <Card.Title> {item.name} </Card.Title>
                  <Card.Text> {item.skill} </Card.Text>
                  <Card.Text>
                    {" "}
                    <span className="glyphicon">&#x2710; </span>{" "}
                    {item.total_project}{" "}
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <span className="glyphicon">&#x2709; </span>{" "}
                    {(item.total_project_done / item.total_project) * 100} %{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer align="center">
                  <Link to={`/engineer/${item.id_engineer}`}>
                    <Button
                      variant="dark"
                      id={item.id_engineer}
                      onClick={this.hire}
                    >
                      HIRE
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            ))}
          </CardColumns>
          {/* 
 {
    engineer.map((item ) => {
      return (
        <div key={item.id_engineer}>
          <p className="userName">{item.name}</p>

          
          
            <Link to={`/engineer/${item.id_engineer}`}>
              <button>hire == {item.id_engineer}</button>
            </Link>

          <br />
        </div>
      );
    })
  } */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    engineer: state.engineer,
  };
};

export default connect(mapStateToProps)(Engineer);
// export default Engineer
