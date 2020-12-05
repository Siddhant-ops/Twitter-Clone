import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../Context/StateProvider";

function Widgets() {
  const [{ user }, dispatch] = useStateValue();

  // CAPTURE AND SHOW DISPLAY NAME TO CAPITALIZED
  const fullName = user?.displayName;
  const firstName = fullName.substring(0, fullName.indexOf(" "));
  const lastName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.length
  );

  // Username
  const uName =
    firstName.toLowerCase() +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase();

  return (
    <div className="widgets">
      <div className="widgets__input">
        <Button variant="outlined" color="primary">
          <SearchIcon className="widgets__searchIcon" />
        </Button>
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening ?</h2>
        <TwitterTweetEmbed tweetId={"1316810405646344192"} />
        <div className="widgets__widgetContainerTimeline">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="reactjs"
            options={{ height: 400 }}
          />
        </div>
        <TwitterShareButton
          url={"https://twitter.com/reactjs"}
          options={{ text: "#reactjs is so good", via: uName }}
        />
      </div>
    </div>
  );
}

export default Widgets;
