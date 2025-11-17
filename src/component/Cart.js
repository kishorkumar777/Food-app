import { useDispatch, useSelector } from "react-redux";
import RestroList from "./RestroList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {



    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-black text-white p-2 m-2 rounded-md cursor-pointer" 
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>your cart is empty add items to the cart</h1>}
            <div className="w-6/12 m-auto p-4 text-left">
            <RestroList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;