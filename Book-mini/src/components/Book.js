import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showInfo: false
    };
  }

  handleinfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { img, title, author } = this.props.info;
    const { deleteItem } = this.props;
    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            This is a Great Book. Go Ahead and buy it right now This is a Great
            Book. Go Ahead and buy it right now This is a Great Book. Go Ahead
            and buy it right now
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <div className="book">
        <img src={img} width="150px" alt="book-img" />
        <div>
          <h4>Title: {title}</h4>
          <h6>By: {author}</h6>
          <button onClick={deleteItem}>Delete Item</button>
          <button onClick={this.handleinfo}>Show Info</button>
          {checkInfo(this.state.showInfo)}
        </div>
      </div>
    );
  }
}

export default Book;
