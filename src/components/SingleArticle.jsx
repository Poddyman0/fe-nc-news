import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ChangeVotes from "./ChangeVotes"

export default function SingleArticle({article}) {
const [anArticle, setAnArticle] = useState({})
const {article_id} = useParams()


useEffect(() => {
        axios
          .get(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`)
          .then(({ data }) => {
            console.log(data.articles.comment_count, "line 15 SA")

            setAnArticle (data.articles)

          });
      }, [article_id]);
  return (
    <article className="anArticle">
      <h1>Title: {anArticle.title}</h1>
      <p>Author: {anArticle.author}</p>
      <p>Article ID: {anArticle.article_id}</p>
      <p>Topic: {anArticle.topic}</p>
      <p>Time Created: {anArticle.created_at}</p>
      <p>Comment Count: {anArticle.comment_count}</p>
      <img className="articlePicture"
        src={anArticle.article_img_url}
        alt={`article ID (${anArticle.article_id}) picture`}
      />
      <Link to={`/articles/${anArticle.article_id}/comments`}>
      view all comments for this article</Link>
      <br></br>
      <p>Votes:       <ChangeVotes votes={anArticle.votes}/></p>
    </article>
  );
}




