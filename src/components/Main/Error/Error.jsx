//img
import { NavLink } from "react-router-dom";
import ErrImg from "./img/err.svg";
import Strelka from "./img/strelka.svg";

//scss
import "./Error.scss";

export default function Error() {
  return (
    <div className="err">
      <img
        className="err__img"
        src={ErrImg}
        alt="Eror img"
        width="500px"
        height="193px"
      />
      <h2 className="err__title">Page not found - 404</h2>
      <p className="err__text">
        This page not found (deleted or never exists).Try a phrase in search box
        or back to home and start again.
      </p>
      <NavLink className="err__link" to="/">
        TAKE ME HOME!{" "}
        <img className="err__link-img" src={Strelka} alt="strelka" />
      </NavLink>
    </div>
  );
}
