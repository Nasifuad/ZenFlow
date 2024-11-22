import React from "react";
import { star } from "../assets/icons";
const Product = ({ product }) => {
  const { imgURL, name, price, reviews } = product;
  return (
    <div>
      <img
        className="object-contain hover:cursor-pointer hover:scale-105 transition-all duration-300"
        src={imgURL}
        alt={name}
        width={300}
      />
      <p className="mt-8 font-palanquin text-3xl font-bold">{name}</p>
      <div className="flex mt-2 gap-2">
        <img src={star} alt="review" />
        <p className="text-xl font-montserrat text-slate-500 font-semibold">
          ({reviews})
        </p>
      </div>
      <p className="mt-2 font-montserrat text-xl text-coral-red leading-normal font-semibold">
        {price}
      </p>
    </div>
  );
};

export default Product;
