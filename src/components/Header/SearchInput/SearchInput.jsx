//img
import { useRef } from "react";
import SearchHooks from "../../../Hooks/SearchHooks";
import SearchIcon from "../images/search-input.svg";

//scss
import "./SearchInput.scss";

export default function SearchInput() {
  const [, setSearch] = SearchHooks();
  const searchInput = useRef();

  return (
    <>
      <form className="search">
        <input
          ref={searchInput}
          onChange={(evt) => setSearch(evt.target.value)}
          className="search__input"
          type="search"
          placeholder="Search"
        />
        <img
          className="search__icon"
          src={SearchIcon}
          alt="search input"
          width="38px"
          height="38px"
        />
      </form>
    </>
  );
}
