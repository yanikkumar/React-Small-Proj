import React, { Component } from "react";
import PropTypes from "prop-types"; // PropTypes = npm i prop-types --save

const Person = ({ img, name, age, info }) => {
  return (
    <div>
      <img src={img} alt="person" />
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h6>Info: {info}</h6>
    </div>
  );
};

/* Validators for standard JS types
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
*/

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired
};

// default props if no prop available
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/21.jpg",
  name: "Default",
  age: 0,
  info: "there is no info available"
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        name: "john",
        age: 23,
        info: "Some Info about John"
      },
      {
        id: 2
        // img: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
        // name: "bob",
        // age: 21,
        // info: "Some Info about bob"
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
        name: "rob",
        age: 23,
        info: "Some Info about rob"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.people.map(person => {
          return (
            <Person
              key={person.id}
              img={person.img}
              name={person.name}
              age={person.age}
              info={person.info}
            />
          );
        })}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <PersonList />;
  }
}

export default App;
