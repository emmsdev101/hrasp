import { useEffect } from "react";

const { Row, Col, Form } = require("react-bootstrap");

const Question = ({ sectionTitle, pointLabel, sectionQuestions, index, ratings , setRatings}) => {

    return (
      <Row className="w-100 p-0 m-0 pb-3 questionBox">
        <Col md={10} className="">
          <Row className="w-100 p-0">
            <Col className="p-0 m-0">
              <h6>{sectionTitle} </h6>
            </Col>
            <Col md={9} className="p-0 m-0">
              <div className="dash"></div>
            </Col>
          </Row>
          {sectionQuestions.map((data, idx) => (
            <div className="pb-3" key={idx}>
              <div className="d-flex justify-content-between w-100">
                <div className="ms-3 d-flex questionDiv">
                  <p className="me-3 p-0 m-0">{data.title}</p>
                  <p>{data.description}</p>
                </div>
                <div>
                  <Form.Control className="rateInput" type="number"  onChange={(e)=>{
                    let newRates = ratings
                    newRates[index].minRates[idx] = e.target.value
                    setRatings(newRates)
                  }} />
                </div>
              </div>

              {data.lists.map((val, idx) => (
                <div className="ms-5 d-flex" key={idx}>
                  <p className="me-3 m-0 p-0">{idx + 1}.</p>
                  <p className="p-0 m-0">{val}</p>
                </div>
              ))}
            </div>
          ))}
        </Col>
        <Col className="d-flex m-0 p-0">
          <p className="textLabel">{pointLabel}</p>
          <Form.Control type="number" onChange = {(e)=>{
            let newRates = ratings
            newRates[index].mainRate = e.target.value
            setRatings(newRates)
          }} className="rateInput" />
        </Col>
      </Row>
    );
  };

  export default Question