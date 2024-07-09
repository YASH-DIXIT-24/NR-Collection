import React from "react";


// Shimmer animation styles for Tailwind CSS
const shimmerStyles = {
    shimmer: "animate-pulse bg-gray-300",
};

const ShimmerRestaurantCard = () => {
    return (
<div className="res-card w-[260px] h-[320px] bg-gray-200 rounded-lg flex flex-col justify-between p-3 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 m-[40px] relative z-30 animate-pulse">
  <div className="hover:scale-110 image-container h-[180px] ease-in duration-300 mb-2 bg-gray-300 rounded-lg"></div>
  <div className="details flex flex-col gap-2 flex-grow">
    <div className="h-8 bg-gray-300 rounded"></div>
    <div className="h-6 bg-gray-300 rounded"></div>
    <div className="ratings-container flex items-center justify-between mt-1">
      <div className="rating-container flex items-center">
        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        <div className="ml-1 w-10 h-5 bg-gray-300 rounded"></div>
      </div>
      <div className="w-20 h-5 bg-gray-300 rounded"></div>
    </div>
  </div>
</div>

    );
};



export default ShimmerRestaurantCard;
