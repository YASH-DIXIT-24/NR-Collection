import { CLOUDINARY_ID } from "../utils/constants";
export default  DropDownItem=({menuItem})=>{
   return(
    <div className="text-left  border-b border-gray-400  w-6/4 m-auto transition-transform duration-300 ease-in-out">
        <div className="flex justify-between text-left py-2">
            <div className="w-3/4">
                <span>{menuItem.card.info.name}</span><br></br>
                <span className="py-3 my-4">₹ {menuItem.card.info.price}</span>
                <p className="py-4 text-xs">{menuItem.card.info.description}</p>
            </div>
            
            <div className="hover:scale-110 h-[170px] w-[190px]">
              <img className="rounded-lg object-cover w-full h-full" src={CLOUDINARY_ID+menuItem.card.info.imageId}></img>
            </div>
        </div>
    </div>
    )
}