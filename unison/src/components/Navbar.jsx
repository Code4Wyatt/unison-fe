import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import unisonLogo from "../media/UnisonLogoPNG.png";
import vacancyImage from "../media/band.png";
import mediaImage from "../media/media.png";
import eventsImage from "../media/events.png";
import newsImage from "../media/news.png";
import profilePic from "../media/profilepic.jpg";
import notificationIcon from "../media/notification.png";
import messagesIcon from "../media/messages.png";
import connectionsIcon from "../media/connections.png";

import "../style/style.css";

const NavBar = () => {
  return (
    <div className="container navbar">
      <div className="row nav__row">
        <div className="col nav__logo__section">
          <img src={unisonLogo} alt="Unison Logo" className="logo" />
        </div>
        <div className="col main__links__section d-flex">
          <div className="main__links">
            <a href="">
              <img
                src={vacancyImage}
                alt="Vacancies"
                className="vacancy__logo"
              />
            </a>
          </div>
          <div className="main__links">
            <a href="">
              <img src={mediaImage} alt="Vacancies" className="vacancy__logo" />
            </a>
          </div>
          <div className="main__links">
            <a href="">
              <img
                src={eventsImage}
                alt="Vacancies"
                className="vacancy__logo"
              />
            </a>
          </div>
          <div className="main__links">
            <a href="">
              <img src={newsImage} alt="Vacancies" className="vacancy__logo" />
            </a>
          </div> 
        </div>
        <div className="col user__section__nav d-flex">
          <div className="user__links">
            <a href="">
              <img
                src={connectionsIcon}
                alt="Vacancies"
                className="vacancy__logo"
              />
            </a>
          </div>
          <div className="user__links">
            <a href="">
              <img
                src={messagesIcon}
                alt="Vacancies"
                className="vacancy__logo"
              />
            </a>
          </div>
          <div className="user__links">
            <a href="">
              <img
                src={notificationIcon}
                alt="Vacancies"
                className="vacancy__logo"
              />
            </a>
          </div>
          <div className="">
            <a href="/profile">
              <img
                src={profilePic}
                alt="Vacancies"
                className="user__image__nav"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
