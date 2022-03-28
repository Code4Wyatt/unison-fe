import React, { useEffect, useState } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/style.css";

const ProfileInfo = () => {
  const [profile, setProfile] = useState();
  const userId = useParams().userId;

  const user = useSelector((state) => state.currentUser.user);

  console.log(userId);
  console.log(user);
  console.log(user[0].data.currentUser.profileImage);

  const fetchUserById = async (req, res) => {
    try {
      const userProfile = await fetch(`http://localhost:5000/users/${userId}`);
      const userProfileData = await userProfile.json();
      setProfile(userProfileData);
    } catch (error) {
      console.log(error);
    }
    };
    
    console.log(profile);

  useEffect(() => {
    fetchUserById();
  }, []);
  return (
    profile !== null && (
      <>
        <section
          className="profile-info mt-3" /* onClick={(e) => moveDiv(e)} */
        >
          <div className="img-holder d-flex">
            <img
              className="profile-info-avatar"
              src={profile.profileImage}
              alt=" "
            />
          </div>
          <div className="profile-info-content">
            <h6 className="text-center mt-4">
              {profile.firstname}{" "}
              {profile.surname}
            </h6>
            <h5></h5>
          </div>

          {/* <p className="text-center my-title border-bottom pb-3">{profile.title}</p> */}
          <div className="views d-flex flex-column px-3 mt-3">
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
    )
  );
};

export default ProfileInfo;
