import React from "react";

const Button = ({ label, imgUrl }) => {
  return (
    <div className="mt-2 flex gap-2 bg-coral-red px-4 py-3 rounded-full hover:border-coral-red text-white">
      <button>{label}</button>
      <img src={imgUrl} alt={label} />
    </div>
  );
};

export default Button;
