import RestroCard,{withPromotedLabel} from "./RestroCard";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofresturant, setListOfResturant] = useState([]);
  const [filteredrestro, setFilteredRestro] = useState([]);

  const [searchtext , setSearchText] = useState("");

  const RestroPromotedCard = withPromotedLabel(RestroCard);

  console.log(listofresturant)
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908978&lng=77.5997026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await response.json();
    
    
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  };
  
  
  
    const onlineStatus = useOnlineStatus();
  
    if(onlineStatus === false) return <h1>Looks like you are offline!!, Plz check your Internet ones</h1>
  return listofresturant.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="food-container">
      <div className="flex p-4 m-4">
        <div className="">
          <input className="border border-solid border-black rounded-sm p-1" type="text" placeholder="Search" value={searchtext} onChange={(e)=>{
               setSearchText(e.target.value);
          }} />
          <button className="px-4 py-1.5 bg-green-400 mx-2 rounded-md cursor-pointer" onClick={()=>{
             let filteredtext = listofresturant.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchtext.toLowerCase());
                })
                setFilteredRestro(filteredtext)
                console.log(filteredtext)
          }}>Search</button>
        </div>
        <div className="px-4 py-1.5 bg-gray-300 mx-4 rounded-md cursor-pointer">
          <button
            className="filter cursor-pointer"
            onClick={() => {
              const filetredata = listofresturant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestro(filetredata);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div  className="flex flex-wrap m-4">
        {filteredrestro.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            {
              restro.info.promoted ? (<RestroPromotedCard restrodata={restro}/>):(<RestroCard  restrodata={restro} />)
              
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
