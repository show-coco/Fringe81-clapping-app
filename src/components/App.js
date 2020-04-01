import React from "react";
import ClpCurrentUser from "./molecules/ClpCurrentUser";
import ClpCommentForm from "./molecules/ClpCommentForm";
import "../assets/styles/App.css";

function App() {
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

  localStorage.setItem("users", JSON.stringify(Users));
  const users = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="App">
      <ClpCurrentUser users={users}></ClpCurrentUser>
      <ClpCommentForm users={users}></ClpCommentForm>
    </div>
  );
}

export default App;
