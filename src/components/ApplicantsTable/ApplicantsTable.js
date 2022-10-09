import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function ApplicantsTable({ status, view, accept, deny }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const requestApplications = async () => {
      const request = await axios(apiBaseUrl + "/admin/getApplicants", {
        withCredentials: true,
      });
      try {
        const reqData = request.data;
        setApplications(reqData);
      } catch (err) {
        console.log(err);
      }
    };
    requestApplications();
  }, []);
  const TableRow = ({ data }) => {
    return status === "incoming-interview" ? (
        <tr>
      <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
      <td>{data.title}</td>
      <td>Today 9:30 am</td>
      </tr>
    ) : (
      <tr key={data.account_id}>
        <td>{data.account_id}</td>
        <td>{data.firstname}</td>
        <td>{data.middlename}</td>
        <td>{data.lastname}</td>
        <td>{data.title}</td>
        {status === "all" ? (
          <td>{data.status}</td>
        ) : status === "pending" ? (
          <React.Fragment>
            <td>
              <Button size="sm" className="me-2" variant="success">
                Accept
              </Button>
              <Button size="sm" variant="warning">
                Reject
              </Button>
            </td>
            <td>
              <Button size="sm" className="me-2" onClick={() => view(true)}>
                View
              </Button>
            </td>
          </React.Fragment>
        ) : status === "for-interview" ? (
          <td>
            <Button size="sm" className="me-2" variant="success">
              <FontAwesomeIcon icon={faCalendarPlus}/>
            </Button>
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  };
  return (
    <Table hover responsive>
      <thead>
        {status === "incoming-interview" ? (
          <tr>
            <th>Fullname</th>
            <th>Applying for</th>
            <th>Interview On</th>
          </tr>
        ) : (
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Lastname</th>
            <th>Applying for</th>
            <th>{status === "all" ? "Status" : "Action"}</th>
            {status === "pending" ? <th>Details</th> : ""}
          </tr>
        )}
      </thead>
      <tbody>
        {applications.map((data, index) => (
          <TableRow data={data} key={data.account_id} />
        ))}
      </tbody>
    </Table>
  );
}
