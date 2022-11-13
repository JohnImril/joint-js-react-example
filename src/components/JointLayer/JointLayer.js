import React, { useEffect, useRef } from "react";
import { dia, shapes } from "jointjs";

function JointLayer() {
  const canvas = useRef(null);

  useEffect(() => {}, []);

  return <div className="canvas" ref={canvas} />;
}

export default JointLayer;
