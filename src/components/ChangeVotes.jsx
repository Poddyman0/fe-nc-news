import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ChangeVotes() {
const [alterVotes, setAlterVotes] = useState({})

const {article_id} = useParams()
//optimistic rendering below

const increaseVotes = (vote) => {
    patchVotes(vote);
    console.log(vote, "line 13")
}
//optimistic rendering below
const decreaseVotes = (vote) => {
    patchVotes(vote);
    console.log(vote, "line 18")
}

const patchVotes = (vote) => {
    axios
    .patch(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`)
    .then({data})
    console.log(data, "line 25")
    setAlterVotes(data.article, { inc_votes : vote})
}
  return (
    <>
    <button onClick={increaseVotes(+1)}>Add vote</button>
    <button onClick={decreaseVotes(-1)}>Subtract vote</button>
    </>
  );
}