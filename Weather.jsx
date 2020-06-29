import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export const Weather = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setPosts(data));
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <div>{post.title}</div>
          <p>반갑습니다</p>
          <div>{post.body}</div>
        </div>
      ))}
    </>
  );
};
