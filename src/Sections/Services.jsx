import React from "react";
import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <div
      id="services"
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="font-palanquin text-4xl font-bold mb-5">
        Our <span className="text-amber-500">Services</span>
      </h1>
      <div className="w-full flex gap-5 justify-around items-center flex-wrap">
        {services.map((service) => (
          <ServiceCard key={service.label} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
