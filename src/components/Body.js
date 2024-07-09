import React from "react";
import RestaurantCard,{WithOfferRestaurant} from "./RestaurantCard";
import { useState} from "react";
import { Link } from "react-router-dom";
import useResData from "../hooks/useResData";
import {API_URL} from "../utils/constants"
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

export default Body = () => {
  const [restaurantsList, filterRestaurantsList] = useResData(API_URL);
  const [searchValue, setSearchValue] = useState("");
  const OfferRestaurant=WithOfferRestaurant(RestaurantCard)
  const renderPlaceholders = (numPlaceholders) => {
    const placeholders = [];
    for (let i = 0; i < numPlaceholders; i++) {
      placeholders.push(<ShimmerRestaurantCard key={i} />);
    }
    return placeholders;
  };
  return (
    <div className="absolute top-[105px] z-30">
      <div className="flex items-center ">
        {/* <button
          className="filter-btn bg-red-400 m-3  rounded-md p-1"
          onClick={() => {
            let filteredList = restaurantsList.filter(
              (restaurant) => Number(restaurant.info.avgRatingString) > 4
            );
            setsearchrestaurant(filteredList);
          }}
        >
          High Rated Restaurants
        </button> */}
        {/* <div className="search m-3">
        <input className="search-box mx-2 border-slate-50" type="text" value={searchValue} onChange={(e) => { setSearchValue(e.target.value); }} ></input>
          <button
            className="search-btn bg-red-400 rounded-md p-1"
            onClick={() => {
              let filteredList = restaurantsList.filter((restaurant) =>
                (restaurant?.info?.name).includes(searchValue)
              );
              setsearchrestaurant(filteredList);
            }}
          >
            SEARCH
          </button>
        </div> */}

      </div>
      <div class="resContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mx-auto">
        {filterRestaurantsList.length > 0 ? (
          filterRestaurantsList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"restaurantMenu/" + restaurant.info.id}
              
            >
              {(restaurant.info.aggregatedDiscountInfoV3 === undefined) ? (
                <RestaurantCard resData={restaurant.info} />
              ) : (
                <OfferRestaurant resData={restaurant.info} />
              )}
            </Link>
          ))
  ) : (
    renderPlaceholders(16)
  )}
</div>
    </div>
  );
};
