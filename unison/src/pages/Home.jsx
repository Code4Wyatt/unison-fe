import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCurrentUserAction } from "../redux/actions/UserAction"
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import NavBar from "../components/Navbar";

const Home = (props) => {
  const [profile, setProfile] = useState([]);
  const jwtToken = useSelector((state) => state.authState.user.accessToken);
   const email = useSelector((state) => state.authState.user.email);
  console.log("email", email);
  
  console.log(jwtToken);
  
  console.log(profile);

  const dispatch = useDispatch();

  const fetchProfile = async () => {
    // let token = JSON.parse(localStorage.getItem("auth"));
    // const jwttoken = token.user.accessToken;
    try {
      let response = await fetch(`http://localhost:5000/users/currentUser/${email}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log(data)
        setProfile(data);
        dispatch(addCurrentUserAction({data}))
        console.log(profile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <NavBar props={props} />
      <div className="home__body">
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

export default connect(mapStateToProps)(Home);
