import React, { Component } from 'react';
import axios from 'axios';
import {CardColumns, Card, Row, Button, 
        Table, Form, Col } from 'react-bootstrap';


const url = 'http://localhost:9000/engineer/';




   



class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            id_engineer : 'qwewq',
            profile: [],
        }

    }




    componentDidMount(){
        const { match: { params } } = this.props;
        this.getDataById(params.id_engineer); 
        console.log('qweqwe')       
    }


    getDataById(p_id_engineer){
        axios.get(url+p_id_engineer)
        .then(item => { 
            console.log(item.data.response[0]);
            this.setState(  {profile: item.data.response[0]}  );
        })
        .catch(err => console.log(err));
    }





    render(){
        return(


            
<div className='container mt-5'>

<Form>
    <Row>
        <Col>
                <CardColumns>
                    {console.log('sheet', this.state.profile)}
                    
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

               <Button>

               </Button>




            </div>

        )
    }
}


export default Profile;