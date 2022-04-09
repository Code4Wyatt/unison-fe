import { useState, useEffect, useRef } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCurrentUserAction } from "../redux/actions/UserAction";
import Sidebar from "../components/Sidebar";
import UserFeed from "../components/UserFeed";
import Rightbar from "../components/Rightbar";
import NavBar from "../components/Navbar";
import ProfileInfo from "../components/ProfileInfo";
import UserMedia from "../components/UserMedia";
import { motion } from "framer-motion";
import "../style/style.css";

const Profile = (props) => {
  const [profile, setProfile] = useState([]);
  const [media, setMedia] = useState([]);
  const [posts, setPosts] = useState([]);
  const userId = useParams().userId;
  const jwtToken = useSelector((state) => state.authState.user.accessToken);
  const email = useSelector((state) => state.authState.user.email);
  const coverImage = profile.coverImage;
  console.log(props);
  console.log(userId);
  // console.log(jwtToken);
  // console.log("email", email);
  console.log("profile", profile);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(`http://localhost:5000/users/${userId}`);
      let userData = await user.json();
      console.log("user: ", userData);
      setProfile(userData);
    };
    fetchUser();
    const userMedia = async () => {
      try {
        const userMediaPosts = await fetch(
          `http://localhost:5000/timeline/${userId}/media`
        );
        const mediaData = await userMediaPosts.json();
        setMedia(mediaData);
        console.log(mediaData);
      } catch (error) {
        console.log(error.message);
      }
    };
    userMedia();
  }, []);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const userPosts = await fetch(
        `http://localhost:5000/timeline/${userId}/posts`
      );
      const postData = await userPosts.json();
      setPosts(postData);
    };
    fetchUserPosts();
  }, []);

  return (
    <>
      <NavBar props={props} />
      <div className="profile__body">
        <div className="profile__cover">
          <img
            className="cover__image"
            src={coverImage}
            alt=""
            href="/profile/${}"
          />
        </div>
        <div className="profile__main d-flex">
          <ProfileInfo id="profileCard" profile={profile} />
          <motion.div className="carousel">
            <motion.div drag="x" className="inner-carousel d-flex">
              {media.map((media) => {
                return (
                  <motion.div><img src={media.image} className="media__image" /></motion.div>
                )
              })}
            </motion.div>
          </motion.div>
   
          
          
        </div>
        <div className="profile__feed">
          <UserFeed posts={posts} />
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

export default connect(mapStateToProps)(Profile);
