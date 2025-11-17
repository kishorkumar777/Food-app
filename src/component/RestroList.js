import { useDispatch } from "react-redux";
import { restro_img } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestroList = ({ items }) => {


  // console.log(items);
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
      dispatch(addItem(item))
  }
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 border-b-2 border-b-gray-300 flex justify-between"
        >
          <div className="w-9/12">
            <span className="text-sm">{item?.card?.info?.name}</span>
            <span className="text-sm">
              {" "}
              - ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>

            <p className="text-xs py-2">{item?.card?.info?.description}</p>
          </div>
          <div className="relative w-3/12 flex justify-center">
            <img
              className="w-36 p-4 rounded-lg"
              src={restro_img + item?.card?.info?.imageId}
              alt="restaurant"
            />
            <button className="absolute bottom-2 bg-black text-white rounded-md px-4 py-1 cursor-pointer"
             onClick={()=>handleAddItem(item)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroList;
