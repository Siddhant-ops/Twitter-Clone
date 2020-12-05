import { Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";
import React, { useState, useRef } from "react";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import db from "../../firebase";
import { storage, storageRef } from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../Context/StateProvider";

const Tweetbox = () => {
  // USER layer
  const [{ user }, dispatch] = useStateValue();

  const [tweetMessage, setTweetMessage] = useState("");

  // AVATAR LOGO CAPTURE AND SHOW
  const avatar = user?.photoURL;

  // CAPTURE AND SHOW DISPLAY NAME TO CAPITALIZED
  const fullName = user?.displayName;
  const firstName = fullName.substring(0, fullName.indexOf(" "));
  const lastName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.length
  );

  const dName =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase() +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase();

  // Username
  const uName =
    firstName.toLowerCase() +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase();

  // This is Img upload button functioon
  const imgbtn = () => {
    document.getElementById("fileuploadimg").click();
  };

  // Image Preview

  const [image, setImage] = useState("");
  const imageRef = useRef(null);
  var imageFile;
  function useDisplayImage() {
    const [result, setResult] = useState("");
    function uploader(e) {
      imageFile = e.target.files[0];

      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setResult(e.target.result);
        };

        reader.readAsDataURL(imageFile);
      }
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    uploader(e);
  };

  // SEND TWEET
  const sendTweet = async (e) => {
    e.preventDefault();

    if (image) {
      var metadata = {
        contentType:
          "image/" +
          image.name.substring(image.name.indexOf(".") + 1, image.name.length),
      };
    }

    // REFS
    const storageRef = storage.ref();
    const parentFolderRef = storageRef.child("Image/");
    const userFolderRef = parentFolderRef.child(`${"@" + uName}/`);
    const fileRef = userFolderRef.child(`${"@" + uName + "_" + image.name}`);
    await fileRef.put(image, metadata).then(function (snapshot) {
      console.log("File Uploaded");
    });

    await fileRef.getDownloadURL().then(async (url) => {
      db.collection("posts").add({
        displayName: dName,
        avatar: avatar,
        verified: true,
        image: url,
        text: tweetMessage,
        username: uName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    });

    setTweetMessage("");
    setImage("");
  };

  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar src={avatar}></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="Whats happening"
          />
        </div>

        <div className="tweetbox__imgBox">
          {result && (
            <img
              src={result}
              ref={imageRef}
              alt=""
              className="save__img"
              id="save__img"
            />
          )}
        </div>
        <div className="tweetbox__footer">
          <div className="tweetbox__filesIcons">
            <input
              onChange={handleImageChange}
              type="file"
              name=""
              id="fileuploadimg"
              accept="image/jpeg,image/png,image/webp,image/gif"
            />
            <Button
              onClick={imgbtn}
              variant="outlined"
              color="primary"
              className="tweetbox__fileIconOutline"
            >
              <InsertPhotoIcon />
            </Button>
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetbox__tweetButton"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;
