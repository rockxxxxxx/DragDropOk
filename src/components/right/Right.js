import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Draggable from "react-draggable";
import { DragDrop } from "../../contextApi/dragDropContext";

export default function Right() {
  const {
    table,
    setTable,
    chart,
    setChart,
    bar,
    setBar,
    test,
    setTest,
    blankComponent,
    setBlankComponent,
    setList,
    list,
  } = useContext(DragDrop);
  return (
    <Col>
      <div
        style={{ backgroundColor: "white", height: "90vh" }}
        className="card"
      >
        <div className="card-container">
          <ButtonGroup
            aria-label="Basic example"
            style={{ marginBottom: "25px" }}
          >
            <Button className="active" variant="secondary">
              Components
            </Button>
            <Button variant="secondary">Charts</Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            {!bar && (
              <Draggable
                axis="x"
                onStop={() => {
                  setList([
                    ...list,
                    { id: `Bar${Math.floor(Math.random() * 90)}`, name: "Bar" },
                  ]);
                  setBar(true);
                }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Bar Graph
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Row
            </Button>
            {!chart && (
              <Draggable
                onStop={() => {
                  setList([
                    ...list,
                    {
                      id: `Chart${Math.floor(Math.random() * 90)}`,
                      name: "Chart",
                    },
                  ]);
                  setChart(true);
                }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Chart Graph
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Header
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Markdown
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Divider
            </Button>
            {!table && (
              <Draggable
                onStop={() => {
                  setList([
                    ...list,
                    {
                      id: `Table${Math.floor(Math.random() * 90)}`,
                      name: "Table",
                    },
                  ]);
                  setTable(true);
                }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Table
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Process Diagram
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Trigger Flow
            </Button>
            {!test && (
              <Draggable
                onStop={() => {
                  setList([
                    ...list,
                    {
                      id: `Title${Math.floor(Math.random() * 90)}`,
                      name: "Title",
                    },
                  ]);
                  setTest(true);
                }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Title
                </Button>
              </Draggable>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
