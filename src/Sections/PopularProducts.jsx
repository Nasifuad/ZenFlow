import { products } from "../constants";
const PopularProducts = () => {
  return (
    <>
      <section className="flex flex-col items-start justify-center">
        <h3 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h3>
        <p className="mt-4 font-montserrat text-slate-500 text-lg leading-7">
          Experience top notch quality and style qith our sought after products
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16"></div>
      </section>
    </>
  );
};
export default PopularProducts;
