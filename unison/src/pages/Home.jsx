import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useState } from "react";
import { useSelector, connect } from "react-redux";
import Navbar from "../components/Navbar";

const Home = () => {
  const [userState, setUserState] = useState();

  const user = useSelector((state) => state.user.name);

  console.log(user);
  return (
    <div className="homeContainer">
      <Navbar />
      <div>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Home);
