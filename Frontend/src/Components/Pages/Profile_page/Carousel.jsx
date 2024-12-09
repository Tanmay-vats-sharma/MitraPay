import React, { useState } from "react";
import Boy from "../../../Assets/boy.png";
import Man from "../../../Assets/man.png";
import Woman from "../../../Assets/woman.png";
import OldMan from "../../../Assets/old-man.png";
import OldWoman from "../../../Assets/old-woman.png";
import Icon from "../../Common/Icon";
export function Carousel() {
  const initialItems = [
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
      image: Woman,
      label: "Photo 3",
    },
    {
      id: 4,
      image: OldMan,
      label: "Photo 4",
    },
    {
      id: 5,
      image: OldWoman,
      label: "Photo 5",
    },
  ];

  const [items, setItems] = useState(initialItems);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedItems = [...items];
        updatedItems[activeIndex] = {
          ...updatedItems[activeIndex],
          image: e.target.result, // Use the base64 string
        };
        setItems(updatedItems);
      };
      reader.readAsDataURL(file); // Convert the image to a base64 string
    }
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
        <div className="w-32 h-32 rounded-full overflow-hidden transform transition-all duration-1000 ease-in-out scale-90 brightness-75">
          <img
            src={getRelativeItem(-1).image}
            alt={getRelativeItem(-1).label}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-80"
          />
        </div>
        <div className="relative w-40 h-40  overflow-hidden transform transition-all duration-1000 ease-in-out scale-110 brightness-100">
          {/* Active Image */}
          <img
            src={getRelativeItem(0).image}
            alt={getRelativeItem(0).label}
            className="object-cover transition-all duration-500 ease-in-out opacity-100"
          />
          {/* Edit Button */}
          <button
            className="absolute top-1.5 right-1.5 w-10 h-10 bg-blue-200 text-white rounded-full flex items-center justify-center text-lg shadow-md hover:bg-blue-600"
            aria-label="Edit"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <Icon
              path="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"
              message="Upload Image"
            />
          </button>
          {/* Hidden File Input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden transform transition-all duration-1000 ease-in-out scale-90 brightness-75">
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
}
