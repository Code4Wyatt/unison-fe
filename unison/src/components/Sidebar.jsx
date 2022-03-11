import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material";
import "../style/style.css";

function Sidebar() {
  const [profile, setProfile] = useState([]);
  const [token, setToken] = useState("");

    console.log(token);
     console.log(profile);

  const declareToken = () => {
    try {
      // Getting token to use when fetching profile data
      let token = JSON.parse(localStorage.getItem("auth"));
      const jwttoken = token.user.accessToken;
      // console.log(token);
      console.log(jwttoken);
      setToken(jwttoken);
    } catch (error) {}
  };

  const fetchProfile = async () => {
    try {
      let response = await fetch(`http://localhost:5000/users/currentUser/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        setProfile(data);
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
      declareToken();
  }, []);

  return (
    <div className="sidebar">
      <SidebarRow
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFjH2M4r3umhQ/profile-displayphoto-shrink_200_200/0/1629117547194?e=1642636800&v=beta&t=4u_D_k0dRgzK84Xu5-2S3DFN-zdierUdEeay9LJv4Wg"
        title={profile.currentUser}
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" class="sideBarButton" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
    </div>
  );
}

export default Sidebar;
