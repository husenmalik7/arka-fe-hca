// import React, { Component, useState, useEffect } from "react";
import React, { Component } from "react";
import axios from 'axios';
import logo from '../Asset/logo-arkademy.svg';


import {InputGroup, FormControl, Button, Navbar, Nav, Form, Card, CardColumns, ButtonGroup, Row, Col, Dropdown, DropdownButton, Pagination} from 'react-bootstrap'

// import Posts from './Posts'
// import Pagination from './Pagination'



const url = 'http://localhost:9000/engineer/';


class Engineer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      input_name: '',
      input_skill: '',
      engineerses: [],
      f_url: 'http://localhost:9000/engineer/',
      f_url2: 'http://localhost:9000/engineer/',
      image_random : 
      [
      'https://source.unsplash.com/random?sig=',
      'https://source.unsplash.com/random?sig='
      ],
      

      total: null,
      per_page: null,
      current_page: null
      
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.changePagination = this.changePagination.bind(this);
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

  clickHandler(event){
    console.log(event.target.id);
    const dropdown_click = event.target.id;
    let querySearch = ''

    // console.log('open');
    // console.log(this.state.f_url);
    // console.log('close');

    var n = this.state.f_url.includes("name"); //var to store if url contain NAME | this var return true or false
    var s = this.state.f_url.includes("skill"); //var to store if url contain SKILL | this var return true or false
    var and = '';

    // console.log(n);

    if (n === true || s === true){
      console.log('ada nama atau skill make &');
      and = '&';
    } else {
      console.log('tidak ada dua2nya');
      and = '?';
    }

    //localhost:9000/engineer/?name=1&skill=7&sort=name&order=desc
    //localhost:9000/engineer/?sort=dateupdated&order=desc  
    //localhost:9000/engineer/?order=desc
    //localhost:9000/engineer/?sort=skill
  


    if (dropdown_click === 'sort_name_asc') {
      console.log('ini adalah sort by name asending');
      querySearch = 'sort=name&order=asc';
    } 

    if (dropdown_click === 'sort_name_desc') {
      querySearch = 'sort=name&order=desc';
    }

    if (dropdown_click === 'sort_skill_asc') {
      querySearch = 'sort=skill&order=asc';
    }

    if (dropdown_click === 'sort_skill_desc') {
      querySearch = 'sort=skill&order=desc';
    }

    if (dropdown_click === 'sort_date_asc') {
      querySearch = 'sort=dateupdated&order=asc';
    }

    if (dropdown_click === 'sort_date_desc') {
      querySearch = 'sort=dateupdated&order=desc';
    }



    

    console.log('oops');
    console.log(this.state.f_url+and+querySearch);
    console.log('ccclooose');


    // console.log('lieru')
    // console.log(this.state.f_url+querySearch);
    
    axios.get(this.state.f_url+and+querySearch)
    .then(item => {
      this.setState( {engineerses: item.data.response, f_url2: url+querySearch})
      // console.log(item.data.response)
      // console.log(this.state.engineerses)
      // console.log(this.state.f_url)
    })
    .catch(err => console.log(err));   

    
    
    
  }


  changePagination(pageNumber){
    
    // console.log('bismillah ya allah');
    // console.log(pageNumber)

    let offset = (pageNumber -1) * 10;

    // console.log('bismillahirrahmanirrahim', offset);

    
    let and = '?'
    let querySearch = 'limit=10&offset='
    let page_url = this.state.f_url2;


    // console.log('allahuakbar');
    // console.log(this.state.f_url2);

    // console.log('bismillah');
    // console.log(this.state.f_url2, querySearch, offset);

    // console.log('asembah', this.state.engineerses.length);


    if (this.state.input_name !== ''){
      // console.log('nah kan namanya udah di input');
      page_url = this.state.f_url;
      and = '&';
    }

    // console.log('444', this.state.total);


    let total2 = this.state.total;

    axios.get(page_url+and+querySearch+offset)
    .then(item => {
      this.setState( {engineerses: item.data.response, total: total2})
      // console.log(item.data.response)
      // console.log(this.state.engineerses)
      // console.log(this.state.f_url)
    })
    .catch(err => console.log(err));   

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

    

    console.log(url+querySearch);
    axios.get(url+querySearch)
    .then(item => {
      this.setState( {engineerses: item.data.response, f_url: url+querySearch })
      // console.log(item.data.response)
      // console.log(this.state.engineerses)
      // console.log(this.state.f_url)
    })
    .catch(err => console.log(err));    
  }


  componentDidMount() {
    this.getDataFromApi()
  }


  getDataFromApi() {
    axios.get(url)
    // .then(item => console.log(item.data.response))
    .then(item =>  {
      this.setState( {engineerses: item.data.response, total: item.data.response.length} )
      // console.log('123', this.state.total);
      // console.log(item.data.response.length);
      // console.log(item.data.response)
      // console.log(this.state.engineerses)
    })
    .catch(err => console.log(err));
    
  }

  


  

  render(){

    // let active = 2;
    let pageNumbers =[];
    let limit = 10;
    let condition_page = 1;

    // console.log(this.state.engineerses.length);

    // (let i = 1; i <= Math.ceil(this.state.meta.total / this.state.meta.per_page); i++) {


    if(this.state.input_name !== ''){
      console.log('input namenya udah ada isinya');
      condition_page = this.state.engineerses.length;
    } else {
      condition_page = this.state.total;

    }

    console.log('ini adalah condiotion page = ', condition_page);
    for (let i=1; i<=Math.ceil(condition_page / limit); i ++){
      pageNumbers.push(i)
      // <Pagination.Item key={number} active={number === active}>
      //   {number}
      // </Pagination.Item>
      // );
    }

    

    
    

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

              

                <Form>
                  <Row>
                    <Col md={8}>

                      <InputGroup size="sm" className="mb-3">
                        <FormControl id="input_name" aria-describedby="basic-addon3" placeholder="Name" value={this.state.input_name} onChange={this.handleChange} />
                        <FormControl id="input_skill" aria-describedby="basic-addon3" placeholder="Skill" value={this.state.input_skill} onChange={this.handleChange} />
                        <InputGroup.Append>
                          <Button variant="outline-secondary" onClick={this.submit} >Search</Button>
                        </InputGroup.Append>
                      </InputGroup>

                    </Col>

                    <Col align="right" md={4}>
                
                      <ButtonGroup aria-label="Basic example" className="mb-3" size="sm"  >
                        
                          <DropdownButton as={ButtonGroup} title="Name" id="bg-nested-dropdown1" size="sm" variant="dark" > 
                            <Dropdown.Item eventKey="1"  id="sort_name_asc"  onClick={this.clickHandler} >ASC</Dropdown.Item>
                            <Dropdown.Item eventKey="2" id="sort_name_desc"  onClick={this.clickHandler} >DESC</Dropdown.Item>
                          </DropdownButton>

                          <DropdownButton as={ButtonGroup} title="Skill" id="bg-nested-dropdown2" size="sm" variant="dark">
                            <Dropdown.Item eventKey="1" id="sort_skill_asc"  onClick={this.clickHandler} >ASC</Dropdown.Item>
                            <Dropdown.Item eventKey="2" id="sort_skill_desc" onClick={this.clickHandler} >DESC</Dropdown.Item>
                          </DropdownButton>
                        
                          <DropdownButton as={ButtonGroup} title="Date Updated" id="bg-nested-dropdown3" size="sm" variant="dark">
                            <Dropdown.Item eventKey="1" id="sort_date_asc"  onClick={this.clickHandler} >ASC</Dropdown.Item>
                            <Dropdown.Item eventKey="2" id="sort_date_desc" onClick={this.clickHandler} >DESC</Dropdown.Item>
                          </DropdownButton>

                      </ButtonGroup>

                    </Col>

                  </Row>

                  <Row>
                    <Col>
                      <Pagination size="sm">
                        {pageNumbers.map(number => (
                          //  <Pagination.Item key={number} active={number === active}>
                           <Pagination.Item key={number} onClick={()=> this.changePagination(number)}>
{number}
</Pagination.Item>


                        ))}

                       
                        {/* {pageNumbers} */}
                      </Pagination>
                    </Col>
                  </Row>

{/* 
                  <nav>
                    <ul className='pagination'>
                        {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)}  className='page-link'>
                                {number}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>   */}

                  
                </Form>


                <CardColumns>
                  {this.state.engineerses.map((item) => (
                  <Card key={item.id_engineer}>
                      <Card.Img variant="top" src={this.state.image_random+Math.floor((Math.random() * 100) + 1)} />  
                      <Card.Body>
                          <Card.Title> {item.name} </Card.Title>
                          <Card.Text>
                              {item.skill}
                          </Card.Text>
                          <Button variant="dark">HIRE</Button>
                      </Card.Body>
                  </Card>
                  ))}
                </CardColumns>
              
              </div>

          </div>
        )
  
}
}
export default Engineer



