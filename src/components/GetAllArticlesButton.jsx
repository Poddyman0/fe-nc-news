import axios from "axios";
import React from "react";
import { useState } from "react";

export default function allArticleForm({allArticles}) {
  const [allArticlesForm, setAllArticlesForm] = useState({
    title: "",
    author: "",
    article_id: "",
    topic: "",
    created_at: "",
    votes: "",
    comment_count: "",
    article_img_url: "",
  });
 
  function handleChange(evt) {
    const value = evt.target.value;

    setAllArticlesForm({
      ...allArticlesForm,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getArticles(allArticlesForm);
  };

  const getArticles = (allArticlesForm) => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/articles", form)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

return (
    <div className="allArticles">
        <h1>All articles:</h1>
        <form className="allArticlesSearch" onsubmit={handleSubmit}>
            <label htmlFor="article_id">Article ID:</label>
            <input
                type="text"
                id="article_id"
                name="article_id"
                value={form.article_id}
                onChange={handleChange}
                required
                ></input>
            <button>search</button>
        </form>
    </div>
)
}