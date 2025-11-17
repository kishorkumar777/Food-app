import { useContext, useState } from "react";
import { Logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    const [btn , setBtn] = useState("Login")
    return (
        <div className="flex justify-between  bg-green-100">
            <div className="w-32 ">
                <img src={Logo_url}/>
            </div>
            <div className="flex items-center">
                <ul className="flex text-lg items-center">
                    <li className="px-4">Online Status: {onlineStatus ? "✅ Online" : "❌ Offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/cart" >Cart ({cartItems.length})</Link></li>
                    <li className="px-4 items-center"><button className="px-4 py-1.5 bg-gray-300 rounded-md cursor-pointer" onClick={()=>{
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }}>{btn}</button></li>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;