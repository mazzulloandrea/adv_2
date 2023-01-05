import styled, { css } from "styled-components";

export const Test = styled.div`
  ${(props) =>
    props.anim &&
    css`
      transform: scale(3) translateX(-150px); // laboratorio
      transform: scale(3) translateX(50px); // campo grande
      transform: scale(3) translateX(120px); // dormitorio
      transition: 5s;
    `}
`;
