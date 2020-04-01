import React from "react";
import ClpPostForm from "./organisms/ClpPostForm";
import ClpPosts from "./organisms/ClpPosts";
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
      <ClpPostForm users={users}></ClpPostForm>
      <ClpPosts></ClpPosts>
    </div>
  );
}

export default App;
