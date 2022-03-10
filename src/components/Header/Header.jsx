//img
import Logo from "./images/logo.svg";
import Menu from "./images/menu.svg";

//scss
import "./Header.scss";
import Navbar from "./Navbar/Nav";
import SearchInput from "./SearchInput/SearchInput";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__content">
          <a className="header__logo-link" href="/">
            <img
              className="header__logo"
              src={Logo}
              alt="site logo"
              width="58px"
              height="58px"
            />
          </a>
          <h2 className="header__name">BoburBlog</h2>
          <button className="header__menu-btn">
            <img src={Menu} alt="menu" width="24px" height="14px" />
          </button>
        </div>
        <Navbar />
        <SearchInput />
      </div>
    </header>
  );
}
