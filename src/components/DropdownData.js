import { useState } from "react"
import DropDownItem from "./DropDownItem"
export default DropdownData=({item})=>{
    const [isOpen,setIsOpen]=useState(false)
    function onToggle(){
        setIsOpen(!isOpen)
    }
    console.log("this is the item");
    console.log(item);
    return(
        <div className="border my-4">
          <button type="button" className="flex items-center justify-between w-full p-3 font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={onToggle}>
            <span>{item.card.card.title} ({item.card.card.itemCards.length})</span>
            <svg className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
          {isOpen && (
            <div className="p-5 border-t border-gray-200 dark:border-gray-700">
              {(item.card.card.itemCards).map((menuItem)=>(
                  <DropDownItem menuItem={menuItem} />
              ))}
            </div>
          )}
        </div>
    )
}