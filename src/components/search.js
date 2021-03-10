import React from "react";
import SearchBar from "./searchbar";
import Results from "./results";
import PropTypes from "prop-types";
const Search = (props) => {
  const { searchBooks, search, removeSearch, changeShelves, myBooks } = props;
  return (
    <div className="search-books">
      <SearchBar search={search} removeSearch={removeSearch} />
      <Results
        searchBooks={searchBooks}
        changeShelves={changeShelves}
        myBooks={myBooks}
      />
    </div>
  );
};
Search.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  removeSearch: PropTypes.func.isRequired,
  changeShelves: PropTypes.func.isRequired,
  myBooks: PropTypes.array.isRequired,
};
export default Search;
