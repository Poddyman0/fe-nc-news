import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleArticle({article}) {
const [anArticle, setAnArticle] = useState({})


const {article_id} = useParams()


useEffect(() => {
        axios
          .get(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`)
          .then(({ data }) => {
            setAnArticle (data.articles)

          });
      }, [article_id]);
//optimistic rendering below
/*
const increaseVotes = (vote) => {
    patchVotes(vote);
    console.log(vote, "line 24")
}
//optimistic rendering below
const decreaseVotes = (vote) => {
    patchVotes(vote);
    console.log(vote, "line 29")
}

const patchVotes = (vote) => {
    axios
    .patch(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`)
    .then({data})
    console.log(data, "line 36")
    setAnArticle(data.article, { inc_votes : vote})
}
*/
  return (
    <article className="anArticle">
      <h1>Title: {anArticle.title}</h1>
      <p>Author: {anArticle.author}</p>
      <p>Article ID: {anArticle.article_id}</p>
      <p>Topic: {anArticle.topic}</p>
      <p>Time Created: {anArticle.created_at}</p>
      <p>Votes: {anArticle.votes}</p>
      <button onClick={increaseVotes(+1)}>Add vote</button>
      <button onClick={decreaseVotes(-1)}>Subtract vote</button>
      <p>Comment Count: {anArticle.comment_count}</p>
      <img className="articlePicture"
        src={anArticle.article_img_url}
        alt={`article ID (${anArticle.article_id}) picture`}
      />
      <Link to={`/articles/${anArticle.article_id}/comments`}>
      view all comments for this article</Link>
      <br></br>
    </article>
  );
}


