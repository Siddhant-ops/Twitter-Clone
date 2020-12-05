import React, { forwardRef } from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar, Button } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUser className="post__badge" />}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <Button variant="outlined" color="primary">
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <Button variant="outlined" color="primary">
              <RepeatIcon fontSize="small" />
            </Button>
            <Button variant="outlined" color="primary">
              <FavoriteBorderIcon fontSize="small" />
            </Button>
            <Button variant="outlined" color="primary">
              <PublishIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
