import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function ApplicantsTable({ status, view, setSchedule, deny, handleShow }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const requestApplications = async () => {
      const request = await axios(apiBaseUrl + "/admin/getApplicants/"+status, {
        withCredentials: true,
      });
      try {
        const reqData = request.data;
        console.log(reqData)
        setApplications(reqData);
      } catch (err) {
        console.log(err);
      }
    };
    requestApplications();
  }, []);
  const TableRow = ({ data }) => {

    const accept = async(mode) => {
      console.log(data)
      const request = await axios.post(apiBaseUrl + "/admin/acceptApplication",{status:mode, id:data.application_id}, {
        withCredentials: true,
      });
      if(request.data)window.location.reload()
      else alert("Error Occured")

    }
    return status === "to-interview" ? (
   
        <tr>
      {console.log(data)}
      <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
      <td>{data.title}</td>
      <td>{data.date + ":"+data.time}</td>
      </tr>
    ) : (
      <tr key={data.account_id}>
        <td>{data.account_id}</td>
        <td>{data.firstname}</td>
        <td>{data.middlename}</td>
        <td>{data.lastname}</td>
        <td>{data.title}</td>
        {status === "all" ? (
          <React.Fragment>
            <td>{data.status}</td>
            <td>
            <Button size="sm" className="me-2" onClick={()=>view(data.application_id)}>
                View
              </Button>
            </td>
            </React.Fragment>
        ) : status === "pending" ? (
          <React.Fragment>
            <td>
              <Button size="sm" className="me-2" variant="success" onClick={()=>accept("prequalification")}>
                Accept
              </Button>
              <Button size="sm" variant="warning">
                Reject
              </Button>
            </td>
            <td>
              <Button size="sm" className="me-2" onClick={()=>view(data.application_id)}>
                View
              </Button>
            </td>
          </React.Fragment>
        ) : status === "for-interview" ? (
          <td>
            <Button size="sm" className="me-2" variant="success" onClick = {()=>setSchedule(data)}>
              <FontAwesomeIcon icon={faCalendarPlus} />
            </Button>
          </td>
        ) : status === "prequalification"? (
          <td>
          <Button size="sm" className="me-2" variant="success" onClick={()=>accept("for-interview")}>
            Passed
          </Button>
          <Button size="sm" variant="warning">
            Failed
          </Button>
          </td>
        ):""}
      </tr>
    );
  };
  return (
    <Table hover responsive>
      <thead>
        {status === "to-interview" ? (
          <tr>
            <th>Fullname</th>
            <th>Applying for</th>
            <th>Interview Date</th>
          </tr>
        ) : (
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Lastname</th>
            <th>Applying for</th>
            <th>{status === "all" ? "Status" : "Action"}</th>
            {status === "pending" ? <th>Details</th> : status==="all"?<th>Action</th>:""}
            
          </tr>
        )}
      </thead>
      <tbody>
        {applications ? applications.map((data, index) => (
          <TableRow data={data} key={data.account_id} />
        )):''}
      </tbody>
    </Table>
  );
}
