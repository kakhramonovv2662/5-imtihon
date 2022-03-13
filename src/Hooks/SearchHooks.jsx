import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchHooks() {
  const { search, setSearch } = useContext(SearchContext);

  return [search, setSearch];
}
