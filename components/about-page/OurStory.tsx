import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="text-black lg:px-10 md:px-8 px-2 my-10">
      <div className="container mx-auto min-h-[700px] flex md:flex-row flex-col items-center gap-20 justify-between">
        {/* Text */}
        <div className="flex flex-col gap-10 md:w-3/5 w-full text-center md:text-left sm:px-0 px-4">
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-playfair font-semibold">
            Our Story
          </h2>

          <p className="md:text-2xl sm:text-xl text-base font-poppins font-normal">
            Inspired by passion for elegant beauty. Classy Style began with a
            simple idea, to create personalized jewelry with beauty & classic
            Looks.
          </p>

          <p className="md:text-2xl sm:text-xl text-base font-poppins font-normal">
            From engraved pieces to elegant designs, we bring timeless beauty to
            your doorstep, wherever you are.
          </p>

          {/* Stats */}
          <div className="flex  sm:mt-6 mt-2">
            <div className="font-poppins flex flex-col w-1/3">
              <h4 className="font-medium md:text-6xl sm:text-5xl text-3xl">90%</h4>
              <p className="font-normal md:text-xl sm:text-base text-sm">Jewelry Items</p>
            </div>
            <div className="font-poppins flex flex-col w-1/3">
              <h4 className="font-medium md:text-6xl sm:text-5xl text-3xl">12k</h4>
              <p className="font-normal md:text-xl sm:text-base text-sm">Happy Customers</p>
            </div>
            <div className="font-poppins flex flex-col w-1/3">
              <h4 className="font-medium md:text-6xl sm:text-5xl text-3xl">2+</h4>
              <p className="font-normal md:text-xl sm:text-base text-sm">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-2/5 w-full flex justify-center items-center">
          <Image
            src="/image-of-studio.jpg"
            alt="About Us"
            width={500}
            height={650}
            className="w-full h-auto object-cover object-center rounded-[10px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
