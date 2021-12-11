import "./App.css";
import React, { Component } from "react";
import PostList from "./components/postList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
