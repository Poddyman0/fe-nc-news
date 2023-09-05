import axios from "axios";
import React from "react";
import { useState } from "react";

export default function topicsForm() {
  const [topicsForm, setTopicsForm] = useState({
    slug: "",
    description: "",
  });
 
  function handleChange(evt) {
    const value = evt.target.value;
    setTopicsForm({
      ...topicsForm,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getTopics(topicsForm);
  };
  
  const getTopics = (topicsForm) => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/topics", form)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



return (
<form className="topicsForm" onSubmit={handleSubmit}>
    <select
    value={topicsForm.category_name}
    id="category_name"
    name="category_name"
    onChange={handleChange}
  >

  </select>
  <button>Submit</button>
</form>
)
}

/* for above
    {topicsList.map((item, i) => {
      topicsForm.topic = item.topic;
      return (
        <option key={i} value={item.topic}>
          {item.topic}
        </option>
      );
    })}
*/