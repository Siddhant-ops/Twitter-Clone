import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9Lp7IXgHco4k4Hq1evPSTrP3fSQcqwpUysjpku=s32-c-mo"></Avatar>
          <input type="text" placeholder="Whats happening" />
        </div>
        <input
          className="tweetbox__inputMedia"
          type="text"
          placeholder="Optional : Enter image URL"
        />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
