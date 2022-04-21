import React, { useState } from "react";

import "./sidepanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChevronCircleRight,
  faHouseLaptop,
  faUserGear,
  faUsers,
  faUserTie,
  faVials,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../../images/logo/wvsulogotransparent.png";
import { Link } from "react-router-dom";
export default function Sidepanel() {
  const [toggleMenu, setToggleMenu] = useState("show");
  const toggleSideBar = () => {
    if (toggleMenu === "show") setToggleMenu("close");
    else setToggleMenu("show");
  };
  return (
    <nav className={"bg-light SidePanel " + toggleMenu}>
      <div className="BrandName">
        <div className="LogoWrapper">
          <img src={logo} width={50} className="Logo" alt="logo"></img>
        </div>
        <h3 className="BrandText">HRASP</h3>
        <div onClick={toggleSideBar} className="text-light toggle">
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="ToggleIcon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="SideNavs">
        <ul className="Menu-Links">
          <li className="NavLink">
            <a href="/dashboard" className="active">
              <FontAwesomeIcon icon={faChartLine} className="NavIcon" />
              <span className="text nav-text">Dashboard</span>
            </a>
          </li>

          <li className="NavLink">
            <a href="/applications">
              <FontAwesomeIcon icon={faUserTie} className="NavIcon" />
              <span className="text nav-text">Applications</span>
            </a>
          </li>
          <li className="NavLink">
            <a href="#">
              <FontAwesomeIcon icon={faVideo} className="NavIcon" />
              <span className="text nav-text">Interview</span>
            </a>
          </li>
          <li className="NavLink">
            <a href="#">
              <FontAwesomeIcon icon={faHouseLaptop} className="NavIcon" />
              <span className="text nav-text">Hiring</span>
            </a>
          </li>
          <li className="NavLink">
            <a href="#">
              <FontAwesomeIcon icon={faVials} className="NavIcon" />
              <span className="text nav-text">Evaluation</span>
            </a>
          </li>
          <li className="NavLink">
            <a href="#">
              <FontAwesomeIcon icon={faUserGear} className="NavIcon" />
              <span className="text nav-text">Account Management</span>
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
