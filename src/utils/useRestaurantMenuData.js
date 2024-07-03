import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {menuApiUrl} from "../utils/constants"


export default function useRestaurantMenuData() {
    const [restaurantdata,setrestaurantdata]= useState(null);
    const {resId}= useParams();
    useEffect(()=>{
     fetchMenu();
    },[]);
    const fetchMenu= async ()=>{
        console.log(menuApiUrl+resId)
        let data= await fetch(menuApiUrl+resId);
        let jsonData= await data.json();
        console.log(jsonData)
        setrestaurantdata(jsonData?.data);
    }
    return restaurantdata;
}