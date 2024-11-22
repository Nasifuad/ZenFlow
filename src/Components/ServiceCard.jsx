import React from "react";

const ServiceCard = ({ service }) => {
  const { imgURL, label, subtext } = service;
  return (
    <div className="flex bg-white rounded-[20px]   justify-center items-center gap-4 shadow-3xl h-[300px] ">
      <div className=" flex flex-col bg-slate-700 shadow-3xl rounded-lg p-10 h-full cursor-pointer justify-center items-start ">
        <img src={imgURL} alt="Services" width={24} height={24} />
        <h1 className="font-palanquin text-white text-3xl leading-normal">
          {label}
        </h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
