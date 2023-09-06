import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import {useParams} from "react-router-dom"

export default function ArticlesList () {
    const [articlesList, setArticlesList] = useState([])
    
    
    useEffect(() => {
        axios
          .get("https://be-nc-news-tnfa.onrender.com/api/articles")
          .then(({ data }) => {
            console.log(data.articles)
            setArticlesList(data.articles);
          });
      }, []);

    return (
        <div className="articles">
            <h1>Articles:</h1>
          {articlesList.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
                <br></br>
        </div>
      );
}

