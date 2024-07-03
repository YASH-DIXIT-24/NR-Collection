import React from "react";


// Shimmer animation styles for Tailwind CSS
const shimmerStyles = {
    shimmer: "animate-pulse bg-gray-300",
};

const ShimmerRestaurantCard = () => {
    return (
        <div className="res-card w-[250px] h-[360px] bg-stone-50 rounded-md flex flex-col justify-between p-4 shadow-lg m-3 relative">
            <div className={`hover:scale-110 image-container h-[180px] ease-in duration-300 mb-2 ${shimmerStyles.shimmer} rounded-lg`} />
            <div className="details flex flex-col gap-2 flex-grow">
                <div className={`h-10 ${shimmerStyles.shimmer} rounded-md`} />
                <div className={`cuisines h-18 ${shimmerStyles.shimmer} rounded-md`} />
                <div className="ratings-container flex items-center justify-between mt-1">
                    <div className="rating-container flex items-center">
                        <div className={`w-5 h-5 rounded-full ${shimmerStyles.shimmer}`} />
                        <div className={`ml-1 w-10 h-4 ${shimmerStyles.shimmer} rounded-md`} />
                    </div>
                    <div className={`delivery-time w-16 h-4 ${shimmerStyles.shimmer} rounded-md`} />
                </div>
            </div>
        </div>
    );
};



export default ShimmerRestaurantCard;
