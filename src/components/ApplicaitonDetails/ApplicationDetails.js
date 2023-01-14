import React, { useEffect, useState } from "react";
import { Button, Col, Form, Pagination, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import axios from "axios";

import { apiBaseUrl } from "../../config";

export default function ApplicationDetails({ close, applicantionId }) {
  const [pds, setPds] = useState();
  const [tors, setTors] = useState([]);
  const [certs, setCerts] = useState([]);
  const [letter, setLetter] = useState(null);
  const [LetterPages, setLetterPages] = useState(null)

  function letterLoaded({ numPages }) {
    setLetterPages(numPages);
  }

  useEffect(() => {
    const fetch = async () => {
      const getApplicationDetails = await axios.get(
        apiBaseUrl + "/admin/getApplicationDetails/" + applicantionId,
        {
          withCredentials: true,
        }
      );
      const appdata = getApplicationDetails.data;

      const lettersJson = JSON.parse(appdata.letter);
      const pdsJson = JSON.parse(appdata.pds);
      const torsJson = JSON.parse(appdata.tor);
      const certsJson = JSON.parse(appdata.certificates);

      console.log(lettersJson);
      setPds(pdsJson.pds[0]);
      setTors(torsJson.tors);
      setCerts(certsJson.certificates);
      setLetter(lettersJson.letter[0]);
    };
    fetch();
  }, []);
  return (
    <div className="applicantsBox m-1 p-3">
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
      <div className="ps-4 pe-4 pb-4">
        <h6 className="mb-3">Application Letter:</h6>
        <hr></hr>
        <Row>
            <Col md={12} className="p-2 d-flex align-items-center flex-column">
              <div className="documentContainer" >
                {letter?<Document
                  className="imgs"
                  file={apiBaseUrl + "/" + letter}
                  onLoadSuccess={letterLoaded}
                  onLoadError={(err) => console.log(err)}
                >
                  <Page pageNumber={1} />
                </Document>:""}
              </div>
              <div className="p-2">
                <Button href={apiBaseUrl + "/" + letter} className = "btn btn-primary" download={apiBaseUrl + "/" + letter}>Download</Button>
              </div>
            </Col>
        </Row>
        <h6 className="mb-3">Personal Data Sheet:</h6>
        <hr></hr>
        <Row>
          <Col md = {12} className = "p-2 d-flex flex-column align-items-center"  >
          <div className="documentContainer">
                {pds?<Document
                  className="imgs"
                  file={apiBaseUrl + "/" + pds}
                  onLoadSuccess={letterLoaded}
                  onLoadError={(err) => console.log(err)}
                >
                  <Page pageNumber={1} />
                </Document>:""}
              </div>
          </Col>
        </Row>
        <h6 className="mb-3 mt-3">Transcript of Records:</h6>
        <hr></hr>
        <Row>
          {tors.map((path, idx) => (
            <Col md={4} className="p-2">
              {" "}
              <img src={apiBaseUrl + "/" + path} className="imgs" alt="" />
            </Col>
          ))}
        </Row>

        <h6 className="mb-3 mt-3">Seminar/Training Certificates:</h6>
        <hr />
        <Row>
          {certs.map((path, idx) => (
            <Col md={4} className="p-2">
              {" "}
              <img src={apiBaseUrl + "/" + path} className="imgs" alt="" />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
