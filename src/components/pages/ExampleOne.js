import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import initialData from "../data/items";

const ExampleTwo = () => {
  const [stateData, updateStateData] = useState(initialData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(stateData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateStateData(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl text-gray-600">Weekly Planner</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="button">
            <Droppable droppableId="button">
              {(provided) => (
                <div
                  className="button"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {stateData.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <p
                            className="drop-list-item list-none text-red-400"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </p>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            );
          </div>
        </DragDropContext>
      </header>
    </div>
  );
};

export default ExampleTwo;
