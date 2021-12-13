import { useState } from "react";

import "../styles/main.css";
import "../styles/home.css";

let card = (item, index) => (
  <div className="card-custom">
    <div className="card-empty">
      <img src="https://picsum.photos/200/300?random=2" alt="name" />
    </div>
    <div className="card-content">
      <p className="name">{index}</p>
      <p className="position">{item}</p>
      <p className="email">email</p>
    </div>
  </div>
);

const Home = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);

  console.log(indexOfLastPost);
  console.log(indexOfFirstPost);
  console.log(currentPosts);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let pageNumbers = [];
  let totalPosts = arr.length;

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div className="main fd-col">
      <div className="nav"></div>
      <div className="content fd-row">
        <div className="inner-content">
          {currentPosts.map((item, index) => card(item, index))}
        </div>
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
