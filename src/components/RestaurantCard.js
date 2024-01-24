import React from "react";
import { CLOUDINARY_ID } from "../utils/constants";

export default RestaurantCard =({resData})=>{
    const {name,cloudinaryImageId,cuisines,avgRating,sla}=resData;
    return(
        <div className="res-card">
            <h3>{name}</h3>
            <img src={CLOUDINARY_ID+cloudinaryImageId}></img>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
}