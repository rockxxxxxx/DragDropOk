import React, { useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
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
    list,
    setList,
  } = useContext(DragDrop);
  const button = [
    { id: "11", name: "Bar" },
    { id: "12", name: "Chart" },
    { id: "13", name: "Title" },
    { id: "14", name: "Table" },
    { id: "15", name: "Divider" },
  ];
  const [stateData, updateStateData] = useState(button);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(stateData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateStateData(items);
    console.log(result);
    setList([
      ...list,
      {
        id: `${result.draggableId}${Math.floor(Math.random() * 90)}`,
        name: result.draggableId,
      },
    ]);
  }

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
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="button">
                {(provided) => (
                  <ListGroup
                    className="button"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {stateData.map((item, index) => {
                      return (
                        <Draggable
                          key={item.name}
                          draggableId={item.name}
                          index={index}
                        >
                          {(provided) => (
                            <ListGroup.Item
                              variant="outline-success"
                              size="md"
                              style={{ textAlign: "left" }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {item.name}
                            </ListGroup.Item>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ListGroup>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </Col>
  );
}
