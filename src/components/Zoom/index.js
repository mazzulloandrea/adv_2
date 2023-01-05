import React, { useEffect, useState } from "react";
import campo from "../../assets/image/campo_addestramento_800.jpg";
import { Test } from "./styled";

function Zoom() {
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnim(true), 2000);
  }, []);

  return (
    <Test anim={anim}>
      <img src={campo} alt="" />
    </Test>
  );
}

export default Zoom;
