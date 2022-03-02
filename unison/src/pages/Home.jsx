import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useState } from "react";
import { useSelector, connect } from "react-redux";


function Home() {

  const [userState, setUserState] = useState()
  
  const user = useSelector(state => state.user.name)
  
  console.log(user)
  return (
    <>
  
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Home);