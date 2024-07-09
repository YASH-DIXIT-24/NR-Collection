import {useState } from "react";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import DropdownData from "./DropdownData";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
const RestaurantMenu=()=>{
    const restaurantdata=useRestaurantMenuData();
    const [dropIndex,setDropIndex]=useState(-1);
    const [lastDropIndex,setLastDropIndex]=useState(-1);
    const {name, cuisines}=restaurantdata?.cards[2]?.card?.card?.info ||{};
    const categories= restaurantdata?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || {};
    return (
      <>
        {restaurantdata!=null?<div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg absolute top-[95px] w-full">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">{name}</h1>
          <h4 className="text-xl font-semibold text-gray-700">{cuisines.join(', ')}</h4>
          <div className="w-3/4 m-auto">
            {categories.map((item,index) => ( 
               <DropdownData item={item} key={item.id} isOpen={dropIndex==index && lastDropIndex!=index} setDropIndex={()=>{setDropIndex(index)
                if(lastDropIndex==index)setLastDropIndex(-1)
                  else
                setLastDropIndex(dropIndex)
               }}/>
            ))}
          </div>
        </div>:<ShimmerRestaurantMenu/>}
        
      </>
    )
}
export default RestaurantMenu;