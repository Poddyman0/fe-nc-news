import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleArticle from "./SingleArticle";
import GetAllArticlesButton from "./GetAllArticlesButton"
import GetArticleByID from "./GetArticleByID"
import GetTopicsButton from "./GetTopicsButton"

export default function ArticlesList () {
    const [articlesList, setArticlesList] = useState([])
    useEffect(() => {
        axios
          .get("https://be-nc-news-tnfa.onrender.com/api/articles")
          .then(({ data }) => {
            setArticlesList(data.articles);
          });
      }, []);

    return (
        <div className="articles">
            <h1>Articles:</h1>
            
          {articlesList.map((article) => {
            return <SingleArticle key={article.article_id} article={article} />;
          })}
        </div>
      );
}

/*
<GetAllArticlesButton allArticlesList={allArticlesList}></GetAllArticlesButton>
            <GetTopicsButton topicsList={topicsList}></GetTopicsButton>
            <GetArticleByID articlesList={articlesList}></GetArticleByID>
*/