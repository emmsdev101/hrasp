import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Pagination, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";

import {
  faArrowLeft,
  faDownload,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import axios from "axios";

import { apiBaseUrl } from "../../config";

export default function ApplicationDetails({ close, applicantionId, panel }) {
  const [pds, setPds] = useState();
  const [tors, setTors] = useState([]);
  const [certs, setCerts] = useState([]);
  const [letter, setLetter] = useState(null);
  const [applicationData, setApplicationData] = useState({});

  const [LetterPages, setLetterPages] = useState(null);

  function letterLoaded({ numPages }) {
    setLetterPages(numPages);
  }

  useEffect(() => {
    const fetch = async () => {
      let url;
      if (panel)
        url = apiBaseUrl + "/panel/getApplicationDetails/" + applicantionId;
      else url = apiBaseUrl + "/admin/getApplicationDetails/" + applicantionId;
      const getApplicationDetails = await axios.get(url, {
        withCredentials: true,
      });
      const appdata = getApplicationDetails.data;
      console.log(appdata);
      setApplicationData(appdata);

      const lettersJson = await JSON.parse(appdata.letter);
      const pdsJson = await JSON.parse(appdata.pds);
      const torsJson = await JSON.parse(appdata.tor);
      const certsJson = await JSON.parse(appdata.certificates);

      setPds(pdsJson.pds[0]);
      setTors(torsJson.tors);
      setCerts(certsJson.certificates);
      setLetter(lettersJson.letter[0]);
    };
    fetch();
  }, []);
  return (
    <div className="m-1 p-3">
      <Row>
        <Col md={4} className="d-flex flex-direction-row align-items-center">
          <button className="btn bg-transparent" onClick={() => close(false)}>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
          </button>
          <h4 className="cardTtle p-0 m-0">Application Details</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <Button className="btn-success me-2" size="sm">
              Accept
            </Button>
          </div>
          <div>
            {" "}
            <Button variant="secondary" size="sm">
              Reject
            </Button>
          </div>
        </Col>
      </Row>
      <br></br>
      <div className="ps-4 pe-4 pb-4 d-flex justify-content-center">
        <Card className="p-5">
          <h6 className="mb-1">Personal Information:</h6>
          <hr></hr>
          <div className="d-flex flex-direction-row ">
            <div className="card p-3 me-3">
              <FontAwesomeIcon icon={faUserCircle} size="8x" />
            </div>
            <div>
              <div className="d-flex flex-direction-row">
                <div className="me-5">
                  <p className="m-0">Fullname</p>
                  <p className="m-0">Gender</p>
                  <p className="m-0">Age</p>
                </div>
                <div>
                  <h6>
                    {" "}
                    {applicationData.firstname +
                      " " +
                      applicationData.middlename +
                      " " +
                      applicationData.lastname}
                  </h6>
                  <h6> {applicationData.gender}</h6>
                  <h6> {applicationData.age} years old</h6>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="ps-4 pe-4 pb-4">
        <Row>
          <Col md={12} className="p-2 d-flex align-items-center flex-column">
            <div className="card bg-white">
              <h6 className="m-3">Application Letter:</h6>
              <hr className="m-0"></hr>
              {letter ? (
                <Document
                  className="imgs"
                  file={apiBaseUrl + "/" + letter}
                  onLoadSuccess={letterLoaded}
                  onLoadError={(err) => console.log(err)}
                >
                  <Page pageNumber={1} />
                </Document>
              ) : (
                ""
              )}
              <div className="p-2">
                <Button
                  href={apiBaseUrl + "/" + letter}
                  className="btn btn-light btn-sm"
                  download={apiBaseUrl + "/" + letter}
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="me-1"
                  ></FontAwesomeIcon>
                  Download
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-2 d-flex flex-column align-items-center">
            <div className="card">
              <h6 className="m-3">Personal Data Sheet:</h6>
              <hr className="m-0"></hr>
              {pds ? (
                <Document
                  className="imgs"
                  file={apiBaseUrl + "/" + pds}
                  onLoadSuccess={letterLoaded}
                  onLoadError={(err) => console.log(err)}
                >
                  <Page pageNumber={1} />
                </Document>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <div className="card">
            <h6 className="m-3">Transcript of Records:</h6>
            <hr className="m-0"></hr>
            <div className="d-flex flex-direction-row justify-content-center">
              {tors.map((path, idx) => (
                <div md={4} className="p-2" key={idx}>
                  {" "}
                  <img
                    src={apiBaseUrl + "/" + path}
                    width="500"
                    className="imgs"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </Row>
        <Row>
          <div className="card">
            <h6 className="m-3">Certificates of Trainings and Seminars:</h6>
            <hr className="m-0"></hr>
            <div className="d-flex flex-direction-row justify-content-center">
              {certs.map((path, idx) => (
                <div className="p-2" key={idx}>
                  {" "}
                  <img
                    src={apiBaseUrl + "/" + path}
                    width="500"
                    className="imgs"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}
