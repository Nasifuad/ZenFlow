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
          Our <span className="text-coral-red">Popular</span> Products
        </h3>
        <p className="mt-4 font-montserrat text-slate-500 text-lg leading-7">
          Experience top notch quality and style qith our sought after products
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
