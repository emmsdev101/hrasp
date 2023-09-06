import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import DataTable from "react-data-table-component";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function RegistrationTab() {
  const [accounts, setAccounts] = useState([]);

  const [showAccept, setShowAccept] = useState(false);
  const [showDecline, setShowDecline] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  let columns = [
    {
      name: "Fullname",
      selector: (row) =>
        [row.firstname, row.middlename, row.lastname].join(" "),
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Birthday",
      selector: (row) => row.birthday,
      sortable: true,
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => Action(row),
      sortable: true,
    },
  ];

  let selected = useRef();

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    const accountReq = await axios.get(apiBaseUrl + "/admin/getAccounts", {
      withCredentials: true,
    });
    const accountData = accountReq.data;
    setAccounts(accountData);
  };

  const acceptAccount = async () => {
    const acceptReq = await axios.post(
      apiBaseUrl + "/admin/acceptAccount",
      {
        accountId: selected.current,
      },
      { withCredentials: true }
    );
    if (acceptReq.data) getAccounts();
    setShowAccept(false);
  };
  const declineAccount = async () => {
    const acceptReq = await axios.post(
      apiBaseUrl + "/admin/decline",
      {
        accountId: selected.current,
      },
      { withCredentials: true }
    );
    if (acceptReq.data) getAccounts();
    setShowDecline(false);
  };
  const deactivateAccount = async () => {
    const acceptReq = await axios.post(
      apiBaseUrl + "/admin/deactivate",
      {
        accountId: selected.current,
      },
      { withCredentials: true }
    );
    if (acceptReq.data) getAccounts();
    setShowDeactivate(false);
  };

  const Action = (data) => {
    return (
      <>
        {data.status === "pending" ? (
          <React.Fragment>
            <Button
              variant="success"
              className="ms-1"
              size="sm"
              onClick={() => {
                selected.current = data.account_id;
                setShowAccept(true);
              }}
            >
              Accept
            </Button>
            <Button
              variant="danger"
              className="ms-1"
              size="sm"
              onClick={() => {
                setShowDecline(true);
                selected.current = data.account_id;
              }}
            >
              Decline
            </Button>
          </React.Fragment>
        ) : (
          ""
        )}
        {data.status === "active" ? (
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              setShowDeactivate(true);
              selected.current = data.account_id;
            }}
          >
            Deactivate
          </Button>
        ) : data.status != "pending" ? (
          <Button
            variant="success"
            size="sm"
            onClick={() => {
              setShowAccept(true);
              selected.current = data.account_id;
            }}
          >
            Activate
          </Button>
        ) : (
          ""
        )}
      </>
    );
  };
  const FilterComponent = ({ onFilter, onClear, filterText }) => {
    return (
      <div className="sortDiv">
        <div className="d-flex justify-content-center align-items-center">
          <Form.Control
            placeholder="Search:fullname"
            aria-label="Search"
            id="search"
            size="sm"
            className="text-muted"
            type="text"
            defaultValue={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          ></Form.Control>
          <Button variant="primary" size="sm" onClick={onClear}>
            X
          </Button>
        </div>
      </div>
    );
  };

  const filteredItems = accounts.filter((item) =>
    [item.firstname, item.middlename, item.lastname]
      .join(" ")
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <div className="d-flex justify-content-evenly">
        <FilterComponent
          onFilter={(e) => setFilterText(e)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  const ApplicationsBox = () => {
    return (
      <div className="applicantsBox m-1 p-3">
        <ConfirmModal
          confirm={acceptAccount}
          title={"Accept?"}
          message="Are you going to accept this account?"
          show={showAccept}
          handleClose={() => setShowAccept(false)}
        />
        <ConfirmModal
          confirm={declineAccount}
          title={"Decline?"}
          message="Are you going to decline this account?"
          show={showDecline}
          handleClose={() => setShowDecline(false)}
        />
        <ConfirmModal
          confirm={deactivateAccount}
          title={"Deactivate?"}
          message="Are you going to deactivate this account?"
          show={showDeactivate}
          handleClose={() => setShowDeactivate(false)}
        />
        <br></br>
        <Row>
          {" "}
          <Col>
            <h6>Applicant Accounts</h6>
          </Col>
          <Col>
            <div className="d-flex justify-content-end gap-2">
              <div className="sortDiv">
                <Form.Select aria-label="Default select example" size="sm">
                  <option>Position</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </Form.Select>
              </div>
              <div className="sortDiv">
                <Form.Select aria-label="Default select example" size="sm">
                  <option>Type</option>
                  <option value="1">Faculty</option>
                  <option value="2">Staff</option>
                </Form.Select>
              </div>

              <div className="sortDiv">
                <Form.Select aria-label="Default select example" size="sm">
                  <option>Status</option>
                  <option value="1">Accepted</option>
                  <option value="2">Pending</option>
                  <option value="2">Rejected</option>
                </Form.Select>
              </div>
            </div>
          </Col>
        </Row>
        <div className="applicantsList">
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
          />
        </div>
      </div>
    );
  };
  return <ApplicationsBox />;
}
