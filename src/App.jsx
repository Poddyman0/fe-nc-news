import { useState } from 'react'
import { Route, Routes, useParams } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesList from "./components/ArticlesList";
import UserList from "./components/UserList";
import SingleArticle from "./components/SingleArticle";
import SingleUser from "./components/SingleUser"
import Homepage from "./components/Homepage"
import CommentsList from "./components/CommentsList"

function App() {
  const [currUser, setCurrUser] = useState("");
  console.log(currUser, "app line 15")

  return (
    <>
      <Header currUser={currUser}></Header>
      <Routes>
        <Route path="/homepage" element={<Homepage setCurrUser={setCurrUser}/>}></Route>
        <Route path="/" element={<Homepage setCurrUser={setCurrUser}/>}></Route>
        <Route path="/articles/topics/:topic" element={<ArticlesList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles/:article_id/comments" element={<CommentsList />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/users/:user_id" element={<SingleUser />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

//use state and set to value, 
