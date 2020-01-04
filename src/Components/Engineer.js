import React, { Component } from "react";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllEngineer } from '../Redux/Actions/actionEngineer';

import {  Button, InputGroup, ButtonGroup, Dropdown, DropdownButton,
          FormControl, Form } from 'react-bootstrap';




const URL = "http://localhost:9000/engineer";

class Engineer extends Component{
  state = {
    engineer: [], //store data

    //searchbox
    input_name: '', //input from search box
    input_skill: '', //input from search box


    //3 filter case
    query_searchBox: '',
    query_sortButton: '',
    // query_pagin: '',
  };



  componentDidMount = () => {
    this.getDataFromApi()
  }

  //try change data with response
  getDataFromApi = async () => {
    await this.props.dispatch(  getAllEngineer(URL)  );
    const engineer = await this.props.engineer;    
    console.log('90909090909090', engineer);
    this.setState({
      engineer: engineer.engineerData.response
    }) 
  }




  handleChangeSearch( {target} ) {
    this.setState({
      [target.id]: target.value
    })
  }

  //use async when trouble for get data must take second action
  submitSearch = async () => {
    let querySearch = '';

      if( this.state.input_name !== '' && this.state.input_skill !== '' ) {
        querySearch = '&name='+this.state.input_name+'&skill='+this.state.input_skill;
      } else {
        if ( this.state.input_name !== '' ) {
          querySearch = '&name='+this.state.input_name;
        }
        if ( this.state.input_skill !== '' ) {
          querySearch = '&skill='+this.state.input_skill;
        }
      }

    await this.setState({query_searchBox: querySearch});
    await this.props.dispatch( getAllEngineer(URL+'?'+this.state.query_searchBox+this.state.query_sortButton) );
    this.setState({
      engineer: this.props.engineer.engineerData.response
    })
  }


  handleClickSort = async (event) => {
    console.log('lklklklklklklklk', event.target.id);

    let querySearch = ''

      if ( event.target.id === 'sort_name_asc' ) {
        querySearch = '&sort=name&order=asc'
      }
      if ( event.target.id === 'sort_name_desc' ) {
        querySearch = '&sort=name&order=desc'
      }
      
      if ( event.target.id === 'sort_skill_asc' ) {
        querySearch = '&sort=skill&order=asc'
      }
      if ( event.target.id === 'sort_skill_desc' ) {
        querySearch = '&sort=skill&order=desc'
      }

      if ( event.target.id === 'sort_date_asc' ) {
        querySearch = '&sort=dateupdated&order=asc'
      }
      if ( event.target.id === 'sort_date_desc' ) {
        querySearch = '&sort=dateupdated&order=desc'
      }
    
    
    await this.setState({query_sortButton: querySearch});
    console.log(URL+'?'+this.state.query_searchBox+this.state.query_sortButton);
    await this.props.dispatch( getAllEngineer(URL+'?'+this.state.query_searchBox+this.state.query_sortButton) );
    this.setState({
      engineer: this.props.engineer.engineerData.response
    })

  }
  

  render(){
    const { engineer } = this.state;
    
    return (
      <div>


          <Form inline>
                <InputGroup className="mr-sm-2" >
                    <FormControl id="input_name" aria-describedby="basic-addon3" placeholder="Name"   value={this.state.input_name}  onChange={ this.handleChangeSearch.bind(this) } />
                    <FormControl id="input_skill" aria-describedby="basic-addon3" placeholder="Skill" value={this.state.input_skill} onChange={ this.handleChangeSearch.bind(this) } />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.submitSearch.bind(this)}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>



            <ButtonGroup aria-label="Basic example" className="mb-3" size="sm"  >
                
                  <DropdownButton as={ButtonGroup} title="Name" id="bg-nested-dropdown1" size="sm" variant="dark" > 
                    <Dropdown.Item eventKey="1"  id="sort_name_asc"  onClick={this.handleClickSort} >ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="2" id="sort_name_desc"  onClick={this.handleClickSort} >DESC</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton as={ButtonGroup} title="Skill" id="bg-nested-dropdown2" size="sm" variant="dark">
                    <Dropdown.Item eventKey="1" id="sort_skill_asc"  onClick={this.handleClickSort} >ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="2" id="sort_skill_desc" onClick={this.handleClickSort} >DESC</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton as={ButtonGroup} title="Date Updated" id="bg-nested-dropdown3" size="sm" variant="dark">
                    <Dropdown.Item eventKey="1" id="sort_date_asc"  onClick={this.handleClickSort} >ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="2" id="sort_date_desc" onClick={this.handleClickSort} >DESC</Dropdown.Item>
                  </DropdownButton>

            </ButtonGroup>

        {console.log(engineer,'5555')}

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
           
          }

          
        
      </div>
    );
  }

        
}

const mapStateToProps = state => {
  return {
    engineer: state.engineer
  }
}



export default connect(mapStateToProps)(Engineer);
// export default Engineer

