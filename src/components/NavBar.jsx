import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/logIn"}>Home</Link>
        </li>
        <li>
          <Link to={"/api/users"}>Users</Link>
        </li>
        <li>
          <Link to={"/"}>Articles</Link>
        </li>
        <li>
          <Link to={"/api/articles/:article_id/comments"}>Comments</Link>
        </li>
      </ul>
    </div>
  );
}