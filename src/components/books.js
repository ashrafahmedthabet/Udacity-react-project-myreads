import React from 'react';
import ChangeShelf from './changeshelf';
import PropTypes from "prop-types";

const Books = (props) => {
    const {books,changeShelves}=props;
    return (
        <li key={books.id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks?books.imageLinks.thumbnail:"../icons/coverbook.png"})` }}></div>
                { 
                <ChangeShelf book={books} shelf={books.shelf?books.shelf:"none"} changeShelves={changeShelves}/>
                }
                </div>
                <div className="book-title">{books.title}</div>
                <div className="book-authors">{books.authors?books.authors.join(','):"Author Unknown "}</div>
            </div>
        </li>
    );
}
Books.propTypes={
    changeShelves:PropTypes.func.isRequired,
    books:PropTypes.object.isRequired,
}

export default Books;
