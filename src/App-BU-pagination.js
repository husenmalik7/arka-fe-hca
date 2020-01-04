//import React from 'react'; //using function
import React, { useState, useEffect } from 'react'; //using class
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Engineer from './Components/Engineer';

import Posts from './Components/Posts';
import Pagination from './Components/Pagination';


// class App extends Component{
function App(){
  
  // render(){
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);



    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data);
        setLoading(false);
      };


      fetchPosts();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 



    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    // console.log(posts) 


    return (
      <div className="App">

          <div className='container mt-5'>
            <h1 className='text-primary mb-3'>GoBLOG</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination 
              postsPerPage={postsPerPage}
              totalPosts={posts.length}  
              paginate={paginate}
            />
          </div>

          <BrowserRouter>
            <nav>
                <Link to='/login'>Login</Link> <br/>
                <Link to='/engineer'>Engineer</Link>
            </nav>
            <main>
              <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/engineer' exact component={Engineer} />
              </Switch>
            </main>
         </BrowserRouter> 
      </div>
    );
  }


export default App;
