import React, { useEffect, useState } from "react";
import { menumockdata } from "../utils/menumockdata";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import RestroList from "./RestroList";
import RestroCategory from "./RestroCategory";

function RestroMenu() {
  const [resinfo, setResInfo] = useState(null);
  const [showindex, setShowIndex] = useState(0);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setResInfo(menumockdata);
    // console.log("Mock data loaded:", menumockdata);
  };

  if (!resinfo) return <Skeleton />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.data?.cards?.[2]?.card?.card?.info;

  const category =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(category);

  return (
    <div>
      <div className="w-full text-center">
        <h1 className="py-2 font-bold">{name}</h1>
        <p className="font-bold">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div>
        {category.map((item,index) => (
             <RestroCategory key={item?.card?.card?.title} data={item?.card?.card} showlist={index === showindex && true} setShowIndex = {()=>setShowIndex(index)}/>
        ))}
      </div>
    </div>
  );
}

export default RestroMenu;
