import React, { Component } from "react";
import Book from "./Book";
import bookData from "./data";

class Booklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: bookData
    };
  }

  filterData = id => {
    console.log(id);

    const sortedBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    return (
      <div>
        <h1>Best Selling Books This Week</h1>
        {this.state.books.map(book => (
          <Book
            key={book.id}
            info={book}
            deleteItem={() => this.filterData(book.id)}
          />
        ))}
      </div>
    );
  }
}

export default Booklist;
