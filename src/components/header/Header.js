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

export default function Header({ logged }) {
  const {isActive, showHeader } = useHeader();

  return showHeader? (
    <div className="header">
      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText">AHP</h4>
      </div>
      <div className="navigation">
          <ul className="menuLinks">
            <li className="navLink">
              <a href="/home" className={isActive("/home")}>
                <span className=" navText">Home</span>
              </a>
            </li>
            <li className="navLink">
              <a href="/faqs" className={isActive("/home/faqs")}>
                <span className=" navText">FAQs</span>
              </a>
            </li>
          </ul>
      </div>
      <div className="accountNav">
      <Button variant="none" size = "sm" href="/login">Sign in</Button>
      &nbsp;

        <Button className = "btn-primary" size = "sm" href="/signup">Sign up</Button>
        </div>
 
    </div>
  ):'';
}
