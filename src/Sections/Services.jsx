import React from "react";
import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col  justify-center max-container gap-10 md:items-center"
    >
      <div className="w-full flex flex-col ">
        <h1 className="font-palanquin text-4xl font-bold mb-5">
          Our <span className="text-amber-500">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 gap-10 md:place-content-center">
          {services.map((service) => (
            <ServiceCard key={service.label} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
