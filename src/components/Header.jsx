import React from "react";
import Navbar from "./NavBar";


export default function Header({currUser}) {
  
  return (
    <header>
      <h1 className="header-link">Northcoders News</h1>
      <br></br>
      <section className="loggedin-user">
        <p className="user_text">{`${currUser} is logged in`}</p>
      </section>
      <br></br>
      <Navbar />
    </header>
  );
}