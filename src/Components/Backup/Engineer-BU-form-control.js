import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import logo from '../Asset/logo-arkademy.svg';


import {InputGroup, FormControl, Button, Navbar, Nav, Form} from 'react-bootstrap'

import Posts from './Posts'
import Pagination from './Pagination'



const url = 'http://localhost:9000/engineer/';



class Engineer extends Component{
  constructor() {
    super();
    this.state = {
      input_name: '',
      input_skill: ''
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }){
    this.setState({
      [target.id] : target.value
    })
  }

  submit() {
    // console.log( this.state.input_name, this.state.input_skill );
    this.searchEngineer(this.state.input_name, this.state.input_skill);
  }



  searchValue(press) {
    let value = press.target.value
    if (press.key === "Enter") {

      console.log("you have press enter");
      console.log(value);

      this.searchEngineer(value);
    }
  }

  searchEngineer(input_name, input_skill){

    // console.log('your input name is = ' + input_name);
    // console.log('your input skill is = ' + input_skill);


    let querySearch = ''
    
    if (input_name !== '' && input_skill !== ''){
      querySearch = '?name='+input_name+'&skill='+input_skill;
    } else {
      if (input_name !== '') {
        querySearch = '?name='+input_name;
      }

      if (input_skill !== '') {
        querySearch = '?skill='+input_skill;
      }
    }

    // console.log(url+querySearch);

    axios.get(url+querySearch);


    // axios.get('http://localhost:9000/engineer?name=' + input_name)
    // .then( console.log('zxczxczxc') ) //parse data here
    // .catch(err=> {
      // console.log(err)
    // })
  }



  render(){
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
                {/* <Button variant="outline-success">Search</Button>  */} {/*optional */}
              </Form>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Ngaran maneh</Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>




            <div className='container mt-5'>
              <InputGroup size="sm" className="mb-3">

                {/* <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="Name" onKeyPress={(p) => this.searchValue(p) }/> */}
                {/* <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="Skill" onKeyPress={(p) => this.searchValue(p) }/> */}
                <FormControl id="input_name" aria-describedby="basic-addon3" placeholder="Name" value={this.state.input_name} onChange={this.handleChange} />
                <FormControl id="input_skill" aria-describedby="basic-addon3" placeholder="Skill" value={this.state.input_skill} onChange={this.handleChange} />
  
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={this.submit} >Search</Button>
                </InputGroup.Append>

              </InputGroup>


            <h1 className='text-primary mb-3'>xzc</h1>


            {/* <Posts posts={currentPosts} loading={loading} />   */}
            </div>

            </div>
        )
  
}
}
export default Engineer