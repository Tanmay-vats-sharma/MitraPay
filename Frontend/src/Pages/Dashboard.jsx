import React from "react";
import { Navbar } from "../Components/Common/Navbar";
import { Header } from "../Components/Common/header";
import { Balance } from "../Components/Common/Balance&Contacts";
import { Gullak } from "../Components/Common/Gullak";
import { Transactions } from "../Components/Common/Transactions";
import { Add_gullak } from "../Components/Common/Add-Gullak";
function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-8 gap-3 bg-blue-50  p-5 min-h-screen \">
        <div className=" col-span-8 row-span-1 bg-white shadow-md  flex items-center justify-between rounded-lg ">
          <Header></Header>
        </div>
        <div className=" bg-white shadow-2xl rounded-lg col-span-2 row-span-8 p-4">
          <Balance></Balance>
        </div>
        <div className=" col-span-2 bg-white shadow-xl rounded-lg row-span-7  p-4 ">
          <Navbar></Navbar>
        </div>
        <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-3 ">
          <div className="w-[100%] h-[20%]  flex justify-between  items-center p-3">
            <div className="w-[auto] h-[auto] text-xl font-semibold px-2">
              <p>Your Gullaks</p>
            </div>
            <div className="w-[auto] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700">
              <a href="#">
                <p>Veiw All</p>
              </a>
            </div>
          </div>
          <div className="w-[98%] h-[80%]  flex justify-evenly p-3">
            <Gullak></Gullak>
            <Gullak></Gullak>
            <Add_gullak></Add_gullak>
          </div>
        </div>
        <div className="bg-white shadow-lg  border-[1px] flex flex-col items-center rounded-lg  col-span-6 row-span-4">
          <Transactions></Transactions>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
