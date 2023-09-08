import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ArticleCard  from "./ArticleCard";

export default function topicsForm() {
  const [topicsForm, setTopicsForm] = useState({
    category_name: "",
  });

  const [articlesList, setArticlesList] = useState([])

  function handleChange(e) {
    const { name, value } = e.target;
    setTopicsForm({
      ...topicsForm,
      [name]: value,
    });
  const newURL = `http://localhost:5174/articles/topics/${value}`;
  window.history.pushState(null, "", newURL);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    getTopics(topicsForm);
  };
  console.log(topicsForm)

useEffect(() => {
  axios
    .get("https://be-nc-news-tnfa.onrender.com/api/articles")
    .then(({ data }) => {
      console.log(data.articles)
      setArticlesList(data.articles);
    });
}, []);

return (
<>
<form className="topicsForm" onSubmit={handleSubmit}>
  <p>filter topics:</p>
<select
    value={topicsForm.slug}
    id="category_name"
    name="category_name"
    onChange={handleChange}
  >
    <option value="coding">Coding</option>
    <option value="football">Football</option>
    <option value="cooking">Cooking</option>
    <option value="allArticles">allArticles</option>
  </select>
</form>
      {articlesList.map((article) => {
        if (article.topic === topicsForm.category_name) {
        return <ArticleCard key={article.article_id} article={article} />
        } else if (topicsForm.category_name === "allArticles") {
          return <ArticleCard key={article.article_id} article={article} />
        } else if (!topicsForm.category_name) {
          return <ArticleCard key={article.article_id} article={article} />
        }
      })}
</>
)
}

//<TopicsList/>