import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "../Post/Post";
import Tweetbox from "../Tweetbox/Tweetbox";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Latest Tweets</h1>
      </div>
      <Tweetbox />
      {/* Tweet Box */}

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            avatar={post.avatar}
            displayName={post.displayName}
            username={"@" + post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
