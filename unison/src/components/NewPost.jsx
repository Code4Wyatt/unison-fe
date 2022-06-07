import { useSelector, connect, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "../style/style.css";

function NewPost() {
  const [content, setContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [author, setAuthor] = useState([]);
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [imagePost, setImagePost] = useState(null);
  const [postId, setPostId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.currentUser.user);
  
  const currentUserId = useSelector(
    (state) => state.currentUser?.user[0]?.data?.currentUser._id
  );

  console.log("currentUserId: ", currentUserId);
  console.log(user);
  console.log(user[0]?.data.currentUser.profileImage);
  console.log(image);

  const postAuthor = useSelector((state) => state.currentUser.user);

  const updateUserImages = async (req, res, next) => {
    try {
      const userImageUpdate = await fetch(
        `http://localhost:5000/user/${currentUserId}`,
        {
          method: "PUT",
          media: JSON.stringify(),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitFile = async (id, currentUserId) => {
    try {
      let formData = new FormData();

      formData.append("image", image);
      let response = await fetch(`http://localhost:5000/timeline/${id}`, {
        body: formData,
        method: "POST",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const TargetFile = (e) => {
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePost(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const post = { videoUrl, content, userId, image };

      const response = await fetch("http://localhost:5000/timeline/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      const data = await response.json();

      const currentPostId = data.savedPost._id;

      console.log(currentPostId);

      if (response.ok) {
        console.log(data);
        console.log(data.savedPost._id);
      }

      if (TargetFile) {
        await submitFile(currentPostId);

      window.location.reload(true);
        
      }
    } catch (error) {
      console.log(error.message);
    }

    e.preventDefault();
    const post = { videoUrl, content, userId };

    fetch("http://localhost:5000/timeline/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then(() => {
        console.log("new post added");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    setUserId(currentUserId);
  }, []);

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user[0]?.data.currentUser.profileImage} />
        <form>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`Share your music, ${user[0]?.data.currentUser.firstname}!`}
          />
          <button onClick={handleSubmit} type="submit" action="/timeline">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option glow-on-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            className="bi bi-music-note"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
          </svg>
          <h3>Audio Clip</h3>
        </div>
        <div className="messageSender__option glow-on-hover">
          <Button
            variant="black"
            style={{ color: "grey", display: "flex" }}
            onClick={handleShow}
          >
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h6>Photo/Video</h6>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Image/Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="messageSender__videoInput"
                  type="text"
                  placeholder={`Enter YouTube embed URL`}
                />
                <div>
                  <input type="file" name="image" onChange={TargetFile} />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div> */}
      </div>
    </div>
  );
}

export default NewPost;
