import React from "react";
import Books from "./books";
import PropTypes from "prop-types";
const Results = (props) => {
  const { searchBooks, changeShelves, myBooks } = props;
  const updateSearchBooks = searchBooks.map((book) => {
    myBooks.map((myBook) => {
      if (book.id === myBook.id) {
        book.shelf = myBook.shelf;
      }
      return myBook;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updateSearchBooks.map((book) => (
          <Books key={book.id} books={book} changeShelves={changeShelves} />
        ))}
      </ol>
    </div>
  );
};
Results.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  changeShelves: PropTypes.func.isRequired,
  myBooks: PropTypes.array.isRequired,
};
export default Results;
