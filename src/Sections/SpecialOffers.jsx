import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
// import { SpecialOffers } from "../constants";
const SpecialOffers = () => {
  return (
    <section className="flex flex-col items-start justify-center max-container gap-10">
      <div className="mt-10 flex items-center gap-10 xl:flex-row flex-col-reverse">
        <img src={offer} alt="Offer" />
        <div className="flex flex-col gap-5">
          <h1 className="font-palanquin text-4xl font-bold">
            <span className="text-purple-500">Special</span> Offers
          </h1>
          <p className="font-montserrat text-slate-500">
            Embark on shopping journey that redefines your experience with
            unbeatable deals. Find top-notch products at every price point.
          </p>
          <p className="mt-6 font-montserrat text-slate-800">
            Navigate to a realm of possibilities designed to fullfill your
            unique desires surpassing the loftiest expectations
          </p>
          <div className="flex gap-4 ">
            <Button label="View More" imgUrl={arrowRight} />

            <button className="border border-coral-red py-2 px-4 rounded-full mt-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
