import React from 'react'
import { Navbar1, Navbar2, Navbar3 } from '../Components/Common/Navbar'
import Logo from "../Assets/Logo2.png";
import { Header } from '../Components/Common/header';

function Dashboard() {
  return (
    {
      /*<div>*/
    },
    {
      /* <div className="flex bg-gray-100 min-h-screen">*/
    },
    {
      /* Side Navigation Bar */
    },
    {
      /*<Navbar2></Navbar2>
        <div className="flex-grow h-screen text-gray-800 ml-0 sm:ml-0 ">
          <header className="flex justify-between w-[100%] items-center h-16 px-2 sm:px-10 bg-white">
            <div className=" w-[55%]">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
            </div> */
    },
    {
      /* <div className="flex flex-shrink-0 items-center width-[100%]">
              <button className="inline-flex wi-[20%] items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">Grace Simmons</span>
                  <span className="text-sm text-gray-600">Lecturer</span>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user profile photo"
                    className="h-full w-full object-cover"
                  />
                </span>
                <svg */
    },
    {
      /* aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden sm:block h-6 w-6 text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button> */
    },
    {
      /* <div className="border-l pl-3 ml-3 space-x-1">
               
              </div>
              <div>
                
              </div>
            </div> */
    },
    {
      /* </header> */
    },
    {
      /* <div className="h-[calc(100%-4rem)] flex flex-col justify-evenly">
       */
    },
    {
      /* </div> */
    },
    {
      /* <div className="h-[100%] flex ">
              <div className="h-full w-[40%] flex justify-center items-center  ">
                <div className="h-[90%] bg-white w-[75%] flex flex-col justify-evenly items-center rounded-md">
                  <div className="h-[19%] w-full flex flex-col items-center justify-evenly   ">
                    <div className="h-[100%] w-[19%] overflow-hidden rounded-full border-purple-500 border-2">
                      <img src="" alt="" />
                    </div>
                    <div className="text-xl font-semibold">Hi, Naman Malik</div>
                  </div>
                  <div className="h-[15%] w-full flex flex-col items-center justify-center border-purple-500 ">
                    <div className="text-slate-800 text-base font-normal">
                      Your balance is
                    </div> */
    },
    {
      /* <div className="text-4xl font-semibold">₹5000</div>
                  </div>
                  <div className="h-[20%] w-full flex justify-evenly items-center ">
                    <div className="h-[120%] w-[40%] flex flex-col items-left justify-evenly pl-3 border-2">
                      <div className="text-4xl flex flex-col justify-center items-center text-center w-10 h-10 bg-[#68a3f0]  rounded-full">
                        <p className="mt-[-10px] text-white">+</p>
                      </div>
                      <div className="text-xl font-semibold">Add Money</div>
                    </div>
                    <div className="h-[120%] w-[40%] flex items-left justify-evenly flex-col pl-3 border-2">
                      <div className="text-4xl font-bold flex flex-col justify-center items-center text-center w-10 h-10 bg-[#68a3f0]  rounded-full">
                        <p className="mt-[-10px] text-white">↑</p>
                      </div>
                      <div className="text-xl font-semibold">Withdraw</div>
                    </div> */
    },
    {
      /* </div>
                  <div className="h-[8%] w-full flex items-center justify-center border-purple-500 ">
                    <button className="h-[100%] w-[90%] rounded-md   text-white bg-blue-600  hover:bg-blue-700 focus:bg-blue-700">
                      Continue ⟶
                    </button>
                  </div>
                </div>
              </div> */
    },
    {
      /* <div className="h-full w-[60%]  flex justify-center flex-col items-start">
                <div className="h-[91%] w-[95%] bg-white flex justify-evenly flex-col items-center rounded-sm p-2">
                  <div className="h-[40%] w-[90%] border-2 bg-gray-100 rounded-sm"></div>
                  <div className="h-[55%] w-[90%] border-2 rounded-sm bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
    },
    {
      /*</div>*/
    },
    (
      <>
        <div
          className="grid grid-cols-10 grid-rows-8 gap-3   p-2 min-h-screen \">
          <div className=" col-span-8 row-span-1 flex items-center justify-between  ">
            <Header></Header>
          </div>
          <div className="border-2 border-red-500 col-span-2 row-span-8">2</div>
          <div className="border-2 border-red-500 col-span-2  row-span-7">
            3
          </div>
          <div className="border-2 border-red-500 col-span-6 row-span-3 "></div>
          <div className="border-2 border-red-500  col-span-6 row-span-4">
            4
          </div>
        </div>
      </>
    )
  );
}

export default Dashboard
