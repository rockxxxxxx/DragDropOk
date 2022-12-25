import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { DragDrop } from "../../contextApi/dragDropContext";

import Title from "../title/Title";
import Bar from "../bar/Bar";
import Table from "../table/Table";
import Chart from "../chart/Chart";
import BarChart from "../bar/BarChart";

export default function Mid() {
  const {
    table,
    setTable,
    chart,
    setChart,
    bar,
    setBar,
    test,
    blankComponent,
    setBlankComponent,
    list,
    setList,
  } = useContext(DragDrop);
  console.log(list);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
    console.log(result);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="button" direction="horizontal">
        {(provided) => (
          <Col
            xs={7}
            style={{ marginTop: "40px" }}
            className="button"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Row xs={1} md={2}>
              {list.map((item, index) => {
                return (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        xs={7}
                        style={{ marginBottom: "20px" }}
                        variant="outline-success"
                        size="md"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name === "Table" ? (
                          <Col style={{ marginBottom: "20px" }}>
                            <Table />
                          </Col>
                        ) : (
                          ""
                        )}

                        {item.name === "Bar" ? (
                          <Col style={{ marginBottom: "20px" }}>
                            <BarChart />
                          </Col>
                        ) : (
                          ""
                        )}

                        {item.name === "Chart" ? (
                          <Col style={{ marginBottom: "20px" }}>
                            {" "}
                            <Chart />
                          </Col>
                        ) : (
                          ""
                        )}

                        {item.name === "Title" ? (
                          <Col style={{ marginBottom: "20px" }}>
                            {" "}
                            <Title />
                          </Col>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Row>
          </Col>
        )}
      </Droppable>
    </DragDropContext>
  );
}
