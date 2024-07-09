import { useSelector } from "react-redux"
import { CLOUDINARY_ID } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
export default Cart=()=> {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (    
        <div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg absolute top-[105px] w-8/12 left-[17%]">
            <h3 className="text-xl font-semibold mb-4">Cart</h3>
            {(cartItems.length>0)?cartItems.map((item) => (
                 (<div className="cart-items space-y-4 mx-auto w-full my-3">
                    <div className="cart-item flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center w-3/4">
                        <img className="w-16 h-16 rounded-lg object-cover" src={CLOUDINARY_ID + item.card.info.imageId} alt="Item Name" />
                        <div className="ml-4">
                        <h4 className="text-lg font-medium">{item.card.info.name}</h4>
                        <p className="text-gray-600">{item.card.info.description}</p>
                        </div>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>)
            )):(<h3 className="text-lg font-medium">Cart is Empty</h3>)}
            
            <button className="mt-6 w-1/6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600" onClick={handleClearCart}>
                Clear Cart
            </button>
        </div>

    )
}