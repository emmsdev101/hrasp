import React from 'react'
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

import logo from "./../../images/logo/wvsulogotransparent.png";

import useHeader from './useHeader';
export default function ApplicantHeader() {
  const { showMenu, toggleMenu, closeMenu, isActive } = useHeader();

  return (
    <div className="header">
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">HRASP</h4>
      </div>
      <div className="navigation">
          <ul className="menuLinks">
            <li className="navLink">
              <a
                href="/admin/dashboard"
                className={isActive("/admin/dashboard")}
              >
                <FontAwesomeIcon icon={faChartLine} className="navIcon" />
                <span className=" navText">Dashboard</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href="/admin/applications"
                className={isActive("/admin/applications")}
              >
                <FontAwesomeIcon icon={faUserTie} className="navIcon" />
                <span className=" navText">Applications</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/admin/hiring" className={isActive("/admin/hiring")}>
                <FontAwesomeIcon icon={faHouseLaptop} className="navIcon" />
                <span className=" navText">Hiring</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href="/admin/schedules"
                className={isActive("/admin/shedules")}
              >
                <FontAwesomeIcon icon={faCalendar} className="navIcon" />
                <span className=" navText">Schedules</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/admin/accounts" className={isActive("/admin/accounts")}>
                <FontAwesomeIcon icon={faUserGear} className="navIcon" />
                <span className=" navText">Panel</span>
              </a>
            </li>
          </ul>

      </div>

    <div className="accountNav">
      <FontAwesomeIcon
        icon={faUserCircle}
        className="AccountPicture"
      ></FontAwesomeIcon>
      <p className="m-0">Admin</p>
      <button
        className="btn bg-transparent btn-sm accountAction"
        onClick={toggleMenu}
        onBlur={closeMenu}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="accountIcon"
        ></FontAwesomeIcon>
      </button>
    </div>
      {showMenu?
      <div className="DropDown" tabIndex={1} onFocus={toggleMenu}>
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faUserCog}
          className="icon"
        ></FontAwesomeIcon>
        Account Setting
      </div>
      <div>
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
