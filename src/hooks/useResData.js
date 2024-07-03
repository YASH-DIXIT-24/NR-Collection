import {useState,useEffect} from 'react'

const useResData= (API_URL)=>{
    const [restaurants,setRestaurants]=useState([]);
    const [filerRestaurants,setFilterRestaurants]=useState([]);
    const getAllRestaurants=async(API_URL)=>{
        try{
            const data=await fetch(API_URL);
            const jsonData=await data.json();
            let restData=jsonData.data.cards;
            console.log(restData)
            for(let i=0;i<restData.length;i++){
                if((restData[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) !=undefined ){
                    console.log((restData[i].card.card.gridElements['infoWithStyle']['restaurants']))
                    setRestaurants((restData[i].card.card.gridElements['infoWithStyle']['restaurants']))
                    setFilterRestaurants((restData[i].card.card.gridElements['infoWithStyle']['restaurants']))
                    break;
                }
            }
        
          

            // console.log((jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants).length)
            // setRestaurants(jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            // setFilterRestaurants(jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        }catch{
      
            console.log("some error occurred")
        }
    }
    useEffect(()=>{
        getAllRestaurants(API_URL);
    },[])
    
    return [restaurants,filerRestaurants];
}
export default useResData;