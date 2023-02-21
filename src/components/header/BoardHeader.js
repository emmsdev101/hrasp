import React, { useState } from "react";
import logo from "./../../images/logo/wvsulogotransparent.png";

import "./header.css";
import { Button, CloseButton, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faUserCog,
  faUserCircle,
  faPowerOff,
  faChartLine,
  faChevronCircleRight,
  faHouseLaptop,
  faUserGear,
  faUsers,
  faUserTie,
  faVials,
  faVideo,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import useHeader from "./useHeader";
export default function BoardHeader({profileDetails, page}) {
    const { showMenu, toggleMenu, closeMenu, isActive, confirmLogout,showHeader } = useHeader("panel");

  return showHeader? (
    <div className="header">
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">HRASP | HRMPSB - {profileDetails.position}</h4>

      </div>
      <div className="navigation">
          <ul className="menuLinks">
            <li className="navLink">
              <a
                href={"/"+page+"/"}
                className={isActive("/"+page+"/")}
              >
                <FontAwesomeIcon icon={faChartLine} className="navIcon" />
                <span className=" navText">Dashboard</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href={"/"+page+"/applicants/applicants"}
                className={isActive("/"+page+"/applications/applicants")}
              >
                <FontAwesomeIcon icon={faUserTie} className="navIcon" />
                <span className=" navText">Applications</span>
              </a>
            </li>
          </ul>

      </div>

    <div className="accountNav">
    <p className="m-0 me-1">{profileDetails.firstname + " "+profileDetails.middlename +" "+ profileDetails.lastname}</p>
  
      <FontAwesomeIcon
        icon={faUserCircle}
        className="AccountPicture"
        onClick={toggleMenu}
      ></FontAwesomeIcon>
     
    </div>
      {showMenu?
      <div className="DropDown" tabIndex={1}>
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faUserCog}
          className="icon"
        ></FontAwesomeIcon>
        Account Setting
      </div>
      <div onClick={confirmLogout}>
        <FontAwesomeIcon
          icon={faPowerOff}
          className="icon"
        ></FontAwesomeIcon>
        Logout
      </div>
    </div>:""}
    </div>
  ):""
}
