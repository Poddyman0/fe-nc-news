import React, { useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

export default function ChangeComments(props) {
    const {article_id} = useParams()
    const [newCommentForm, setNewCommentForm] = useState ({
        username: "",
        body: "",
      });
      const [previewComment, setPreviewComment] = useState("");
//
function handleChange(e) {
    const { name, value } = e.target;

    setNewCommentForm({
      ...newCommentForm,
      [name]: value,
    });

    if (name === "body") {
      setPreviewComment(value);
    }
  }
//
/*
function handleChange (e) {
    const value = e.target.value
    console.log(e, "line 14")

    setNewCommentForm({
        ...newCommentForm,
        [e.target.name]: value,
    })
}
*/
const handleSubmit = (e) => {
    console.log(e, "line 21")
    e.preventDefault()
    postComment(newCommentForm)
}
//prevent resubmission / loading state

    const postComment = (newCommentFormPost) => {
        console.log(newCommentFormPost)
        const {username, body } = newCommentFormPost;
        axios
        .post(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}/comments`, {username: username, body:body})
        .then((postedcomment) => {
            console.log(postedcomment, "line 32 add comment")
            console.log(postedcomment.body, "line 32 add comment")
            console.log(postedcomment.username, "line 32 add comment")


        })
        .catch((error) => {
            console.log("Error posting comment:", error);
        });
} 
return (
    <>
        <form className="commentForm" onSubmit={handleSubmit}>
            <h1>Post a comment:</h1>
            <label htmlFor="username">Enter a valid username in database e.g. tickle122:</label>
            <br></br>
            <input
                type="text"
                id="username"
                name="username"
                value={newCommentForm.userName}
                onChange={handleChange}
                required
            ></input>
            <br></br>
            <br></br>
            <label htmlFor="body">Enter comment:</label>
            <br></br>
            <input
                type="text"
                id="body"
                name="body"
                value={newCommentForm.commentBody}
                onChange={handleChange}
                required
            ></input>
            <br></br>
            <br></br>
            <button>Post comment</button>
        </form>
        <br></br>
        <div className="commentPreview">
        <h2>Comment Preview:</h2>
        <p>{previewComment}</p>
        </div>
        {props.comment}
    </>
)
}