import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(props) {
  return (
    <div>
      <NavBar />
      <Home hey = { <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>} />
      <About  />
    </div>
  );
}

export default App;
