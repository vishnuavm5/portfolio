import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="text-lg px-4 py-2 bg-gray-800 text-white rounded-full">
        {props.skill}
      </button>
    </div>
  );
};

export default Button;
