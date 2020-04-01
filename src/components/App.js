import React from "react";
import ClpHome from "./templates/ClpHome";
import "../assets/styles/App.css";
/* eslint no-unused-expressions: "off" */

const Users = [
  {
    id: 0,
    name: "Nakata",
    canClapNum: 100,
    clappedNum: 0
  },
  {
    id: 1,
    name: "Rachel",
    canClapNum: 100,
    clappedNum: 0
  },
  {
    id: 2,
    name: "Kiyoshi",
    canClapNum: 100,
    clappedNum: 0
  },
  {
    id: 3,
    name: "Takada",
    canClapNum: 100,
    clappedNum: 0
  }
];

function App() {
  localStorage.setItem("users", JSON.stringify(Users));
  !localStorage.getItem("posts")
    ? localStorage.setItem("posts", JSON.stringify([]))
    : "";
  const users = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="App">
      <ClpHome users={users}></ClpHome>
    </div>
  );
}

export default App;
