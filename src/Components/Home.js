import React, { Component } from "react";
import '../CSS/button.css';
import '../CSS/split.css';
import {Link} from 'react-router-dom';
import { Container} from 'react-bootstrap'




class Home extends Component{
    render(){
        return (
            <div>

            
                <Container>
                    
                    <Link to="/engineer">
                        {/* <button class="button">ENGINEER</button> */}
                        <div className="split left">
  <div className="centered">
    
    <h2>ENGINEER</h2>
    
  </div>
  </div>


                    </Link>

                    <Link to="/user/login">
                        {/* <button class="button-black">COMPANY</button> */}


                        <div className="split right">
  <div className="centered">
    
    <h2>LOGIN</h2>
    
  </div>
</div>
                    </Link>

                </Container>


               






                

            
            </div>
            

        )
    }
}


export default Home;