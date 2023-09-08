import React, {useState} from "react";
import axios from "axios";

export default function EveryComment({comment}) {
const [userFormDeleteComment, setuserFormDeleteComment] = useState({
    username: "",
  });
const [errorMessage, setErrorMessage] = useState('')
const [showDeleteButton, setShowDeleteButton] = useState(false);

function handleChange(e) {
    const { name, value } = e.target;

    setuserFormDeleteComment({
      ...userFormDeleteComment,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getUserDeleteComment(userFormDeleteComment)
}

const getUserDeleteComment = (userDeleteFormGet) => {
    axios
    .get(`https://be-nc-news-tnfa.onrender.com/api/users`)
    .then((response) => {
        const usernameDB = response.data.articles;
        const matchingUser = usernameDB.find((user) => user.username === userDeleteFormGet.username);
        if (matchingUser) {
            console.log(matchingUser, "ln 32 comment card")
            if (matchingUser.username === comment.author) {
            setShowDeleteButton(true);
            setErrorMessage("");
            }
        } else {
            setShowDeleteButton(false);
            setErrorMessage('Enter valid username');
        }
      })
      .catch((error) => {
        console.log("Error getting username", error);
      });
    }

    const handleDeleteComment = () => {
        axios
          .delete(`https://be-nc-news-tnfa.onrender.com/api/comments/${comment.comment_id}`)
          .then(() => {
            console.log(`Comment with ID ${comment.comment_id} deleted.`);
          })
          .catch((error) => {
            console.error("Error deleting comment", error);
          });
      };

return (
    <>
    <article className="commentCard">
      <h1>Comment ID: {comment.comment_id}</h1>
      <p>Body: {comment.body}</p>
      <p>Article ID: {comment.article_id}</p>
      <p>Author: {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      <p>Created at: {comment.created_at}</p>

        <form className="userForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Enter a valid username to delete this comment. <br></br>You can only delete this comment if you're the author.</label>
            <br></br>
            <input
                type="text"
                id="username"
                name="username"
                value={userFormDeleteComment.username}
                onChange={handleChange}
                required
            ></input>
            <button>Sign in</button>
        </form>
        <br></br>
        {errorMessage && <p>{errorMessage}</p>}
        {showDeleteButton && (
          <button onClick={handleDeleteComment}>Delete this comment. Refresh page to see comment removed</button>
        )}
    </article>
    </>
)
}
