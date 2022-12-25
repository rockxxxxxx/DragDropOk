import React from "react";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default function Left() {
  return (
    <Col>
      <div
        style={{
          backgroundColor: "white",
          height: "90vh",
        }}
        className="card"
      >
        <div className="card-container">
          <p>
            <b>Project Name</b>
          </p>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Accordion style={{ marginTop: "30px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Flows</Accordion.Header>
              <Accordion.Body style={{ fontSize: "14px" }}>
                <p>Inventory Flow</p>
                <p>Channel Flow</p>
                <p>Regional Distribution</p>
                <p>New Product Integraton</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion style={{ marginTop: "30px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Dashboards</Accordion.Header>
              <Accordion.Body style={{ fontSize: "14px" }}></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion style={{ marginTop: "30px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Datasheet</Accordion.Header>
              <Accordion.Body style={{ fontSize: "14px" }}></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion style={{ marginTop: "30px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Connectors</Accordion.Header>
              <Accordion.Body style={{ fontSize: "14px" }}></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Col>
  );
}
