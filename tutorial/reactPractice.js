// define , redefine and update variables

// VAR
// LET
// CONST

// define
var number = 100;
console.log(number);
//update
number = 200;
console.log(number);
//redefine
var number = "orange";
console.log(number);

// define
let amount = 100;
console.log(amount);
//update
amount = 200;
console.log(amount);
//redefine
let amount = "orange";
console.log(amount);

//define
const total = 100;
console.log(total);
//update
total = 200;
console.log(total);

const person = { name: "peter" };
person.name = "bob";

console.log(person);

/*===============index.js practice===============*/

import React from "react";
import ReactDOM from "react-dom";

//stateless functional component
//always RETURN JSX
function Greeting() {
  //JSX
  //three arguments element, propsObject, children
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Yanik Kumar</h1>;
const Message = () => <p>My message</p>;

// Behind the scene of react
// function Greeting() {
//   return React.createElement("div", {}, "Hello React");
// }

ReactDOM.render(<Greeting />, document.getElementById("root"));

/*
JSX Rules:
 return single element
 use camelCase for html attributes
 close every element
 formatting
*/

//Nested Component and the use of ES6

/* ============Simple Book project in react============== */

/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Book() {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}

const CoverImage = () => (
  <img
    width="200"
    src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL436_.jpg"
    alt="Book Cover"
  />
);

const Title = () => <h1>The Subtle Art Of Not Giving A F*ck</h1>;
const Author = () => (
  <p style={{ backgroundColor: "black", color: "white" }}>Mark Manson</p>
);
ReactDOM.render(<Book />, document.getElementById("root"));
*/

/*===========javascript in jsx================ */

// import React from "react";
// import ReactDOM from "react-dom";

// function Person() {
//   const btn = "search button";
//   const name = "Yanik";
//   const lastName = "Kumar";

//   return (
//     <section>
//       <button>{btn}</button>
//       <h2>{name + lastName}</h2>{" "}
//       {/*or do like this as core js {`${name} ${lastName}`} */}
//       <p>{12 + 24}</p> {/* Must return something */}
//     </section>
//   );
// }

// ReactDOM.render(<Person />, document.getElementById("root"));
