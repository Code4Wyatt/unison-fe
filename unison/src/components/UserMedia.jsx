import React, { useEffect, useState } from "react";
import "../style/style.css";

const UserMedia = (props) => {
  

  console.log(props);
  console.log("Media props: ", props.media);

    const userId = props.profile._id;
    const media = props.media;
    
  return (
    <div className="user__media__section d-flex">
          {media.map((media) => {
          return <img className="media__image" src={media.image} />
      })}  
    </div>
  );
};

export default UserMedia;
