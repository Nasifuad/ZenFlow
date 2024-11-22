import React from "react";

const Button = ({ label, imgUrl }) => {
  return (
    <div className="mt-5 flex gap-2 bg-coral-red px-4 py-3 rounded-full border hover:border-red-600 text-white">
      <button>{label}</button>
      <img src={imgUrl} alt={label} />
    </div>
  );
};

export default Button;
