import axios from "axios";
import React from "react";
import { useState } from "react";

export default function articleIdForm({articlesList}) {
const [articlesIDform, setArticlesIDForm] = useState({
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
    
    setArticlesIDForm({
          ...articlesIDform,
          [evt.target.name]: value,
        });
}
    
const handleSubmit = (e) => {
    e.preventDefault();
    getArticlebyID(articlesIDform);
      };
    
const GetArticleByID  = (articlesIDform) => {
    axios
        .get(`https://be-nc-news-tnfa.onrender.com/api/articles/${article_id}`, form)
        .then(({ data }) => {
            setArticlByID(data.article_id);
        })
        .catch(function (error) {
            console.log(error);
        });
}
    
        return (
            <div className="articles">
                <h1>Articles:</h1>
                <form className="article_idSearch" onSubmit={handleSubmit}>
                    <label htmlFor="article_id">Item name:</label>
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
          );
}
