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
         <Header></Header>
         <Balance></Balance>
        <Navbar></Navbar>
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
