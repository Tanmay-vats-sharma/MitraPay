import React from "react";

export default function Icon({ path, message, pingEffect = false}) {
    return (
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full group">
            {pingEffect && (
                <>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                </>
            )}
            <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 50 50"
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={path}
                />
            </svg>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                {message}
            </div>
        </button>
    );
}