import React from "react";

export default function SingleArticle({ article }) {
  return (
    <article>
      <h1>Title: {article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Article ID: {article.article_id}</p>
      <p>Topic: {article.topic}</p>
      <p>Time Created: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comment Count: {article.comment_count}</p>
      <img
        src={article.article_img_url}
        alt={`article ID (${article.article_id}) picture`}
      />
    </article>
  );
}