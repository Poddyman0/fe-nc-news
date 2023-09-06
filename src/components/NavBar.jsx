import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/homepage"}>Home</Link>
        </li>
        <li>
          <Link to={"/users"}>Users</Link>
        </li>
        <li>
          <Link to={"/articles"}>All Articles</Link>
        </li>
        <li>
          <Link to={"/articles/:article_id/comments"}>Comments</Link>
        </li>
      </ul>
    </div>
  );
}