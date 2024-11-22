import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import Shoe from "../Components/Shoe";
const Hero = () => {
  return (
    <section className="w-full min-h-screen flex-col   flex xl:flex-row justify-center items-center gap-10 max-container font-montserrat ">
      <div className="relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-28">
        <p className="text-2xl font-semibold xl:bg-white xl:whitespace-nowrap text-coral-red rounded-full hover:scale-105  hover:text-red-500 transition-all">
          Our Summer Collection
        </p>
        <h1 className=" w-fullmt-10 text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red hover:text-emerald-500 hover:cursor-pointer transition-all">
            NIKE{" "}
          </span>
          Shoes.
        </h1>
        <p className="font-montserrat text-slate-800 text-xl leading leading-8 mt-5">
          Discover stylish Nike shoes that will make you stand out from the
          crowd.
        </p>

        <Button label="Shop Now" imgUrl={arrowRight} />
        <div className="mt-20 gap-16 w-full flex flex-wrap justify-start items-start ">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <h3 className="text-4xl font-bold font-palanquin">
                  {stat.value}
                </h3>
                <h4 className="leading-7 font-montserrat font-semibold text-slate-500">
                  {stat.label}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center w-full xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="Shoes"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <div key={shoe.bigShoe}>
              <Shoe imgUrl={shoe} changeBigShoeImg={() => {}} bigShoeImg="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
