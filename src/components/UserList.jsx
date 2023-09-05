import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-nc-news-tnfa.onrender.com/api/users")
      .then(({ data }) => {
        setUserList(data.users);
      });
  }, []);

  return (
    <div className="users">
        <h1>Users:</h1>
      {userList.map((user) => {
        return <SingleUser key={user.username} user={user} />;
      })}
    </div>
  );
}