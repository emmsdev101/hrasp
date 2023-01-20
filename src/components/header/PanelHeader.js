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
export default function PanelHeader({profileDetails}) {
    const { showMenu, toggleMenu, closeMenu, isActive, confirmLogout } = useHeader("panel");

  return (
    <div className="header">
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">HRASP | {profileDetails.department}</h4>

      </div>
      <div className="navigation">
          <ul className="menuLinks">
            <li className="navLink">
              <a
                href="/panel/"
                className={isActive("/panel/")}
              >
                <FontAwesomeIcon icon={faChartLine} className="navIcon" />
                <span className=" navText">Dashboard</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href="/panel/applicants"
                className={isActive("/panel/applications")}
              >
                <FontAwesomeIcon icon={faUserTie} className="navIcon" />
                <span className=" navText">Applicants</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href="/panel/hiring"
                className={isActive("/panel/hiring")}
              >
                <FontAwesomeIcon icon={faHouseLaptop} className="navIcon" />
                <span className=" navText">Hiring</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/panel/notification" className={isActive("/panel/notification")}>
                <FontAwesomeIcon icon={faBell} className="navIcon" />
                <span className=" navText">Notification</span>
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
  )
}
