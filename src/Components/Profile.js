import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import axios from 'axios';

import { connect } from 'react-redux';
import { getAllEngineer } from '../Redux/Actions/actionEngineer';

import {CardColumns, Card, Row, Button, 
    Table, Form, Col } from 'react-bootstrap';



const url = 'http://localhost:9000/engineer/';


class Profile extends Component{
    

        state = {
            id_engineer : '',
            profile: [],
        }

    




    componentDidMount(){
        console.log('12121212', this.props.match.params.id_engineer);
        this.getDataById( this.props.match.params.id_engineer ); 
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

    //------------------redux
        getDataById(p_id_engineer){
            this.props.dispatch( getAllEngineer(url+p_id_engineer) )
            .then(item => {
                console.log('8898989', item.value.data.response[0]);
                this.setState(  {profile: item.value.data.response[0]}  )
            })
            .catch(err => console.log(err) )
        }
    //------------------redux





    render(){
        // console.log(this.props,'props profile')
        return(
            
            <div className='container mt-5'>

                <Form>
                    <Row>
                        <Col>
                                <CardColumns>
                                    {/* {console.log('sheet', this.state.profile)} */}
                                    
                                    <Card>
                                        <Card.Img variant="top" />  
                                        <Card.Body>
                                            <Card.Title> {this.state.profile.name}</Card.Title>
                                            <Card.Text> {this.state.profile.skill} </Card.Text>
                                            <Card.Text> {this.state.profile.total_project}</Card.Text>
                                            <Card.Text> {this.state.profile.total_project_done}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardColumns>
                        </Col>

                        <Col>
                                <Table striped bordered hover size="sm">
                            
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>    {this.state.profile.name}               </td>
                                    </tr>
                                    <tr>
                                        <td>description</td>
                                        <td>    {this.state.profile.description}        </td>
                                    </tr>
                                    <tr>
                                        <td>location</td>
                                        <td>    {this.state.profile.location}           </td>
                                    </tr>
                                    <tr>
                                        <td>dateofbirth</td>
                                        <td>    {this.state.profile.dateofbirth}        </td>
                                    </tr>
                                    <tr>
                                        <td>total_project</td>
                                        <td>    {this.state.profile.total_project}      </td>
                                    </tr>
                                    <tr>
                                        <td>total_project_done</td>
                                        <td>    {this.state.profile.total_project_done} </td>
                                    </tr>                    
                                </tbody>

                                </Table>
                        </Col>
                    </Row>
                </Form>



                <button>
                    Hire me
                </button>

                <Link to='/engineer'>
                <Button>
                        Back
                </Button>
                </Link>

            </div>

        )
    }

}


const mapStateToProps = state => {
    return {
      profile: state.profile
    }
}
  
  
  
export default connect(mapStateToProps)(Profile);
// export default Profile;