import { useState } from "react";
import RestroList from "./RestroList";

const RestroCategory = ({data,showlist,setShowIndex}) => {
//    console.log(data)

  
  
  const handleshow=()=>{
        // setShowList(!showlist)
        setShowIndex();
  }
    return (
        <div>
            <div  className="w-6/12 m-auto p-4 my-2 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleshow}>
              <span className="font-bold">
                {data?.title} ({data?.itemCards?.length}
                )
              </span>
              <span>⬇️</span>
            </div>
            {
              showlist && <RestroList items={data?.itemCards}/>
            }
            
          </div>
        </div>
    )
}

export default RestroCategory;