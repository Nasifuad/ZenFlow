import React from "react";

const ServiceCard = ({ service }) => {
  const { imgURL, label, subtext } = service;
  return (
    <div
      className=" flex flex-col  shadow-3xl rounded-lg p-10 h-[300px]  w-full
      gap-4
      cursor-pointer justify-center items-start hover:scale-105 transition-all "
    >
      <div className="bg-coral-red rounded-full w-10 h-10 flex justify-center items-center">
        {" "}
        <img src={imgURL} alt="Services" width={24} height={24} />
      </div>
      <h1 className="font-palanquin text-black font-bold text-3xl leading-normal">
        {label}
      </h1>
      <p className="font-montserrat text-slate-500 text-lg leading-normal">
        {subtext}
      </p>
    </div>
    // </div>
  );
};

export default ServiceCard;
