import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ProfileCard from "../components/ProfileCard"
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material";
import "../style/style.css";

function Sidebar(profile) {
  console.log(profile)
  const user = useSelector((state) => state.currentUser.user)
  console.log(user)
  console.log(user[0].data.currentUser.profileImage)

  return (
    <div className="sidebar">
      <ProfileCard profile={profile} />
      {/* <SidebarRow
        src={user[0].currentUser.profileImage}
        title={user[0].currentUser.firstname}
      /> */}
{/* 
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" class="sideBarButton" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" /> */}
    </div>
  );
}

export default Sidebar;
