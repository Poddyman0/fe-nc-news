import React from "react";
import {Link} from "react-router-dom"

export default function ArticleCard({article}) {

  return (
    <article className="articleCard">
      <h1>Title: {article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Article ID: {article.article_id}</p>
      <p>Topic: {article.topic}</p>
      <p>Time Created: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comment Count: {article.comment_count}</p>
      <img className="articlePicture"
        src={article.article_img_url}
        alt={`article ID (${article.article_id}) picture`}
      />
      <br></br>
      <Link to={`/articles/${article.article_id}`}>
      view only this article</Link>
      <br></br>
    </article>
  );
}