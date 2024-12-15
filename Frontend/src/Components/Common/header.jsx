import React from "react";
import Logo from "../../Assets/Logo2.png";
import Icon from "./Icon";
import { useStateContext } from "../../StateProvider/StateProvider";

export function Header() {
  const { user } = useStateContext();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if (currentHour < 12 && currentHour >= 6) {
      return 'Good Morning';
    } else if (currentHour < 18 && currentHour >= 12) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <>
      <div className=" col-span-8 row-span-1 bg-white shadow-md  flex items-center justify-between rounded-lg ">
        <div className="flex items-center justify-start  h-[100%] w-[24%]">
          <img src={Logo} alt="Logo" class="h-12 w-20%" />
          <h1 className="text-3xl font-bold tracking-wide text-[#FDF209]">
            MitraPay
          </h1>
        </div>

        <div className="h-[100%] w-[75%] flex justify-evenly items-center">
          <div className=" w-[65%] h-[85%] flex flex-col justify-center items-start  rounded-md">
            <div className="text-black h-[40%] text-[21px] font-bold   ml-2">
              <h1>Hello! {user.name}</h1>
            </div>
            <div className="h-[40%] text-gray-600 ml-2">
              <p>{getGreeting()}</p>
            </div>
          </div>
          <div className=" h-[100%] flex items-center justify-center">
            <Icon
              path="M31.25 35.4167h10.4165l-2.9279-2.9279A4.2447 4.2447 0 0137.5 29.1208V22.9167a12.5042 12.5042 0 00-8.3333-11.7864V10.4167a4.1667 4.1667 0 10-8.3333 0v1.736C15.9708 12.9271 12.5 17.475 12.5 22.9167v6.5802c0 1.1229-.4486 2.2042-1.2396 2.9863L8.3333 35.4167h10.4165m12.5 0v2.0833a6.25 6.25 0 11-12.5 0v-2.0833m12.5 0H18.75"
              message="Notification"
              pingEffect={true}
            />
          </div>
          <div className="w-[30%] h-[100%]  flex flex-col justify-center items-center">
            <button className="inline-flex px-5 py-3  text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Manage Transactions
            </button>
          </div>
        </div>
        
       
      </div>
    </>
  );
}

