import React, { useState, useEffect } from "react";
import Axios from "axios";

import Posts from "./Posts";
import Pagination from "./Pagination";

const url = "http://localhost:9000/engineer/";

function Engineer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get(url);
      setPosts(res.data.response);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // state = {
  //   arrengineer: [],
  // };

  // componentDidMount(){
  //     Axios.get(url)
  //     .then((res)=> {
  //         console.log(res.data.response);
  //         this.setState({
  //           arrengineer: res.data.response,
  //         })
  //     })
  //     .catch (err=> console.log(err));
  // }

  // const {arrengineer} = this.state;

  return (
    // <div>
    //     <h2>ini Engineer</h2>

    //     {
    //         arrengineer.map(({name}, index) => {
    //             return (
    //                 <div key={index}>
    //                     <p>
    //                         {name}
    //                     </p>
    //                 </div>
    //             )
    //         })
    //     }

    //     <h2>ee siaer</h2>
    // </div>

    <div className="container mt-5">
      <h1 className="text-primary mb-3">GoBLOG</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Engineer;
