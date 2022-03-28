import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Avatar } from "@material-ui/core";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "../style/style.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Post(props) {
  const [user, setUser] = useState([]);
  const [likes, setLikes] = useState([]);

  const currentUserId = useSelector(
    (state) => state.currentUser.user[0].data.currentUser._id
  );
  const postUserId = props.posts.userId;
  

  console.log("post props:", props);
  console.log("post id:", props.posts.userId);
  // console.log(user)
  console.log(currentUserId);

  const likePost = async (currentUserId) => {
    try {
      const likedPost = await fetch(`http://localhost:5000/timeline/:id/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const postData = likedPost.json();
      setLikes(currentUserId);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePost = async (currentUserId) => {
    const postId = props.posts._id;
    try {
      if (postUserId === currentUserId) {
        const deletePost = await fetch(
          `http://localhost:5000/timeline/${postId}`,
          {
            method: "DELETE",
          }
        );
        window.location.reload(false);
      } else {
        console.log(error)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(
        `http://localhost:5000/users/${props.posts.userId}`
      );
      let userData = await user.json();
      // console.log("user: ", userData);
      setUser(userData);
    };
    fetchUser();
  }, [props.posts.userId]);

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topInfo d-flex">
          <Avatar src={user.profileImage} className="post__avatar" />
          <h3>
            {user.firstname} {user.surname}
          </h3>
        </div>
        <div className="post__top__options">
          {postUserId === currentUserId && (
            <div>
              <DropdownButton id="dropdown-basic-button" title="...">
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item onClick={deletePost}>Delete Post</Dropdown.Item>
              </DropdownButton>
            </div>
          )}
          {postUserId !== currentUserId && (
            <div>
              <DropdownButton id="dropdown-basic-button" title="...">
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Connect</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Message User</Dropdown.Item>
              </DropdownButton>
            </div>
          )}
        </div>
      </div>

      <div className="post__bottom">
        <p>{props.posts.content}</p>
      </div>
      {props.posts.videoUrl && (
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
      )}
      {props.posts.image && (
        <div className="post__image">
          <img src={props.posts.image} />
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon onClick={likePost} />
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
