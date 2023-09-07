import { useState } from 'react'
import { Route, Routes, useParams } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesList from "./components/ArticlesList";
import UserList from "./components/UserList";
import SingleArticle from "./components/SingleArticle";
import SingleUser from "./components/SingleUser"
import GetTopicsButton from "./components/GetTopicsButton"
import Homepage from "./components/Homepage"
import CommentsList from "./components/CommentsList"

function App() {
  const [currUser, setCurrUser] = useState("tickle122");
  return (
    <>
      <Header currUser={currUser}></Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topics" element={<GetTopicsButton />}></Route>
        <Route path="/articles" element={<ArticlesList />}></Route>
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
