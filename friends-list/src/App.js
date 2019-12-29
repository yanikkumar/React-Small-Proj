import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 65,
      name: "Yanik",
      job: "Developer"
    },
    {
      img: 34,
      name: "Piyush",
      job: "Designer"
    },
    {
      img: 22,
      name: "Harsh",
      job: "Artist"
    }
  ];

  return (
    <section>
      <Person person={people[0]}>
        A Full Stack Developer. And working for some great projects whcich are
        cool and great.
      </Person>
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
