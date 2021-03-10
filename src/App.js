import React from "react";
import { Route, Switch } from "react-router";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/listbooks";
import Search from "./components/search";
import { debounce } from "throttle-debounce";

const shelves = [
  { id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Read" },
];
class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    errors: false,
  };
  componentDidMount = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      })
      .catch((error) => {
        if (error) {
          this.setState({ books: [] });
          alert("There are no Books on Shelves");
        }
      });
  };
  handleSearch = debounce(300, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then((books) => {
          if (books.error) {
            this.setState({ searchBooks: [] });
          } else {
            this.setState({ searchBooks: books });
          }
        })
        .catch((error) => this.handleError());
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  removeSearch = () => this.setState({ searchBooks: [] });
  changeShelves = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((error) => this.handleError());
    if (shelf === "none") {
      this.setState((currentState) => ({
        books: currentState.books.filter((el) => el.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((currentState) => ({
        books: [...currentState.books.filter((el) => el.id !== book.id), book],
      }));
    }
  };
  handleError = () => {
    this.setState({ errors: true });
  };
  render() {
    if (this.state.errors) {
      return <div> Please try again later</div>;
    }
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            strict
            path="/"
            render={() => (
              <ListBooks
                shelves={shelves}
                books={this.state.books}
                changeShelves={this.changeShelves}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                searchBooks={this.state.searchBooks}
                search={this.handleSearch}
                removeSearch={this.removeSearch}
                changeShelves={this.changeShelves}
                myBooks={this.state.books}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default BooksApp;
