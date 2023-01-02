import React, { useState, useRef, useCallback, useMemo } from "react";
import { Bar, Circle, WinningArea } from "./styled";

function MovingApp(props) {
  const {
    howManyStops = 10,
    winningLevel = 3,
    barDimension = { x: 300, y: 50 },
    circleDimension = 50,
    successCb = () => {},
    failureCb = () => {},
  } = props;
  const [stop, setStop] = useState(0);
  const [move, setMove] = useState(true);
  const animationElement = useRef();

  const getWinningDimension = useMemo(() => {
    let x = 50;
    switch (winningLevel) {
      case 1:
        x = 50;
        break;
      case 2:
        x = 35;
        break;
      default:
        x = 20;
        break;
    }
    return x;
  }, [winningLevel]);

  const verify = useCallback(() => {
    const { offsetLeft } = animationElement.current;
    const winningX = getWinningDimension;
    const left = (barDimension.x - winningX) / 2;
    if (offsetLeft > left - circleDimension && offsetLeft < left + winningX) {
      console.log("successo");
      successCb();
    } else {
      console.log("fallimento");
      failureCb();
    }
  }, [
    barDimension.x,
    circleDimension,
    failureCb,
    getWinningDimension,
    successCb,
  ]);

  return (
    <Bar
      bardimension={barDimension}
      onClick={() => {
        if (stop >= howManyStops) return;
        setStop(stop + 1);
        if (animationElement?.current) {
          if (move) {
            animationElement.current.style.animationPlayState = "paused";
            verify();
          } else {
            animationElement.current.style.animationPlayState = "running";
          }
          setMove(!move);
        }
      }}
    >
      <WinningArea
        dimension={{
          x: getWinningDimension,
          y: barDimension.y,
        }}
      />
      <Circle x={circleDimension} ref={animationElement} level={winningLevel} />
    </Bar>
  );
}

export default MovingApp;
