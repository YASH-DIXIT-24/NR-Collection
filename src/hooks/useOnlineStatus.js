import { useState } from "react"
import { useState,useEffect } from "react";
const onlineStatus = () => {
   const [isOnline,setIsOnline]=useState(true);

   useEffect(()=>{
     window.addEventListener("online",()=>{
        setIsOnline(true);
     })
     window.addEventListener("offline",()=>{
        setIsOnline(false);
     })
   },[])

   return isOnline
}

export default onlineStatus;