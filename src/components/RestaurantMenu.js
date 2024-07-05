import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import DropdownData from "./DropdownData";
const RestaurantMenu=()=>{
    const restaurantdata=useRestaurantMenuData();
    const {name, cuisines}=restaurantdata?.cards[2]?.card?.card?.info ||{};
    const resMenu= restaurantdata?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};
    const categories= restaurantdata?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || {};
    
    return restaurantdata=== null?'':(
      <>
        <div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">{name}</h1>
          <h4 className="text-xl font-semibold text-gray-700">{cuisines.join(', ')}</h4>
          <div className="w-3/4 m-auto">
            {categories.map((item) => (
              <DropdownData item={item} key={item.id} />
            ))}
          </div>
        </div>
      </>
    )
}
export default RestaurantMenu;