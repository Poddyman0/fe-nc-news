import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";
import {useParams} from "react-router-dom"
import SingleArticle from "./SingleArticle"
import AddComment from "./AddComment"

export default function CommentsList () {
    const [commentsList, setCommentsList] = useState([])
    const {article_id} = useParams()
  
      useEffect(() => {
        axios
          .get(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}/comments`)
          .then(({ data }) => {
            setCommentsList(data.comments)

          });
      }, [article_id]);

    return (
      <>
        <div className="singleArticleLeft">
            <SingleArticle/>
            
        </div>
        <div className="commentsRight">
            <h1>comments:</h1>
            <AddComment />
          {commentsList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </div>
      </>
      );
}

//<AddComment comment={comment}/>