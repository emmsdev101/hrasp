import React, { useState } from 'react'
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
  faUser,
  faHome,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./../../images/logo/wvsulogotransparent.png";

import useHeader from './useHeader';
import { HeaderMenu } from './HeaderMenu';
import './header.css'
export default function ApplicantHeader() {
  const { showMenu, toggleMenu, closeMenu, isActive,logout,confirmLogout } = useHeader();
  
  const [showNav, setShowNav] = useState(false)

  const menuFooters = [
   
    {
      label:"Logout",
      action:()=>{
        window.location.href = "/login"
      },
      variant:"dark"
    }
  ];
  const menuItems = [
    {
      label: "Home",
      action: () => {
        window.location.href = "/home";
      },
    },
    {
      label:"Profile",
      action:()=>{
        window.location.href = "/faqs"
      }
    }
  ];

  return (
    <div className="header d-flex justify-content-between">
      {showNav?(
        <HeaderMenu items={menuItems} handleClose = {()=>setShowNav(false)} footers = {menuFooters}/>
      ):""}
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">AHP</h4>
      </div>
      <div className="form-group searchbox">
            <input placeholder="Search" type="text" id="searchinput"></input>
          </div>
      <div className="navigation d-none d-md-block" >
          <ul className="menuLinks">
            <li className="navLink">
              <a
                href="/applicant"
                className={isActive("/applicant")}
              >
                <FontAwesomeIcon icon={faHome} className="navIcon" />
                <span className=" navText">Home</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/applicant/hiring" className={isActive("/admin/hiring")}>
                <FontAwesomeIcon icon={faUser} className="navIcon" />
                <span className=" navText">Profile</span>
              </a>
            </li>

          </ul>

      </div>

    {!showNav?<Button variant='none' className='d-md-none d-block' onClick={()=>setShowNav(true)}><FontAwesomeIcon icon={faBars} size = "xl"/></Button>:""}

    <div className="accountNav flex-column d-none d-md-block" >
      <FontAwesomeIcon
        icon={faUserCircle}
        className="AccountPicture"
      ></FontAwesomeIcon>
      <p className="m-0 bg-blue">Applicant</p>
      <button
        className="btn bg-transparent btn-sm accountAction"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="accountIcon"
        ></FontAwesomeIcon>
      </button>
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
