import { useEffect, useRef, useState } from "react";

const { Row, Col, Form } = require("react-bootstrap");

const Question = ({
  sectionTitle,
  pointLabel,
  sectionQuestions,
  index,
  ratings,
  setRatings,
  computeTotal,
  editeble,
  view
}) => {
  let total = 0.0;
  const totalRef = useRef();

  useEffect(()=>{
    totalRef.current.value = ratings[index].mainRate
  },[])
  const compute = () => {
    const rates = ratings[index].minRates;
    let sum = 0.0;
    for (let i = 0; i < rates.length; i++) {
      const rate = rates[i];
      sum += rate;
    }
    total = sum;

    totalRef.current.value = total;
    ratings[index].mainRate = total;
    computeTotal();
  };
  
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
          <SectionQuestion
            data={data}
            key={idx}
            index1={index}
            index2={idx}
            total={total}
            toTotal={compute}
            setRatings={setRatings}
             ratings={ratings}
             view = {view}
          />
        ))}
      </Col>
      <Col className="d-flex m-0 p-0">
        <p className="textLabel">{pointLabel}</p>
        <Form.Control
          type="number"
          className="rateInput"
          ref={totalRef}
          max={5}
          min={0}
          readOnly={!editeble}
          onChange={(e) => {
            const input = parseFloat(e.target.value);
            let newRates = ratings;
            newRates[index].mainRate = input;
            setRatings(newRates);

            computeTotal();
          }}
        ></Form.Control>
      </Col>
    </Row>
  );
};
const SectionQuestion = ({
  data,
  index1,
  index2,
  toTotal,
  setRatings,
  ratings,
  view
}) => {
  const [myRate, setMyRate] = useState(0);

  useEffect(()=>{
    setMyRate(ratings[index1].minRates[index2])
  },[])

  return (
    <div className="pb-3">
      <div className="d-flex justify-content-between w-100">
        <div className="ms-3 d-flex questionDiv">
          <p className="me-3 p-0 m-0">{data.title}</p>
          <p>{data.description}</p>
        </div>
        <div>
          <Form.Control
            className="rateInput w-100"
            value={myRate}
            step={0.25}
            min={0}
            max={data.maxPoint}
            readOnly = {view}
            type="number"
            onChange={(e) => {
              const input = parseFloat(e.target.value);
              let newRates = ratings;
              newRates[index1].minRates[index2] = input;
              setRatings(newRates);

              setMyRate(input);
              toTotal();
            }}
          />
        </div>
      </div>

      {data.lists.map((val, idx) => (
        <div className="ms-5 d-flex" key={idx}>
          <p className="me-3 m-0 p-0">{idx + 1}.</p>
          <p className="p-0 m-0">{val}</p>
        </div>
      ))}
    </div>
  );
};
export default Question;
