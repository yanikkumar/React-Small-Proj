import React, { Component } from "react";

//controlled and uncontrolled

class ConntrolledInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();

    // console.log(`The Name of the input: ${name}`);
    // console.log(`The Name of the input: ${value}`);

    this.setState({
      text: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: "3rem" }}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          name="firstname"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class UnconntrolledInput extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.firstname.value);
    console.log(this.email.value);
    console.log(this.text.textContent);
  };

  render() {
    return (
      <form style={{ margin: "3rem" }}>
        <input
          type="text"
          name="firstname"
          ref={input => {
            this.firstname = input;
          }}
        />
        <input
          type="email"
          name="email"
          ref={input => {
            this.email = input;
          }}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <p ref={input => (this.text = input)}>Hello Wold</p>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <UnconntrolledInput />
      </div>
    );
  }
}

export default App;
