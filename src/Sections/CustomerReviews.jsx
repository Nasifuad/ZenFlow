import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";
const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col justify-center items-center">
      <h1 className="font-palanquin text-4xl font-bold">
        What our <span className="text-cyan-500">Customers</span> Say
      </h1>
      <p className="mt-10 font-montserrat text-slate-500 ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>
      <div className="mt-24 flex xl:flex-row sm:flex-col justify-center items-center gap-10">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
