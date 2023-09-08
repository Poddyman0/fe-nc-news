import React, { useState } from "react";
import axios from "axios";

export default function HomepageLogin({ setCurrUser }) {
    const [userForm, setUserForm] = useState ({
        username: "",
      });
    const [errorMessage, setErrorMessage] = useState('')
    
function handleChange(e) {
    const { name, value } = e.target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  }

const handleSubmit = (e) => {
    e.preventDefault()
    getUser(userForm)
}
//change username ... is signed in. 
const getUser = (userFormGet) => {
    axios
    .get(`https://be-nc-news-tnfa.onrender.com/api/users`)
    .then((response) => {
        const usernameDB = response.data.articles;
        const matchingUser = usernameDB.find((user) => user.username === userFormGet.username);
        console.log(matchingUser, "HP line 30")
        if (matchingUser) {
            setCurrUser(matchingUser.username);
            window.location.href = `http://localhost:5174/articles/topics/:topic`;        
        } else {
            setErrorMessage('Enter valid username');
        }
      })
      .catch((error) => {
        console.log("Error getting username", error);
      });
    }
return (
    <div className="signInForm">
    <p>
        Welcome to Northcoders news!
    </p>
        <form className="userForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Enter a valid username to sign in e.g. tickle122:</label>
            <br></br>
            <input
                type="text"
                id="username"
                name="username"
                value={userForm.username}
                onChange={handleChange}
                required
            ></input>
            <button>Sign in</button>
        </form>
        <br></br>
        {errorMessage && <p>{errorMessage}</p>}
    </div>
)
}
