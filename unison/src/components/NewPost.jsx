import { useSelector, connect, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React, { useEffect, useState } from "react";
import "../style/style.css";

function NewPost() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState([]);
  const [userId, setUserId] = useState("");

  const user = useSelector((state) => state.currentUser.user);
  const currentUserId = useSelector((state) => state.currentUser.user[0].data.currentUser._id);
  console.log("currentUserId: ", currentUserId)
  console.log(user);
  console.log(user[0].data.currentUser.profileImage);

  const postAuthor = useSelector((state) => state.currentUser.user);

  const setPostAuthor = () => {
    setAuthor(postAuthor);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, userId };

    fetch("http://localhost:5000/timeline/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new post added");
    }).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    setUserId(currentUserId)
  }, [])

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user[0].data.currentUser.profileImage} />
        <form>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`Share your music, ${user[0].data.currentUser.firstname}!`}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-music-note"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
          </svg>
          <h3>Audio Clip</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
