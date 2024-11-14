import React from 'react'
import { Navbar } from '../Components/Common/Navbar'
import { Header } from '../Components/Common/header';
import { Balance } from '../Components/Common/Balance&History';

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-8 gap-3 bg-blue-50  p-5 min-h-screen \">
        <div className=" col-span-8 row-span-1 bg-white shadow-sm  flex items-center justify-between rounded-lg ">
          <Header></Header>
        </div>
        <div className=" bg-white shadow-lg rounded-lg col-span-2 row-span-8 p-4">
          <Balance></Balance>
        </div>
        <div className=" col-span-2 bg-white shadow-lg rounded-lg row-span-7  p-4 ">
          <Navbar></Navbar>
        </div>
        <div className="bg-white shadow-current rounded-lg  col-span-6 row-span-3 "></div>
        <div className="bg-white shadow-lg  border-[1px]  rounded-lg  col-span-6 row-span-4">
          
        </div>
      </div>
    </>
  );
}

export default Dashboard
