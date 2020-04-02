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
  let posts;
  let users;
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(Users));
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }
  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify([]));
  } else {
    posts = JSON.parse(localStorage.getItem("posts"));
  }

  return (
    <div className="App">
      <ClpHome users={users} posts={posts}></ClpHome>
    </div>
  );
}

export default App;
