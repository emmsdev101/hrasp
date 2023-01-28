import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarPlus,
  faCalendarTimes,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function ApplicantsTable({
  status,
  view,
  setSchedule,
  deny,
  handleShow,
  panel,
  resetSchedule,
  head,
  committee,
}) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    requestApplications();
  }, []);

  const requestApplications = async () => {
    let request;
    let requestUrl = "";

    if (head)
      requestUrl =
        apiBaseUrl + "/panel/getApplicantsForCommitteeHead/" + status;
    else if (committee)
      requestUrl =
        apiBaseUrl + "/panel/getApplicantsForCommitteeMember/" + status;
    else if (panel) requestUrl = apiBaseUrl + "/panel/getApplicants/" + status;
    else requestUrl = apiBaseUrl + "/admin/getApplicants/" + status;

    console.log("Request Url",requestUrl)
    request = await axios(requestUrl, { withCredentials: true });

    try {
      const reqData = request.data;
      setApplications(reqData);
    } catch (err) {
      console.log(err);
    }
  };
  const accept = async (data, mode) => {
    let request;
    if (panel)
      request = await axios.post(
        apiBaseUrl + "/panel/acceptApplication",
        { status: mode, id: data.application_id },
        {
          withCredentials: true,
        }
      );
    else
      request = await axios.post(
        apiBaseUrl + "/admin/acceptApplication",
        { status: mode, id: data.application_id },
        {
          withCredentials: true,
        }
      );
    if (request.data) requestApplications();
    else alert("Error Occured");
  };
  const TableRow = ({ data }) => {
    let dateDiff;
    if (status === "to-interview") {
      const dateNow = new Date();
      const scheduleDate = new Date(data.date + " " + data.time);

      dateDiff = scheduleDate.getTime() - dateNow.getTime();
    }
    return status === "to-interview" ? (
      <tr>
        {console.log(data)}
        <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
        <td>{data.departmentType}</td>
        <td>{data.department}</td>
        <td>{data.title}</td>
        <td>{data.date + ":" + data.time}</td>
        <td>
          {!committee?(<Button
            size="sm"
            className="me-1"
            variant="danger"
            onClick={() => resetSchedule(data.application_id)}
          >
            <FontAwesomeIcon icon={faCalendarTimes} />
          </Button>):""}
          {dateDiff < 18000 ? (
            <Button size="sm" variant="success" className = "me-1" href="/conference">
              <FontAwesomeIcon icon={faVideo} />
              Join
            </Button>
          ) : (
            <Button size="sm" variant="success" disabled>
              <FontAwesomeIcon icon={faVideo} className = "me-1" />
              Join
            </Button>
          )}
        </td>
      </tr>
    ) : (
      <tr key={data.account_id}>
        <td>
          {data.firstname} {data.middlename} {data.lastname}
        </td>
        <td>{data.departmentType}</td>
        <td>{data.department}</td>
        <td>{data.title}</td>

        {status === "all" ? (
          <React.Fragment>
            <td>{data.status}</td>
            <td>
              <Button
                size="sm"
                className="me-2"
                onClick={() => view(data.application_id)}
              >
                View
              </Button>
            </td>
          </React.Fragment>
        ) : status === "pending" ? (
          <React.Fragment>
            <td>
              <Button
                size="sm"
                className="me-2"
                variant="success"
                onClick={() => accept(data, "prequalification")}
              >
                Accept
              </Button>
              <Button size="sm" variant="warning">
                Reject
              </Button>
            </td>
            <td>
              <Button
                size="sm"
                className="me-2"
                onClick={() => view(data.application_id)}
              >
                View
              </Button>
            </td>
          </React.Fragment>
        ) : status === "for-interview" ? (
          <td>
            <Button
              size="sm"
              className="me-2"
              variant="success"
              onClick={() => setSchedule(data)}
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="me-1" />
              Schedule
            </Button>
          </td>
        ) : status === "prequalification" ? (
          panel ? (
            <td>
              <Button
                size="sm"
                className="me-2"
                onClick={() => view(data.application_id)}
              >
                View
              </Button>
            </td>
          ) : (
            <td>
              <Button
                size="sm"
                className="me-2"
                variant="success"
                onClick={() => accept(data, "for-interview")}
              >
                Passed
              </Button>
              <Button size="sm" variant="warning">
                Failed
              </Button>
            </td>
          )
        ) : (
          ""
        )}
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
            <th>Department</th>
            <th>Job Title</th>
            <th>Interview Date</th>
            <th>Action</th>
          </tr>
        ) : (
          <tr>
            <th>Fullname</th>
            <th>Applying for</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>{status === "all" ? "Status" : "Action"}</th>
            {status === "pending" ? (
              <th>Details</th>
            ) : status === "all" ? (
              <th>Action</th>
            ) : (
              ""
            )}
          </tr>
        )}
      </thead>
      <tbody>
        {applications
          ? applications.map((data, index) => (
              <TableRow data={data} key={data.account_id} />
            ))
          : ""}
      </tbody>
    </Table>
  );
}
