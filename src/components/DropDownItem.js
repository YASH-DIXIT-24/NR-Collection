import { CLOUDINARY_ID } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addToCart} from "../utils/cartSlice"
export default  DropDownItem=({menuItem})=>{
   const dispatch=useDispatch()
   const handleCartItem=()=>{
       dispatch(addToCart(menuItem))
   }
   return(
    <div className="text-left border-b border-gray-400 w-6/4 m-auto">
        <div className="flex justify-between text-left py-2 my-2">
            <div className="w-3/4">
                <span>{menuItem.card.info.name}</span><br></br>
                <span className="text-left py-2 my-4">₹ {menuItem.card.info.price || menuItem.card.info.defaultPrice}</span>
                <p className="py-4 text-xs">{menuItem.card.info.description}</p>
            </div>
            
            <div className="relative h-[170px] w-[190px] hover:scale-110">
                <img className="rounded-lg object-cover w-full h-full" src={CLOUDINARY_ID + menuItem.card.info.imageId} alt="Menu Item" />
                <button className="absolute top-[140px] right-[60px] bg-white hover:bg-green-500 rounded-full p-2 shadow-lg focus:outline-none" onClick={()=>{handleCartItem()}}>
                    <div className="flex">
                    <span className="text-s text-green-500 font-bold">Add</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1 font-bold-50  text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    </div>
                </button>
            </div>

        </div>
    </div>
    )
}