import React from "react";
import ReactDOM from "react-dom";
import PersonList from "./App";
// import "./index.css";

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

ReactDOM.render(<PersonList />, document.getElementById("root"));
