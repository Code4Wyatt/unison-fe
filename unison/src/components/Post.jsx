import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Avatar } from "@material-ui/core";
import "../style/style.css";
import React, { useEffect, useState } from "react";

function Post(props) {
  const [user, setUser] = useState([]);
  // console.log("post props:", props);
  // console.log("post video:", props.posts.videoUrl);
  // console.log(user)
  // console.log(user.firstname)
   useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(`http://localhost:5000/users/${props.posts.userId}`);
      let userData = await user.json();
      // console.log("user: ", userData);
      setUser(userData);
    };
    fetchUser();
   }, [props.posts.userId]);
  
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={user.profileImage} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{user.firstname} {user.surname}</h3>
        </div>
      </div>

      <div className="post__bottom">
        <p>{props.posts.content}</p>
      </div>
      { props.posts.videoUrl && 
<div className="post__video">
        <iframe
          width="100%"
          height="720"
          src={props.posts.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      }
      { props.posts.image && 
<div className="post__image">
        <img src={props.posts.image}/>
      </div>
      }
      

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
