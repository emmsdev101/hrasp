import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFile,
    faUser,
    faVials,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons";
import useTabNavigation from './useTabNavigation';
export default function TabNavigation({tab,gotoTab,committee,admin}) {
  return (
    <div className="tabContainer">
          {admin?(
            <a>
            <div className="tabLink" id={tab === "registration"?"tabActive":""}
            onClick = {()=>gotoTab("registration")}>
              <FontAwesomeIcon
                icon={faUser}
                className="tabIcon"
              ></FontAwesomeIcon>
              Registration
            </div>
          </a>
          ):""}
            <a>
              <div className="tabLink" id={tab === "applicants"?"tabActive":""}
              onClick = {()=>gotoTab("applicants")}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="tabIcon"
                ></FontAwesomeIcon>
                Applicants
              </div>
            </a>
            {!committee?(<a>
              <div className="tabLink" id={tab === "for-acceptance"?"tabActive":""}
              onClick = {()=>gotoTab("for-acceptance")}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="tabIcon"
                ></FontAwesomeIcon>
                For Acceptance
              </div>
            </a>):""}
            <a>
              <div className="tabLink" id={tab === "for-interview"?"tabActive":""}
              onClick = {()=>gotoTab("for-interview")} >
                <FontAwesomeIcon icon={faVideo} className="tabIcon" />
                For Interview
              </div>
            </a>
            {!admin?(
              <a>
              <div className="tabLink" id={tab === "evaluation"?"tabActive":""}
              onClick = {()=>gotoTab("evaluation")}>
                {" "}
                <FontAwesomeIcon icon={faVials} className="tabIcon" />{" "}
                Evaluation
              </div>
            </a>
            ):""}
            <a>
              <div className="tabLink" id={tab === "evaluation-result"?"tabActive":""}
              onClick = {()=>gotoTab("evaluation-result")}>
                {" "}
                <FontAwesomeIcon icon={faVials} className="tabIcon" />{" "}
                Evaluation Result
              </div>
            </a>
            {/* <a>
              <div className="tabLink" id={tab === "files"?"tabActive":""}
              onClick = {()=>gotoTab("files")}>
                {" "}
                <FontAwesomeIcon icon={faFile} className="tabIcon" /> Files
              </div>
            </a> */}
          </div>
  )
}
