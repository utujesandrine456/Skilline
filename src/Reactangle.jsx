import React from "react";

const Rectangle = (props) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 2000 600">
      <rect 
        x={props.x} 
        y={props.y} 
        width={props.width} 
        height={props.height} 
        rx={props.rx} 
        ry={props.ry} 
        fill={props.fill} 
        stroke={props.stroke} 
        strokeWidth={props.strokeWidth} 
      />
    </svg>
  );
};
export default Rectangle;
