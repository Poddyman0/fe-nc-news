import React from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";


export default function Header({ currUser }) {
  return (
    <header>
      <Link to={"/"}><h1 className="header-link">Northcoders News</h1></Link>
      <p>
        Welcome to Northcoders news!
      </p>
      <section className="loggedin-user">
          <p className="user_text">{currUser.username} is logged in </p>
      </section>
      <br></br>
      <Navbar />
    </header>
  );
}