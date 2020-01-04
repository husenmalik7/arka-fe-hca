import React, { Component } from "react";
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import  axios from 'axios'

import '../CSS/split.css';




class Register extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            role: 2

        }


        this.handleRegister = this.handleRegister.bind(this);
    }


handleRegister(event){
    event.preventDefault();
    const url = 'http://localhost:9000/user/register'
    const data = {
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
    }
    console.log('your data', data);
    // console.log(this.state.email);
    // console.log(this.state.password);
    // console.log(this.state.role);

    axios.post(url, data)
    .then(res => {
        console.log(res.data);
        alert('Success Register');
    })
    .catch(err => {
        console.log(err);
        alert('something wrong');
    })   
}








    render(){
        return (
            <div>            

<p>===================================</p>


                <div className="split left">
                    <div className="centered">
                        <h2>Hire expert freelancer for any job, online</h2>
                        <p>Millions of small businesses use Freelancer to turn their ideas into reality</p>
                    </div>
                </div>

                <div className="split right">
                    <div className="centered">
                        <h2 align="top">Register a,sdjl</h2>
            
                            <Form method="POST" onSubmit={(event)=> this.handleRegister(event)}>
                                <Form.Group as={Row} controlId="formBasicEmail">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="text" onChange={(event)=> {this.setState({email: event.target.value})}} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicPassword">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control type="password" onChange={(event)=> {this.setState({password: event.target.value})}} placeholder="Password" />
                                </Form.Group>



                                <Form.Group as={Row} >
                                    <Col sm="1">
                                        <Form.Check onClick={(e)=>{this.setState({role: 1})}}
                                        type="radio"
                                        label="Company"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        />
                                        <Form.Check onClick={(e)=>{this.setState({role: 2})}}
                                        type="radio"
                                        label="Engineer"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        />
                                    </Col>
                                </Form.Group>
                                                      

                                <Button variant="primary" type="submit" className="buttonregister" >
                                    Register
                                </Button>
                            </Form>

                            <Link to="/user/login">
                            <p>Already have an account?</p>
                            </Link>

                    </div>
                </div>



<p>===================================</p>                    

            </div>
            

        )
    }
}


export default Register;