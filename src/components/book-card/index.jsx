import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const BookCard = ({
  smallThumbnail,
  title,
  publisher,
  authors,
  previewLink,
}) => {
  return (
    <Card className="mb-3" style={{ width: "14rem" }}>
      <Card.Img
        variant="top"
        style={{ width: "120px", margin: "0 auto" }}
        src={smallThumbnail}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="col" style={{ fontSize: "14px" }}>
            <strong>Publisher: </strong> {publisher}
          </div>
          <div className="col" style={{ fontSize: "14px" }}>
            <strong>Authors: </strong> {authors}
          </div>
        </Card.Text>
        <a className="btn btn-primary" href={previewLink} target="_blank">
          More info
        </a>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
