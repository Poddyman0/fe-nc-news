import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/homepage"}>Sign in</Link>
        </li>
        <li>
          <Link to={"/articles/topics/:topic"}>All Articles</Link>
        </li>
      </ul>
    </div>
  );
}