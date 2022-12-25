import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button } from "react-bootstrap";

export default function BreadCrumbs() {
  return (
    <>
      <Breadcrumb
        style={{ fontSize: "12px", marginBottom: "0px" }}
        className="breadcrumb"
      >
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
        <br />
      </Breadcrumb>
      <span style={{ fontSize: "22px" }}>
        <b>2022 Inventort Dashboard</b>
      </span>
    </>
  );
}
