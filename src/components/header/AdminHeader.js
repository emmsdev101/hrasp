import React, { useState } from "react";
import logo from "./../../images/logo/wvsulogotransparent.png";
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
  faTimes,
  faUniversity,
  faHandPaper,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import useHeader from "./useHeader";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import './header.css'
import ChangePassword from "../../pages/Profile/ChangePassword";

export default function Header({ logged }) {
  const { showMenu, toggleMenu, closeMenu, isActive, confirmLogout, showHeader,changePassword,handleChangePassword } = useHeader("admin");

  return showHeader? (
    <div className="header">
      <ChangePassword show={changePassword} handleClose = {handleChangePassword} admin = {true}/>
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">AHP | HRMO</h4>
      </div>
      <div className="navigation">
          <ul className="menuLinks">
            <li className="navLink">
              <a
                href="/admin/dashboard"
                className={isActive("/admin/dashboard")}
              >
                <FontAwesomeIcon icon={faChartLine} className="navIcon" />
                <span className="navText">Dashboard</span>
              </a>
            </li>
            <li className="navLink">
              <a
                href="/admin/applications/applicants"
                className={isActive("/admin/applications")}
              >
                <FontAwesomeIcon icon={faUserTie} className="navIcon" />
                <span className="navText">Applications</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/admin/hiring" className={isActive("/admin/hiring")}>
                <FontAwesomeIcon icon={faHouseLaptop} className="navIcon" />
                <span className="navText">Hiring</span>
              </a>
            </li>
            {/* <li className="navLink">
              <a
                href="/admin/schedules"
                className={isActive("/admin/shedules")}
              >
                <FontAwesomeIcon icon={faCalendar} className="navIcon" />
                <span className="navText">Schedules</span>
              </a>
            </li> */}
            <li className="navLink">
              <a href="/admin/panels" className={isActive("/admin/panels")}>
                <FontAwesomeIcon icon={faUserGear} className="navIcon" />
                <span className="navText">Departments</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/admin/boards" className={isActive("/admin/boards")}>
                <FontAwesomeIcon icon={faUniversity} className="navIcon" />
                <span className="navText">Screening Comittee</span>
              </a>
            </li>
            {/* <li className="navLink">
              <a href="/admin/evaluations" className={isActive("/admin/evaluations")}>
                <FontAwesomeIcon icon={faBook} className="navIcon" />
                <span className="navText">Evaluation Sheets</span>
              </a>
            </li> */}
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
        // onBlur={closeMenu}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="accountIcon"
        ></FontAwesomeIcon>
      </button>
    </div>
      {showMenu?
      <div className="DropDown" tabIndex={1}>
      <div onClick={handleChangePassword}>
        <FontAwesomeIcon
          icon={faUserCog}
          className="icon"
        ></FontAwesomeIcon>
        Change Password
      </div>
      <div onClick={confirmLogout}
>
        <FontAwesomeIcon
          icon={faPowerOff}
          className="icon"
        ></FontAwesomeIcon>
        Logout
      </div>
      <div onClick={closeMenu}
>
        <FontAwesomeIcon
          icon={faTimes}
          className="icon"
        ></FontAwesomeIcon>
        Close
      </div>
    </div>:""}
    </div>
  ):'';
}
