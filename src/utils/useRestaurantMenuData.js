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
        let data= await fetch(menuApiUrl+resId);
        let jsonData= await data.json();
        setrestaurantdata(jsonData?.data);
    }
    return restaurantdata;
}