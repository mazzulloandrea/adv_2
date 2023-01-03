import tw from "tailwind-styled-components";
import styled from "styled-components";

export const List = tw.div`
  w-1/3
  h-96
  border-4
  border-orange-500
  transition duration-75 ease
  ${(props) => (props.isDraggingOver ? "bg-sky-400" : "bg-white")}
`;

export const Item = tw.div`
  w-20  
  h-10
  border-2
  border-green-500
  my-2
  ${(props) => (props.isDragging ? "bg-orange-400" : "bg-white")}
`;
