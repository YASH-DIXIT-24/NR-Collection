import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export default Body =()=>{
    //first use of useState variable , which is a very powerfull inbuilt function inside react and a react hook
    //what makes react applications superfast , these dom updations are fast
    let [restaurantsList,setrestaurantsList]=useState([]);

    useEffect(()=>{
        console.log("use effect callback called")
        fetchData();
    },[]);

    const fetchData= async ()=>{
        let apiData= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.568093&lng=77.4344775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData= await apiData.json();
        //using optional chaining below
        setrestaurantsList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return(
        <div className="body">
            <div className="search">
                <button className='search-btn' onClick={()=>{
                   let filteredList= restaurantsList.filter(restaurant=>(Number(restaurant.info.avgRatingString)>4))
                   console.log(filteredList);
                   setrestaurantsList(filteredList)
                }}>High Rated Restaurants</button>
            </div>
            <div className="resContainer">
               {(restaurantsList.length>0)?restaurantsList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />)):(<Shimmer/>)}
            </div>
        </div>
    )
}