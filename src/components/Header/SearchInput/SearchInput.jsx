//img
import SearchIcon from "../images/search-input.svg";

//scss
import "./SearchInput.scss";

export default function SearchInput() {
  return (
    <>
      <div className="search">
        <input className="search__input" type="search" placeholder="Search" />
        <img
          className="search__icon"
          src={SearchIcon}
          alt="search input"
          width="38px"
          height="38px"
        />
      </div>
    </>
  );
}
