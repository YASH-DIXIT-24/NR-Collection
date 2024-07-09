import React from "react";
import { CLOUDINARY_ID } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData;

    return (
        <div className="res-card w-[260px] h-[320px] bg-stone-150 rounded-lg flex flex-col justify-between p-3 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 m-[40px] relative z-30">
            <div className="hover:scale-110 image-container h-[180px] ease-in duration-300 mb-2">
                <img className="rounded-lg object-cover w-full h-full" src={CLOUDINARY_ID + cloudinaryImageId} alt={`${name} image`} />
            </div>
            <div className="details flex flex-col gap-2 flex-grow">
                <h4 className="h-8 font-bold text-lg truncate">{name}</h4>
                <div className="cuisines h-18 text-gray-600 text-sm truncate">{cuisines.join(', ')}</div>
                <div className="ratings-container flex items-center justify-between mt-1">
                    <div className="rating-container flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
                            <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                            <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                            <defs>
                                <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#21973B"></stop>
                                    <stop offset="1" stopColor="#128540"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="avg-rating ml-1 text-green-700 font-semibold">{avgRating}</span>
                    </div>
                    <span className="delivery-time text-gray-500 text-sm">{sla.deliveryTime} min</span>
                </div>
            </div>
        </div>
    );
};
export const WithOfferRestaurant=(RestaurantCard)=>{
    return (props)=>{
        return (
            <>
                {/* <div className="border-red-500 border w-[68px] bg-red-500 rounded text-center mb-1 z-10 absolute p-[2px]">
                    <span className="text-white text-xs font-bold">Promoted</span>
                </div> */}
                <RestaurantCard {...props}/>
            </>

        
        )
    }
}

export default RestaurantCard;
