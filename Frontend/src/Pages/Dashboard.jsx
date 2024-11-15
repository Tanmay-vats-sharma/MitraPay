import React from 'react'
import { Navbar } from '../Components/Common/Navbar'
import { Header } from '../Components/Common/header';
import { Balance } from '../Components/Common/Balance&History';
import  Add_money  from "../Assets/Add_money.png";

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
            <div className="w-[auto] h-[auto] text-xl font-semibold">
              <p>Your Gullaks</p>
            </div>
            <div className="w-[auto] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700">
              <a href="#">
                <p>Veiw All</p>
              </a>
            </div>
          </div>
          <div className="w-[98%] h-[80%] border-2 flex justify-around p-1">
            <div className="h-[100%] w-[32%] border-2 bg-slate-100">
              <div className="h-[100%] w-full flex flex-col items-center  p-1  ">
            <div className="h-[70%] w-[30%] overflow-hidden rounded-full border-2 ">
              <img src={Add_money} alt="" />
            </div>
          </div>
            </div>
            <div className="h-[100%] w-[32%] border-2"></div>
            <div className="h-[100%] w-[32%] border-2"></div>
          </div>
        </div>
        <div className="bg-white shadow-lg  border-[1px]  rounded-lg  col-span-6 row-span-4"></div>
      </div>
    </>
  );
}

export default Dashboard
