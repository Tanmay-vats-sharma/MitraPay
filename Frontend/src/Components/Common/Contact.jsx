import React from "react";
import Profile_pic from "../../assets/Profile_pic.jpeg"

export function Contact(){
  return (
    <div className="flex justify-evenly  h-[18%] w-[100%] hover:bg-blue-100 border-l-4 border-transparent hover:border-indigo-500">
      <div className="w-[20%] h-[100%]   ">
        <div className="h-[100%] w-[100%] overflow-hidden rounded-md  p-1">
          <img src={Profile_pic} alt="" />
        </div>
      </div>
      <div className="w-[60%] h-[100%]  flex flex-col justify-center items-center p-1">
        <div className="w-[90%]  h-[47%] text-[12px] font-semibold">
          <p>Tanmay Sharma</p>
        </div>
        <div className=" w-[90%]  h-[47%] text-[10px] text-gray-400 font-semibold">
          <p>8076917248</p>
        </div>
      </div>
      <div className="w-[25%] h-[100%]  flex flex-col justify-center items-center text-[15px] text-blue-700">
        <p>View</p>
      </div>
    </div>
  );
}