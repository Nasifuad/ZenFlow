import React from "react";

const Shoe = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const hadleClick = () => {};
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer
    ${
      bigShoeImg === imgUrl?.bigShoe ? "border-coral-red" : "border-transparent"
    } max-sm:flex-1
    `}
      onClick={hadleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl ">
        <img
          src={imgUrl.thumbnail}
          alt="Shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Shoe;
