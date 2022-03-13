//img
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Error from "../Error/Error";
import Time from "./img/time.svg";
import ReactPaginate from "react-paginate";

//scss
import "./Users.scss";
import UseHooks from "../../../Hooks/useHooks";
import SearchHooks from "../../../Hooks/SearchHooks";

export default function Users({ className }) {
  const [error, setError] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [user, setUser] = UseHooks();
  const [search] = SearchHooks();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_URL}/posts?_page=1&_limit=10`
      ).catch((err) => {
        console.log(err);
        setError(true);
      });
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(total / 10);
      setUser(data);
    };

    getPosts();
  }, []);

  const fetchPosts = async (currentPage) => {
    const res = await fetch(
      `${process.env.REACT_APP_URL}/posts?_page=${currentPage}&_limit=10`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const postsFormServer = await fetchPosts(currentPage);

    setUser(postsFormServer);
  };

  return (
    <>
      {error && <Error />}
      {user.length > 0 && (
        <ul className={className}>
          <h2 className="user__post-title">Recent Post</h2>
          {user
            .filter((user) => {
              if (search === "") {
                return user;
              } else if (
                user.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => (
              <li key={user.id} className="user__item">
                <div className="user__wrapper">
                  <span className="user__date">September 24.2020</span>
                  <span className="user__items">Design theory</span>
                </div>
                <NavLink className="user__about-title" to={`/about/${user.id}`}>
                  {user.title}
                </NavLink>
                <div className="user__date-wrapper">
                  <img
                    className="user__time-img"
                    src={Time}
                    alt="time-img"
                    width="17px"
                    height="17px"
                  />
                  <span className="user__time-text">3 minutes read</span>
                </div>
              </li>
            ))}
          <ReactPaginate
            className="pages"
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            // containerClassName={"pagination"}
            onPageChange={handlePageClick}
            breakLabel={"..."}
            pageClassName={"pages__item"}
            // pageLinkClassName={"page-link"}
            previousClassName={"pages__prev-btn"}
            previousLinkClassName={"pages__prev-link"}
            nextClassName={"pages__next-btn"}
            nextLinkClassName={"pages__next-link"}
            breakClassName={"pages__break-btn"}
            breakLinkClassName={"pages__break-link"}
          />
        </ul>
      )}
    </>
  );
}
