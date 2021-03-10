import React, { Component } from "react";
import PropTypes from "prop-types";

class ChangeShelf extends Component {
  state = {
    value: this.props.shelf,
  };
  handleSelect = (e) => {
    const selectValue = e.target.value;
    this.setState({ value: selectValue });
    this.props.changeShelves(this.props.book, selectValue);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect} value={this.state.value}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
ChangeShelf.propTypes = {
  changeShelves: PropTypes.func.isRequired,
  books: PropTypes.object,
};
export default ChangeShelf;
