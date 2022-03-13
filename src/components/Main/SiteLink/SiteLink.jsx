//img
import Fb from "./img/fb.svg";
import Ex from "./img/ex.svg";
import Tw from "./img/tw.svg";
import In from "./img/in.svg";

//scss
import "./SiteLink.scss";

export default function SiteLink() {
  return (
    <section className="site">
      <div className="container">
        <h2 className="site__title">What I do!</h2>
        <p className="site__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>
        <span className="site__item">EXPLORE ME</span>
        <div className="site__wrapper">
          <img
            className="site__icons"
            src={Fb}
            alt="icons"
            width="10px"
            height="18px"
          />
          <img
            className="site__icons"
            src={Ex}
            alt="icons"
            width="20px"
            height="20px"
          />
          <img
            className="site__icons"
            src={Tw}
            alt="icons"
            width="20px"
            height="17px"
          />
          <img
            className="site__icons"
            src={In}
            alt="icons"
            width="17px"
            height="17px"
          />
        </div>
      </div>
    </section>
  );
}
