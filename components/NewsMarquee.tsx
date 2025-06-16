"use client";
import Marquee from "react-fast-marquee";
import React from "react";

const NewsMarquee = () => {
  return (
    <div className="bg-black border-b border-gray-500 h-12 w-full overflow-hidden font-poppins tracking-wider text-[15px] font-normal flex items-center justify-center">
      <div className="w-full px-8">
        <Marquee
          gradient={false}
          speed={75}
          pauseOnHover={true}
          className="text-white text-[15px]"
        >
          Free Delivery All Over Middle East !
          ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  
          Cash on Delivery Available
        </Marquee>
      </div>
    </div>
  );
};

export default NewsMarquee;
