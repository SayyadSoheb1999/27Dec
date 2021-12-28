import React from "react";
import { Row, Col, FormControl, Form } from "react-bootstrap";
import "./Virtual.css";

export const VirtualPage = () => {
  return (
    <div>
      <h1>Virtual Booth</h1>
      <div className="virtuald">
        <h3>General</h3>
        <Row styel={{ margin: "20px 0" }}>
          <label>Event Name</label>
          <br />
          <input
            width="700px"
            type="text"
            placeholder="Choose your event name"
          />
        </Row>
        <Row>
          <Col>
            <Form.Label>Start Date</Form.Label>

            <Form.Control type="date" placeholder="Date" />
          </Col>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Row>
      </div>
    </div>
  );
};
