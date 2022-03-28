import React, { useEffect, useState } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/style.css";

const ProfileInfo = (props) => {
  const userId = useParams().userId;

  //   const user = useSelector((state) => state.currentUser.user);
  //     console.log(props)
  //     console.log(props.profile.profileImage)
  //     console.log(props)

  //   console.log(userId);
  //   console.log(user);
  //   console.log(user[0].data.currentUser.profileImage);

  //     useEffect(() => {
  //       const fetchUserById = async (req, res) => {
  //     try {
  //       const userProfile = await fetch(`http://localhost:5000/users/${userId}`);
  //       const userProfileData = await userProfile.json();
  //       setProfile(userProfileData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     };
  //     fetchUserById();
  //   }, []);

  return (
    props !== null && (
      <>
        <section
          className="profile-info mt-3" /* onClick={(e) => moveDiv(e)} */
        >
          <div className="img-holder d-flex">
            <img
              className="profile-info-avatar"
              src={props.profile.profileImage}
              alt=" "
            />
          </div>
          <div className="profile-info-content">
            <h5 className="text-center mt-4">
              {props.profile.firstname} {props.profile.surname}
            </h5>
            { props.profile.position && <h6 className="text-center">
              {props.profile.position} - {props.profile.bands}
            </h6>}
            
            <p className="text-center">
              {props.profile.location}, {props.profile.country}
            </p>

            <h6 className="text-center">{props.profile.status}</h6>
          </div>

          <p className="text-center my-title border-bottom pb-3">
            {props.profile.title}
          </p>
          <div className="views d-flex flex-column px-3 mt-3">
            <div className="views-one d-flex justify-content-between">
              <p>Connections</p>
              <span>62</span>
            </div>
            {/* <div className="views-two d-flex justify-content-between mt-2 mb-3">
              <p>Views of your post</p>
              <span>108</span>
            </div> */}
          </div>
          <p className="p-3 my-items">
            <i className="fas fa-bookmark mr-2"></i>
            Connect with {props.profile.firstname}
          </p>
        </section>
      </>
    )
  );
};

export default ProfileInfo;
