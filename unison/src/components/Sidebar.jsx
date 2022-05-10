import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import ProfileCard from "../components/ProfileCard"

import "../style/style.css";

function Sidebar(profile) {
  console.log(profile)
  const user = useSelector((state) => state.currentUser.user)
  console.log(user)
  // console.log(user[0].data.currentUser.profileImage)

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
