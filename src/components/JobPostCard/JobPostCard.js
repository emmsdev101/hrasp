import { faEdit, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function JobPostCard({ data }) {
  const image = apiBaseUrl + "/" + data.poster;
  const title = data.title;
  const description = data.description;

  console.log(image);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{title}</Card.Title>
          <div>
            <Button size="sm" variant="none">
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <Card.Text className = "text-muted">{data.jobtype}</Card.Text>


        <p>{description}.</p>
        {data.poster ? (
          <img src={image} className="postImage card-img" alt="" />
        ) : (
          ""
        )}
      </Card.Body>
      <Card.Footer>
        <Button size="sm" className="me-1" variant="warning">
          Mark Close
        </Button>
        <Button size="sm" variant="danger">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete Post
        </Button>
      </Card.Footer>
    </Card>
  );
}
