import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
const RestaurantMenu=()=>{
    const restaurantdata=useRestaurantMenuData();
    const {name, cuisines}=restaurantdata?.cards[0]?.card?.card?.info ||{};
    const resMenu= restaurantdata?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};
    console.log("below is restaurant data");
    console.log(restaurantdata);
    return restaurantdata=== null?'':(
      <>
        <h1>{name}</h1>
        {/* <h3>{cuisines.join(',')}</h3> */}
        <ul>
            {/* {resMenu.map(menuItem=>((<li key={menuItem.card.info.id}>{menuItem.card.info.name}</li>)))} */}
        </ul>

      </>
    )
}
export default RestaurantMenu;