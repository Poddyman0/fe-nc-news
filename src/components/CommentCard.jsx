import React from "react";
export default function EveryComment({comment}) {

return (
    <article className="commentCard">
      <h1>Comment ID: {comment.comment_id}</h1>
      <p>Body: {comment.body}</p>
      <p>Article ID: {comment.article_id}</p>
      <p>Author: {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      <p>Created at: {comment.created_at}</p>
    </article>
)
}
