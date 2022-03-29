import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NearMeIcon from "@mui/icons-material/NearMe";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import { Avatar } from "@material-ui/core";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "../style/style.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post(props) {
  const [user, setUser] = useState([]);
  const [likes, setLikes] = useState([]);
  const [postComments, setPostComments] = useState([]);

  const currentUserId = useSelector(
    (state) => state.currentUser.user[0].data.currentUser._id
  );
  const postUserId = props.posts.userId;
  const postId = props.posts._id;

  console.log("pc", postComments);
  // console.log(user)
  // console.log("Post User ID: ", postUserId);
  // console.log("Post Props:", props);
  // console.log(currentUserId);

  const fetchComments = async () => {
    try {
      const comments = await fetch(
        `http://localhost:5000/timeline/${postId}/comments`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (comments) {
        let data = await comments.json();
        setPostComments(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const deletePost = async () => {
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
        console.log("Not your post to delete!");
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

  useEffect(() => {}, []);

  console.log(props.posts);
  console.log(props.posts.comments);

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topInfo d-flex">
          <Link to={`/profile/${props.posts.userId}`}>
            <Avatar src={user.profileImage} className="post__avatar" />
          </Link>

          <h3>
            {user.firstname} {user.surname}
          </h3>
        </div>
        <div className="post__top__options">
          {postUserId === currentUserId && (
            <div>
              <DropdownButton id="dropdown-basic-button" title="">
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item onClick={deletePost}>Delete Post</Dropdown.Item>
              </DropdownButton>
            </div>
          )}
          {postUserId !== currentUserId && (
            <div>
              <DropdownButton id="dropdown-basic-button" title="">
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Connect</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Message User</Dropdown.Item>
                <Dropdown.Item onClick={deletePost}>Delete Post</Dropdown.Item>
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
      <div className="likes__comments d-flex">
        <p className="likes">Likes {props.posts.likes.length}</p>
        <p className="comments">Comments {props.posts.comments.length}</p>
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon onClick={likePost} />
          <p>Like</p>
        </div>
        <div className="post__option">
          <AddComment postId={postId} currentUserId={currentUserId} />

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

      <button onClick={fetchComments}>Show Comments</button>
      {props.posts.comments.length !== -1 &&
        props.posts.comments.map((comment) => {
          return (
            <>
              <Comment comment={comment} />
            </>
          );
        })}
    </div>
  );
}

export default Post;
