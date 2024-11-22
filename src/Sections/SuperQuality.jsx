import React from "react";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex items-start justify-between gap-5 xl:gap-10 w-full max-container">
      <div className="flex flex-col items-start justify-between gap-10 max-w-sm">
        <h2 className="font-palanquin text-4xl font-bold">
          We Provie You <span className="text-coral-red">Super</span>
          <span className="text-emerald-500"> Quality</span> Shoes
        </h2>
        <p>
          Experience top notch quality and style with our sought after products
          and enhance your style with our quality.
        </p>
        <button className="bg-coral-red py-2 px-4 text-white rounded-full">
          {" "}
          View Details
        </button>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe" />
      </div>
    </section>
  );
};

export default SuperQuality;
