import React, { useMemo } from "react";

// React.memo to prevent re-renders if props don't change
const Post = React.memo(({ post, toggleVerifyPost }) => {
  // Memoize random background color so it doesn't change on every render
  const bgColor = useMemo(() => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    return randomColor;
  }, []);

  const { id, title, body, verifyPost } = post;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => toggleVerifyPost(id)}>
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
