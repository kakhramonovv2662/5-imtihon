//img
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Head from "./img/head.svg";
import Send from "./img/send.svg";

//scss
import "./About.scss";
import Users from "./users/users";
import Footer from "../Footer/Footer";
import Error from "../Main/Error/Error";

export default function AboutPage() {
  const { postId } = useParams();
  const [about, setAbout] = useState([]);
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [errorAbout, setErrorAbout] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        setLoadingAbout(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorAbout(true);
        setLoadingAbout(false);
      });
  }, []);

  return (
    <section className="about">
      <Header />
      <div style={{ display: "flex" }}>
        <div className="about__wrapper">
          <div className="about__head" style={{ marginBottom: "15px" }}>
            <img
              className="about__head-img"
              src={Head}
              alt="images"
              width="18px"
              height="20px"
            />
            <span className="about__head-num">125</span>
          </div>
          <div className="about__head">
            <img
              className="about__head-img"
              src={Send}
              alt="images"
              width="18px"
              height="16px"
            />
            <span className="about__head-num">70</span>
          </div>
        </div>
        <div>
          {errorAbout && <Error />}
          {loadingAbout && <h1>Loading...</h1>}
          <h2 className="about__title">{about.title}</h2>
          <h3 className="about__body">{about.body}</h3>
          <Users />
        </div>
      </div>
      <Footer style={{ width: "1260px" }} />
    </section>
  );
}
