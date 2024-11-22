import React from "react";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex items-start justify-center gap-5">
      <div className="flex flex-col items-start justify-center">
        <h2 className="font-palanquin text-4xl font-bold">
          We Provie You <span className="text-coral-red">Super</span>
          <span className="text-emerald-500"> Quality</span> Shoes
        </h2>
        <p>
          Experience top notch quality and style with our sought after products
          and enhance your style with our quality.
        </p>
      </div>
      <div>
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
