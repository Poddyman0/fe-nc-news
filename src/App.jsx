import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesList from "./components/ArticlesList";
import UserList from "./components/UserList";
import SingleArticle from "./components/SingleArticle";
import SingleUser from "./components/SingleUser"
import GetTopicsButton from "./components/GetTopicsButton"


function App() {
  const [currUser, setCurrUser] = useState("tickle122");
  return (
    <>
      <Header currUser={currUser}></Header>
      <Routes>
        <Route path="/api/topics" element={<GetTopicsButton />}></Route>
        <Route path="/" element={<ArticlesList />}></Route>
        <Route path="/api/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/api/users" element={<UserList />}></Route>
        <Route path="/api/users/:user_id" element={<SingleUser />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
