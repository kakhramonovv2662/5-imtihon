import { NavLink } from "react-router-dom";

//img
import footerLogo from "./img/footer-logo.svg";

//scss
import "./Footer.scss";

export default function Footer({ style }) {
  return (
    <footer className="footer">
      <div className="footer__contents" style={style}>
        <div className="footer__wrapper">
          <img
            className="footer__logo"
            src={footerLogo}
            alt="big img"
            width="70px"
            height="70px"
          />
          <h3 className="footer__name">Bobur</h3>
        </div>
        <ul className="footer__list">
          <h3 className="footer__title">FIGHT WITH ME ON:</h3>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "75px" }}
              to="/twitter"
            >
              Twitter
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "100px" }}
              to="/instagram"
            >
              Instagram
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "88px" }}
              to="/telegramm"
            >
              Telegram
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "75px" }}
              to="/tube"
            >
              YouTube
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "55px" }}
              to="/figma"
            >
              Figma
            </NavLink>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="footer__title">WHAT I HAVE DONE:</h3>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ width: "180px" }}
              to="/liblaries"
            >
              Xalq Kutubxonasi
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "90px" }}
              to="/website"
            >
              Websitee
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "90px" }}
              to="/websitesecond"
            >
              Website
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "120px" }}
              to="/market"
            >
              Play Market
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "100px" }}
              to="/appstore"
            >
              App Store
            </NavLink>
          </li>
        </ul>
        <ul className="footer__list">
          <p className="footer__contact">Contact</p>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ width: "46px" }}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "87px" }}
              to="/dribble"
            >
              Dribble
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink
              className={(props) =>
                props.isActive ? "itemActiveLink" : "footer__link"
              }
              style={{ maxWidth: "87px" }}
              to="/behance"
            >
              Behance
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
