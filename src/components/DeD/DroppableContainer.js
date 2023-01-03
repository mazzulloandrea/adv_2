import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { List } from "./styled";
import { DraggableContainer } from "./DraggableContainer";

export function DroppableContainer({ id, list }) {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <List
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {list.map((el, index) => (
            <DraggableContainer
              key={el.id}
              id={el.id}
              index={index}
              content={el.text}
            />
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
}
