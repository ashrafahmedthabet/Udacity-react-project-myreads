import React from "react";
import { Link } from "react-router-dom";
import BookShelfs from "./bookshelfs";
import PropTypes from "prop-types";
const ListBooks = (props) => {
  const { shelves, books, changeShelves } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <BookShelfs
              key={shelf.id}
              shelf={shelf}
              books={books}
              changeShelves={changeShelves}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};
ListBooks.propTypes = {
  shelf: PropTypes.array,
  changeShelves: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
export default ListBooks;
