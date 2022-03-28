import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCurrentUserAction } from "../redux/actions/UserAction";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import NavBar from "../components/Navbar";

const Profile = (props) => {
  const [profile, setProfile] = useState([]);
  const jwtToken = useSelector((state) => state.authState.user.accessToken);
  const email = useSelector((state) => state.authState.user.email);
  

  // console.log(jwtToken);
  // console.log("email", email);
  console.log("profile", profile);

  const dispatch = useDispatch();

  useEffect(() => {
const fetchUser = async () => {
      const user = await fetch(
        `http://localhost:5000/users/${props.posts.userId}`
      );
      let userData = await user.json();
      // console.log("user: ", userData);
      setProfile(userData);
    };
    fetchUser();
  }, []);

  return (
    <>
      <NavBar props={props} />
          <div className="profile__body">
              <div className="profile__cover">
                  <img src="" alt="" href="/profile/${}" />
              </div>
        <Sidebar profile={profile} />
        <Feed />
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