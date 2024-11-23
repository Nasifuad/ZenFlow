import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col justify-between items-center xl:h-max h-[500px] gap-10">
      <img
        src={review.imgURL}
        alt="revieweer {review.customerName}"
        width={150}
        className="rounded-full"
      />
      <p className="mt-2 font-palanquin text-center xl:text-3xl text-sm font-bold w-2/3">
        {review.feedback}
      </p>
      <div className="flex gap-1">
        <img src={star} alt="star" />
        <p className="text-xl font-montserrat text-slate-500">
          ({review.rating})
        </p>
      </div>
      <p className="font-palanquin text-center xl:text-2xl text-sm font-bold">
        {review.customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
