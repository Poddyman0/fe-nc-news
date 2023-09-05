import React from "react";

export default function SingleUser({
        user: {username, name, avatar_url},
}) {
    return (
    <div className="singleUser">
      <h1>Username: {username}</h1>
      <p>Name: {name}</p>cd <div styleName="" />
      <img
        src={avatar_url}
        alt={`${username} profile avatar picture`}
      />
    </div>
  );
}
