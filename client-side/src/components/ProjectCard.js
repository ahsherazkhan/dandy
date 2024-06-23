import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={4} md={5}>
      <div className="proj-imgbx" >
        <div className="proj-txtx">
          <p>{title}</p>
        </div>
        <img src={imgUrl} alt="Project Image" />
      </div>
    </Col>
  );
};
