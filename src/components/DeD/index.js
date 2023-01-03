import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DroppableContainer } from "./DroppableContainer";
import initialState from "./list";

const DeD = () => {
  const [list, setList] = useState(initialState);

  const onDragEnd = (result) => {
    const element = list[result.source.droppableId].filter(
      (el) => el.id === result.draggableId
    );
    const copy = {
      initial: list.initial.filter((el) => el.id !== result.draggableId),
      final: list.final.filter((el) => el.id !== result.draggableId),
    };

    copy[result.destination.droppableId].splice(
      result.destination.index,
      0,
      element[0]
    );
    setList(copy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableContainer list={list.initial} id={"initial"} />
      <DroppableContainer list={list.final} id={"final"} />
    </DragDropContext>
  );
};

export default DeD;
