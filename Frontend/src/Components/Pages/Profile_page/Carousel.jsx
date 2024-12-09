import React, { useState } from "react";
import Boy from "../../../Assets/boy.png"
import Man from "../../../Assets/man.png"
import woman from "../../../Assets/woman.png"
import old_man from "../../../Assets/old-man.png"
import old_woman from "../../../Assets/old-woman.png"

export function Carousel(){
  const items = [
    {
      id: 1,
      image: Boy,
      label: "Photo 1",
    },
    {
      id: 2,
      image: Man,
      label: "Photo 2",
    },
    {
      id: 3,
      image: woman,
      label: "Photo 3",
    },
    {
      id: 4,
      image: old_man,
      label: "Photo 4",
    },
    {
      id: 5,
      image: old_woman,
      label: "Photo 5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getRelativeItem = (offset) => {
    const index = (activeIndex + offset + items.length) % items.length;
    return items[index];
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative flex items-center space-x-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="text-3xl text-gray-700 hover:text-gray-900"
          aria-label="Previous"
        >
          &lt;
        </button>

        {/* Carousel Slots */}
        <div className="w-32 h-32 rounded-full overflow-hidden  transform transition-all duration-1000 ease-in-out scale-90  brightness-75">
          <img
            src={getRelativeItem(-1).image}
            alt={getRelativeItem(-1).label}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-80"
          />
        </div>
        <div className="w-40 h-40 rounded-full overflow-hidden  transform transition-all duration-1000 ease-in-out scale-110  brightness-100">
          <img
            src={getRelativeItem(0).image}
            alt={getRelativeItem(0).label}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden  transform transition-all duration-1000 ease-in-out scale-90 brightness-75">
          <img
            src={getRelativeItem(1).image}
            alt={getRelativeItem(1).label}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-80"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-3xl text-gray-700 hover:text-gray-900"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
