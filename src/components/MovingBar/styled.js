import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Bar = tw.div`
  ${(props) =>
    props.bardimension &&
    `
    w-[${props.bardimension.x}px]
    h-[${props.bardimension.y}px]
  `}
  w-[300px]
  h-[50px]
  bg-slate-500
  rounded-2xl
  relative
`;

export const WinningArea = styled.div`
  ${(props) =>
    props.dimension &&
    `
  width: ${props.dimension.x}px;
  height: ${props.dimension.y}px;
`}
  background-color: green;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 0;
`;

// export const WinningArea = tw.div`
// bg-green-400
// absolute
// left-0
// right-0
// m-auto
// z-0
// ${(props) =>
//   props.dimension &&
//   `
//   w-[${props.dimension.x}px]
//   w-[120px]
//   w-[50px]
//     h-[${props.dimension.y}px]

//   `}
// `;

const getAnimationFromLevel = (level) => {
  if (level === 1) return "animate-moveX-slow";
  if (level === 2) return "animate-moveX-medium";
  return "animate-moveX-fast";
};

export const Circle = tw.div`
  ${(props) =>
    props.x &&
    `
    w-[${props.x}px]
    h-[${props.x}px]
  `}
  ${(props) => props.level && `${getAnimationFromLevel(props.level)}`}
  bg-red-700
  rounded-full
  absolute
  z-10
`;
