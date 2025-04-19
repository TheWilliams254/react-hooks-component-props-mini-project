import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";
import Header from "./Header";  

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name} />
      <h1>{blogData.name}</h1>
      <About about={blogData.about} image={blogData.image} alt="blog logo" />
      <ArticleList posts={blogData.posts} />
      <Article posts={blogData.posts} />
    </div>
  );
}

export default App;
