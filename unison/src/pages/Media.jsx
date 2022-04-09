import React from "react";
import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { Button } from "react-bootstrap"
import { addCurrentUserAction } from "../redux/actions/UserAction";
import NavBar from "../components/Navbar";
import "../style/style.css";

const Media = () => {
    const [media, setMedia] = useState([]);
    const [video, setVideo] = useState("");

  const images = media.filter((media) => media.image);
  const videos = media.filter((media) => media.videoUrl);
  console.log(images);

  const fetchMediaInPosts = async () => {
    try {
      const postMedia = await fetch("http://localhost:5000/timeline/");
      if (postMedia.ok) {
        const data = await postMedia.json();
        setMedia(data);
        console.log(media);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMediaInPosts();
  }, []);
    
  return (
    <>
      <NavBar />
          <div className="media__container">
              <div className="buttons"> <Button onClick={setVideo}>Videos</Button>
              <button>Images</button></div>
             
        <div className="videos__section">
          <h5>Recent Videos</h5>
          <div className="row">
            {video === "video" && videos.map((video) => {
                return (
                  
                <div class="col-3">
                  {" "}
                  <iframe
                    width="100%"
                    height="320"
                    src={video.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
        <div className="image__section ">
          <h5>Recent Images</h5>
          <div className="row d-flex">
            {/* {images.map((media) => {
              return (
                <div class="col-3">
                  <img src={media.image} className="media__images" />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Media);
