import Product from "../Components/Product";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <>
      <section
        id="products"
        className="flex flex-col items-start justify-center max-container gap-10"
      >
        <h3 className="font-palanquin text-4xl font-bold">
          Our{" "}
          <span className="text-coral-red hover:text-blue-500 hover:cursor-pointer">
            Popular
          </span>{" "}
          Products
        </h3>
        <p className="mt-4 font-montserrat text-slate-400 text-lg leading-7 w-1/2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16 w-full">
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
export default PopularProducts;
