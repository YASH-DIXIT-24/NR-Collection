import {useState,useEffect} from 'react'

const useResData= (API_URL)=>{
    const [restaurants,setRestaurants]=useState([]);
    const [filerRestaurants,setFilterRestaurants]=useState([]);
    const getAllRestaurants=async(API_URL)=>{
        try{
            const data=await fetch(API_URL);
            const jsonData=await data.json();
            let restData=jsonData.data.cards;
            for(let i=0;i<restData.length;i++){
                if((restData[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) !=undefined ){
                    setRestaurants((restData[i].card.card.gridElements['infoWithStyle']['restaurants']))
                    setFilterRestaurants((restData[i].card.card.gridElements['infoWithStyle']['restaurants']))
                    break;
                }
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllRestaurants(API_URL);
    },[])
    
    return [restaurants,filerRestaurants];
}
export default useResData;