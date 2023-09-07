import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ChangeVotes(props) {
  const {article_id} = useParams()  
  const [alterVotes, setAlterVotes] = useState(0)


//optimistic rendering below

const increaseVotes = () => {
  const newVotes = alterVotes + 1
  setAlterVotes(newVotes);
  patchVotes(newVotes)
}
//optimistic rendering below
const decreaseVotes = () => {
  const newVotes = alterVotes - 1
  setAlterVotes(newVotes);
    patchVotes(newVotes)
}

const patchVotes = (newVotes) => {
  axios
    .patch(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`, { inc_votes : newVotes})
    .then((response) => {
    response.data.articles.votes
    })
    .catch((error) => {
      console.error("Error patching votes:", error);
    });
}
  return (
    <>
      {props.votes + alterVotes}
      <br>
      </br>
      <br>
      </br>
    <button onClick={increaseVotes}>Add vote</button>
    <button onClick={decreaseVotes}>Subtract vote</button>
    </>
  );
}