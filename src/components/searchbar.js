import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class SearchBar extends Component {
  state = {
    inputValue: "",
  };
  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ inputValue: value });
    this.props.search(value);
  };
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={this.props.removeSearch}>
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInput}
            maxLength={60}
            placeholder="Search by title or author Char(60)"
          />
        </div>
      </div>
    );
  }
}
SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  removeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
