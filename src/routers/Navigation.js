import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navigation.css";
import BreadCrumbs from "./BreadCrumbs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Navigation() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="navbar"
      style={{ marginLeft: "5%", paddingRight: "100px" }}
    >
      <Button
        variant="secondary"
        size="md"
        style={{
          marginLeft: "5px",
          backgroundColor: "#F8EDE3",
          color: "#85586F",
        }}
      >
        <i className="fi fi-br-angle-left"></i>
      </Button>
      <Container>
        <Navbar.Brand href="#home">
          <BreadCrumbs />
        </Navbar.Brand>
        <div className="d-flex">
          <Button style={{ marginRight: "5px", backgroundColor: "#F8EDE3" }}>
            <i
              className="fi fi-br-rotate-left"
              style={{ color: "#85586F" }}
            ></i>
          </Button>
          <Button style={{ marginRight: "5px", backgroundColor: "#F8EDE3" }}>
            <i
              className="fi fi-br-rotate-right"
              style={{ color: "#85586F" }}
            ></i>
          </Button>
          <div className="vr" style={{ marginRight: "5px" }}></div>
          <Button
            style={{
              marginRight: "5px",
              backgroundColor: "#F8EDE3",
              color: "#85586F",
            }}
          >
            Discard Changes
          </Button>
          <Button variant="primary" style={{ marginRight: "5px" }}>
            Save
          </Button>
          <Button
            variant="outline-success"
            style={{ backgroundColor: "#F8EDE3" }}
          >
            <i className="fi fi-br-menu-dots"></i>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
