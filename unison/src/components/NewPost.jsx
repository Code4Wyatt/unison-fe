import { Avatar } from "@material-ui/core";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import React, { useState } from "react";
import "../style/style.css";

function NewPost() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setInput("");
        setImageUrl("");
  }

  return (
      <div className="messageSender">
         
          <div className="messageSender__top">
               <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFjH2M4r3umhQ/profile-displayphoto-shrink_200_200/0/1629117547194?e=1642636800&v=beta&t=4u_D_k0dRgzK84Xu5-2S3DFN-zdierUdEeay9LJv4Wg"/>
              <form>
                 
                  <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" type="text" placeholder={`What's on your mind, Paul?`}/>
                   <button onClick={handleSubmit} type="submit">Hidden Submit</button>
              </form>
          </div>
          
          <div className="messageSender__bottom">
              <div className="messageSender__option">
                  <VideocamIcon style={{ color: "red" }} />
                  <h3>Live Video</h3>
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