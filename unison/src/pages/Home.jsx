import { useState } from "react";
import { useSelector, connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import NavBar from "../components/Navbar";

const Home = () => {
  const [userState, setUserState] = useState();

  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
     
      <NavBar />
      <div className="home__body">
        <Sidebar />
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
