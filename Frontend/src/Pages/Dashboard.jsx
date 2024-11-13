import React from 'react'
import { Navbar } from '../Components/Common/Navbar'
import { Header } from '../Components/Common/header';
import { Balance } from '../Components/Common/Balance&History';

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-8 gap-3   p-5 min-h-screen \">
        <div className=" col-span-8 row-span-1  flex items-center justify-between  ">
          <Header></Header>
        </div>
        <div className=" bg-[#EFF2FB] rounded-lg col-span-2 row-span-8 p-1">
          <Balance></Balance>
        </div>
        <div className=" col-span-2  row-span-7  p-1 ">
          <Navbar></Navbar>
        </div>
        <div className="bg-[#EFF2FB] rounded-md col-span-6 row-span-3 "></div>
        <div className="bg-[#EFF2FB]   rounded-md  col-span-6 row-span-4">
          4
        </div>
      </div>
    </>
  );
}

export default Dashboard
