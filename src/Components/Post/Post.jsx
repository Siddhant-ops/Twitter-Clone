import React from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar, Button } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9Lp7IXgHco4k4Hq1evPSTrP3fSQcqwpUysjpku=s32-c-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Siddhant Dalvi{" "}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @siddhantdalvi
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Wakanda Forever</p>
          </div>
        </div>
        <img
          src="https://media0.giphy.com/media/jsHW64p3l7Vf9uyrLd/giphy.webp"
          alt=""
        />
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

export default Post;
