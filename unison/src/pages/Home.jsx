import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useState } from "react";
import { useSelector, connect } from "react-redux";
import NavBar from "../components/Navbar";

const Home = () => {
  const [userState, setUserState] = useState();

  const user = useSelector((state) => state.user.name);

  return (
    <>
        <NavBar />
      
      </>
  )
};


export default Home
