import React from "react";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center xl:flex-row sm:flex-col gap-10 sm: ">
      <h1 className="w-full font-palanquin text-4xl font-bold">
        Sign Up for <span className="text-red-500">Updates</span> and{" "}
        <span className="text-green-500">Offers</span>
      </h1>
      <div className="flex border border-slate-700 rounded-full px-10 py-5 w-full">
        <input
          type="email"
          placeholder="example@gamil.com"
          className=" flex-1 outline-none border-none w-full placeholder:text-slate-400 text-lg"
        />
        <button
          className="bg-coral-red px-5 py-2 text-white rounded-full"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
