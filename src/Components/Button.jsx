import React from "react";

const Button = ({ text ,ClickFunc}) => {
  return (
    <button
      onClick={() => ClickFunc()}
      className="bg-blue-600 text-white p-[10px] rounded-[4px]"
    >
      {text}
    </button>
  );
};

export default Button;
