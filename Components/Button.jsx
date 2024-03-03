import React from "react";

const Button = ({ text, width, height }) => {
  return (
    <div>
      <button
        className={`w-${width} md:px-8 lg:p-4 lg:px-10 p-3 px-6 h-${height} font-normal rounded-lg text-white bg-red-500 border-red-500`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
