import React, { useState } from "react";
import "./header.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faUserCog,
  faUserCircle,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="d-flex Header">
      <h5 className="m-1 PageName">DashBoard</h5>
      <div className="Account d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faBell} className="StatusIcon"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faUserCircle}
          className="AccountPicture"
        ></FontAwesomeIcon>
        <p className="m-0">Admin</p>
        <button
          className="btn bg-transparent btn-sm AccountAction"
          onClick={toggleMenu}
          onBlur={closeMenu}
        >
          <FontAwesomeIcon
            icon={faAngleDown}
            className="AccountIcon"
          ></FontAwesomeIcon>
        </button>

        {showMenu ? (
          <div className="DropDown" tabIndex={1} onFocus={toggleMenu}>
            <div>
              {" "}
              <FontAwesomeIcon icon={faUserCog} className = "icon"></FontAwesomeIcon>
              Account Setting

            </div>
            <div>
            <FontAwesomeIcon icon={faPowerOff} className = "icon"></FontAwesomeIcon>
              Logout</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
