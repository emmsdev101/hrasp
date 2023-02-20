import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function EvaluationTable({ data, panel, details, action, tableRef }) {
  
  return (
    <Table hover responsive ref={tableRef}>
      <thead>
        {details ? (
          <tr>
            <th>Evaluator</th>
            <th>Recommendationn</th>
            <th>Remarks</th>
            <th>Score</th>
          </tr>
        ) : (
          <tr>
            <th>Rank</th>
            <th>Applicant Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Department Type</th>
            {panel ? <th>Recommendationn</th> : ""}
            {panel ? <th>Remarks</th> : ""}
            <th>Score</th>
          </tr>
        )}
      </thead>
      <tbody>
        {details
          ? data.map((values, idx) => (
              <DetailsItem data={values} key = {idx}/>
            ))
          : data.map((values, idx) => (
              <tr key={idx} onClick={() => action(values)}>
                <th>{idx + 1}</th>
                <td>{values.applicant_name}</td>
                <td>{values.title}</td>
                <td>{values.department}</td>
                <td>{values.departmentType}</td>
                {panel ? <td>{values.recommendation}</td> : ""}
                {panel ? <td>{values.remarks}</td> : ""}
                <td>{values.total}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
}
const DetailsItem = ({data}) =>{
    const [evaluator, setEvaluator] = useState(null) 

    useEffect(()=>{
        fetchCommitteeDetails()
    },[])
    const fetchCommitteeDetails = async () => {
        const ispanel = data.type === "panel";
        console.log(ispanel)
    
        let url = apiBaseUrl + "/admin/getCommitteeDetails/" + data.evaluator;
    
        if (ispanel) {
          url = apiBaseUrl + "/admin/getPanelDetails/" + data.evaluator;
        }
        const request = await axios.get(url, { withCredentials: true });
    
        const requestData = request.data
        console.log(data)
        setEvaluator(requestData)
        
      };
      return (
        <tr onClick={() => window.location.href = "../view-evaluation/"+data.id}>
                <td>{evaluator?.fullname}</td>
                <td>{data.recommendation}</td>
                <td>{data.remarks}</td>
                <td>{data.total}</td>
              </tr>
      )
}