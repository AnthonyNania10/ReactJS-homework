import React, { useState } from "react";
import "./CountButton.css"

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount +props.increamentBy);

  };
  const divStyle = {
    color: "Blue",
    border:"1px solid black",
    boederRadius: "10px",
  }
  const buttonStyles ={
    background: props.buttonColor,
    boederRadius: "10px",
  }

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>+{props.increamentBy}</button>
      <div className ={"count-display"}>{currentCount} </div>
    </div>
  );
};

export default CountButton;
