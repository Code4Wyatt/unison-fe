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

  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
  params: {s: 'daft_punk'},
  headers: {
    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
    'X-RapidAPI-Key': '5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a'
  }
};

axios.request(options).then(function (response) {
	console.log("data", response.data);
}).catch(function (error) {
	console.error(error);
});

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
