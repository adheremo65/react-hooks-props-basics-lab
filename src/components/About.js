import userEvent from "@testing-library/user-event";
import React from "react";
import user from "../data/user.js";
import Links from "./Links.js"



function About(props) {
  const isBio = props.bio

  return (
    <div id="about">
      
      <h2>About Me</h2>
      {isBio?  <p>{props.bio}</p>:"Null" }
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {user.links.github} linkedin = {user.links.linkedin}/>
    </div>
  );
}

export default About;
