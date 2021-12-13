import { useState, useEffect } from "react";

import "../styles/main.css";
import "../styles/home.css";

let card = (item, index) => (
  <div className="card-custom" key={index}>
    <div className="card-empty">
      <img src="https://picsum.photos/200/300?random=2" alt="name" />
    </div>
    <div className="card-content">
      {/* <p className="name">{index}</p> */}
      <p className="position">{item}</p>
      <p className="email">email</p>
    </div>
  </div>
);

const Home = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const [listPost, setListPost] = useState([]);

  function prevPage() {
    if (currentPage > 1) {
      console.log("prev");

      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
      changePage(currentPage);
    }
  }

  function nextPage() {
    if (currentPage < numPages()) {
      console.log("next");
      // currentPage++;
      setCurrentPage(currentPage + 1);
      changePage(currentPage);
    }
  }

  function changePage(page) {
    let list = [];
    let pageSpan;

    //validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (
      let i = (page - 1) * recordsPerPage;
      i < page * recordsPerPage && i < arr.length;
      i++
    ) {
      list.push(arr[i]);
      listPost.push(arr[i]);
    }

    pageSpan = page + "/" + numPages();

    console.log({ list });
    console.log({ pageSpan });
    console.log({ listPost });

    setListPost(list);
  }

  function numPages() {
    return Math.ceil(arr.length / recordsPerPage);
  }

  useEffect(() => {
    // initial state of page
    changePage(currentPage);

    //for prevent the state is left behind [1]
  }, [currentPage]);

  return (
    <div className="main fd-col">
      <div className="nav"></div>
      <div className="content fd-row">
        <div className="inner-content">
          {listPost.map((item, index) => card(item, index))}
        </div>
      </div>
      <div className="pagination">
        <p onClick={() => prevPage()}>prev page</p>
        <p onClick={() => nextPage()}>next page</p>
      </div>
    </div>
  );
};

export default Home;

//[1] https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
//[1] https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks
