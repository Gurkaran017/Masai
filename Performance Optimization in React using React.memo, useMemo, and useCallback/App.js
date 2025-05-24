import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // Increment timer every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Add post handler
  const addPost = () => {
    if (!title || !body) return;
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
      },
    ]);
    setTitle("");
    setBody("");
  };

  // Memoize toggle function with useCallback to prevent re-creation on every render
  const toggleVerifyPost = useCallback((id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Timer: {timer} seconds</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={addPost}>Add Post</button>

      <div style={{ marginTop: 20 }}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            toggleVerifyPost={toggleVerifyPost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
