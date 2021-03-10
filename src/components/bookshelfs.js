import React from "react";
import Books from "./books";
import PropTypes from "prop-types";
const BookShelfs = (props) => {
  let { shelf, books, changeShelves } = props;
  const booksOnShelves = books.filter((data) => data.shelf === shelf.id);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelves.map((book) => (
            <Books key={book.id} books={book} changeShelves={changeShelves} />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelfs.propTypes = {
  shelf: PropTypes.object.isRequired,
  changeShelves: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
export default BookShelfs;
