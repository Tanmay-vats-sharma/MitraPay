import React, { useState } from "react";
import Pin from "../../../assets/pin.png"
import Mute from "../../../assets/Mute.png"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        className="text-2xl focus:outline-none flex items-center h-[100%]"
        onClick={toggleDropdown}
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-50  hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 items-center "
          >
            <span className="inline-flex justify-center items-center h-[100%] ">
              <svg
                className="w-5 h-5 flex items-center"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-md tracking-wide truncate h-[100%] flex items-center">
              View Profile
            </span>
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-50  hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 items-center "
          >
            <span className=" h-[100%] ">
              <img src={Pin} alt="" className="h-[20px]" />
            </span>
            <span className="ml-3 text-md tracking-wide truncate h-[100%] flex items-center">
              Pin
            </span>
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-50  hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 items-center "
          >
            <span className=" h-[100%]  ">
              <img src={Mute} alt="" className="h-[24px]" />
            </span>
            <span className="ml-1 text-md tracking-wide truncate h-[100%] flex items-center">
              Mute
            </span>
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-50  hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 items-center "
          >
            <span className=" h-[100%]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="23px"
                height="20px"
              >
                <path d="M 15 3 C 11.783059 3 8.8641982 4.2807926 6.7070312 6.3496094 A 1.0001 1.0001 0 0 0 6.3476562 6.7070312 C 4.2793766 8.8641071 3 11.783531 3 15 C 3 21.615572 8.3844276 27 15 27 C 18.210007 27 21.123475 25.724995 23.279297 23.664062 A 1.0001 1.0001 0 0 0 23.662109 23.28125 C 25.724168 21.125235 27 18.210998 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 17.40637 24.155173 19.609062 22.746094 21.332031 L 8.6679688 7.2539062 C 10.390938 5.8448274 12.59363 5 15 5 z M 7.2539062 8.6679688 L 21.332031 22.746094 C 19.609062 24.155173 17.40637 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 12.59363 5.8448274 10.390938 7.2539062 8.6679688 z" />
              </svg>
            </span>
            <span className="ml-2 text-md tracking-wide truncate h-[100%] flex items-center">
              Block
            </span>
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-50  hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 items-center "
          >
            <span className=" h-[100%]  ml-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20px"
                height="20px"
              >
                <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z" />
              </svg>
            </span>
            <span className="ml-2 text-md tracking-wide truncate h-[100%] flex items-center">
              Delete
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
