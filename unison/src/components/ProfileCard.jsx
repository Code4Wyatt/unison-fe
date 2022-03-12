import React from 'react'
import { useSelector, connect, useDispatch } from "react-redux";
import "../style/style.css";

const ProfileCard = (profile) => {
    

     const user = useSelector((state) => state.currentUser.user);
  console.log(user);
  console.log(user[23].data.currentUser.profileImage);
  return (
    user !== null &&
    <>
      <section className="profile-card mt-3" /* onClick={(e) => moveDiv(e)} */>
        <div className="hero"></div>
        <div className="img-holder d-flex">
          <img
            className="profile-card-avatar rounded-circle"
            src={user[23].data.currentUser.profileImage}
            alt=" "
                  />
                  <h6 className="text-center mt-4 my-name">{user[26].data.currentUser.firstname}{" "}{user[26].data.currentUser.surname}</h6>
        </div>
        

        
        {/* <p className="text-center my-title border-bottom pb-3">{profile.title}</p> */}
        <div className="views d-flex flex-column px-3 border-bottom mt-3">
          <div className="views-one d-flex justify-content-between">
            <p>Who viewed your profile</p>
            <span>62</span>
          </div>
          <div className="views-two d-flex justify-content-between mt-2 mb-3">
            <p>Views of your post</p>
            <span>108</span>
          </div>
        </div>
        <p className="p-3 my-items">
          <i className="fas fa-bookmark mr-2"></i>
          My Items
        </p>
      </section>
    </>
  );
};

export default ProfileCard