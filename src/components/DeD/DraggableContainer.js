import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Item } from "./styled";

export function DraggableContainer({ id, index, content }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {content}
        </Item>
      )}
    </Draggable>
  );
}
