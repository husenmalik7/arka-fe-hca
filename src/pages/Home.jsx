// when edit profile name not update because use the localstorage
// bug when no engineer rows (empty engineer rows)

import { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../helper/baseUrl";

import logoutLogo from "../assets/logout.png";

import "../styles/main.css";
import "../styles/home.css";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationObj, setPaginationObj] = useState({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getLocalStorage();
    fetchData();
    /* eslint-disable-next-line */
  }, []);

  let handleCard = (id) => {
    props.history.push("/profile/" + id);
  };

  function getLocalStorage() {
    let name = localStorage.getItem("name");
    let role = localStorage.getItem("role");

    setName(name);
    setRole(role);

    console.log(role);

    if (role === "engineer") {
      props.history.push("/engineer/profile");
    }
  }

  let fetchData = (page) => {
    let paramsPage = new URLSearchParams(window.location.search).get("page");
    if (paramsPage) page = paramsPage;
    if (paramsPage === null) paramsPage = 1;

    setCurrentPage(paramsPage);

    let url = `${baseUrl}/engineer`;
    axios
      .get(url, { params: { page: page } })
      .then((response) => {
        let paginationObject = setPaginationObject(response);
        setPaginationObj(paginationObject);
        handleOverPage(page, paginationObject, props);

        console.log({ paramsPage });
        console.log({ paginationObject });

        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    function setPaginationObject(item) {
      let paginationObject = {};
      paginationObject.page = item.data.page;
      paginationObject.numOfPages = item.data.numOfPages;

      return paginationObject;
    }

    function handleOverPage(page, paginationObject, props) {
      if (page > paginationObject.page) {
        props.history.push("/home?page=" + paginationObject.page);
        setCurrentPage(paginationObject.page);
      } else if (page < 1) {
        props.history.push("/home?page=1");
        setCurrentPage(1);
      }
    }
  };

  let card = (item, index) => (
    <div
      className="card-custom"
      key={index}
      onClick={() => handleCard(item.id)}
    >
      <div className="card-empty">
        <img src={`https://picsum.photos/200/300?random=${index}`} alt="name" />
      </div>
      <div className="card-content">
        <p className="name">{item.name}</p>
        <p className="position">{item.position}</p>
        <p className="email">{item.email}</p>
      </div>
    </div>
  );

  let logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    props.history.push("/login");
  };

  function gotoProfile() {
    if (role === "company") {
      props.history.push("/company/profile");
    } else {
      console.log("gotoprofile engineer");
    }
  }

  // render
  return (
    <div className="main fd-col">
      <div className="nav">
        <div className="left-nav"></div>
        <div className="name-nav">
          <p onClick={() => gotoProfile()} className="name">
            {name}
          </p>
        </div>
        <div className="logout-nav">
          <img
            onClick={() => logout()}
            src={logoutLogo}
            alt="logout"
            width={"33px"}
          />
        </div>
      </div>
      <div className="content fd-row">
        <div className="inner-content">
          {data.map((item, index) => card(item, index))}
        </div>
      </div>
      <div className="pagination">
        <div id="prev-button">
          <div className="button-wrapper">
            <a
              className={
                currentPage <= 1 ? `button type-disabled` : `button type-1`
              }
              href={
                currentPage <= 1 ? `#` : `/home?page=${Number(currentPage) - 1}`
              }
            >
              Previous
            </a>
          </div>
        </div>

        <div id="next-button">
          <div className="button-wrapper">
            <a
              className={
                currentPage >= paginationObj.numOfPages
                  ? `button type-disabled`
                  : `button type-1`
              }
              href={
                currentPage >= paginationObj.numOfPages
                  ? `#`
                  : `/home?page=${Number(currentPage) + 1}`
              }
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
