import React, { Component } from 'react'; 
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { connect } from 'react-redux';


import Login from './Components/Login';
import Engineer from './Components/Engineer';
import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile';




class App extends Component{

  
  render(){
  
    return (
      <div className="App">

        

          <BrowserRouter>
            <nav>
                <Link to='/user/login'></Link>
                <Link to='/engineer'></Link>
                <Link to='/engineer/:id_engineer'></Link>
                {/* <Redirect exact from="/" to="/home" /> */}
            </nav>
            <main>
              <Switch>
                <Route path='/user/login' exact component={Login} />
                <Route path='/user/register' exact component={Register} />
                <Route path='/engineer' exact component={Engineer} />
                <Route path='/' exact component={Home} />
                <Route path='/engineer/:id_engineer' exact component={Profile} />
              </Switch>
            </main>
         </BrowserRouter> 
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {

  }
}


export default connect(mapStateToProps)(App);
