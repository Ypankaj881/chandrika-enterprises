"use client";

import Slider from "react-slick";

export default function TopStickyHeader() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 12000,          // smooth continuous scroll
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
  };

  return (
    <div
      className="h-[55px] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #122247 0%, #32B993 100%)",
      }}
    >
      <Slider {...settings} className="w-full">
        
        {/* Slide 1 */}
        <div className="flex justify-center items-center gap-4">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            NEW
          </span>
          <p className="text-white text-sm md:text-base font-semibold inline-block px-2 tracking-widest whitespace-nowrap">
            🚀 New Branches Coming Soon
          </p>
           <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            NEW
          </span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            NEW
          </span>
          <p className="text-white text-sm md:text-base font-semibold inline-block tracking-widest px-2 whitespace-nowrap">
            🚀 New Branches Coming Soon
          </p>
           <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            NEW
          </span>
        </div>

        {/* Slide 2 */}
        {/* <div className="flex justify-center items-center gap-4">
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
            UPDATE
          </span>
          <p className="text-white text-sm md:text-base font-semibold tracking-widest whitespace-nowrap">
            🏬 Second Outlet Opening Next Month
          </p>
        </div> */}

      </Slider>
    </div>
  );
}
