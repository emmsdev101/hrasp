import React, { useState } from "react";
import logo from "./../../images/logo/wvsulogotransparent.png";

import "./header.css";
import {
  Button,
  CloseButton,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
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
  faHamburger,
  faBars,
  faHouse,
  faCaretRight,
  faAngleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import useHeader from "./useHeader";
import { HeaderMenu } from "./HeaderMenu";

export default function Header({ logged }) {
  const { isActive, showHeader } = useHeader();
  const [showMenu, setShowMenu] = useState(false);

  const menuFooters = [
    {
      label: "Signin",
      action: () => {
        window.location.href = "/login";
      },
      variant:"outline-success"
    },
    {
      label:"Signup",
      action:()=>{
        window.location.href = "/signup"
      },
      variant:"success"
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
      label:"FAQS",
      action:()=>{
        window.location.href = "/faqs"
      }
    },
    {
      label:"About Us",
      action:()=>{
        window.location.href = "/aboutus"
      }
    }
  ];
  return showHeader ? (
    <div className="header">
      {showMenu ? <HeaderMenu handleClose={() => setShowMenu(false)}
        items = {menuItems} footers={menuFooters}
      /> : ""}

      <div className="brand">
        <img src={logo} width={40} className="Logo" alt="logo"></img>
        <h4 className="brandText d-block d-sm-none d-sm-block">AHP</h4>
        <h4 className="brandText d-none d-sm-block">Applicant Hiring Portal</h4>
      </div>
      <div className="navigation d-none d-md-block">
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
      <div className="accountNav d-none d-md-block">
        <Button variant="outline-secondary" size="sm" href="/login">
          Sign in
        </Button>
        &nbsp;
        <Button className="btn-primary" size="sm" href="/signup">
          Sign up
        </Button>
      </div>
      {!showMenu ? (
        <div className="d-md-none d-block">
          <Button variant="none" size="sm" onClick={() => setShowMenu(true)}>
            <FontAwesomeIcon icon={faBars} size={"xl"} />
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
}
