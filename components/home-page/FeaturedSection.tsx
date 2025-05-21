import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  const discountCards = [
    { img: "/premium-ring.jpg", name: "Premium Ring", price: 120, old: 140 },
    { img: "/necklace.jpg", name: "Necklace", price: 120, old: 140 },
    { img: "/bracelet.jpg", name: "Bracelet", price: 130, old: 160 },
    { img: "/cufflink.jpg", name: "Cuff links", price: 135, old: 150 },
  ];

  return (
    <section className="w-full py-24 px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 className="text-center font-medium text-[40px] sm:text-5xl md:text-7xl font-playfair mb-12">
        Featured Section
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl">
        {/* Long Image */}
        <div className="flex flex-col lg:w-[40%] w-full h-auto">
          <Image
            src={"/necklace-2.jpg"}
            alt="necklace-2"
            width={800}
            height={1200}
            className="w-full h-full  object-cover object-center rounded-2xl"
          />

          <div className="mt-3">
            <h5 className="font-playfair text-[28px] md:text-3xl font-normal">
              Name Necklace
            </h5>
            <div className="flex gap-2.5 items-center mt-0 md:mt-3">
              <p className="font-inter text-lg md:text-xl tracking-[1px]">
                SAR 170
              </p>
              <p className="font-inter text-sm md:text-base text-[#747474] line-through">
                SAR 210
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 flex-wrap gap-6 sm:gap-8 ">
          {discountCards.map((item, i) => (
            <div key={i} className="flex flex-col">
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-auto rounded-[10px] object-cover object-center mb-3 "
                width={300}
                height={300}
              />
              <h5 className="font-playfair text-[28px] md:text-3xl font-normal">
                {item.name}
              </h5>
              <div className="flex gap-2.5 items-center mt-0 md:mt-3">
                <p className="font-inter text-lg md:text-xl tracking-[1px]">
                  SAR {item.price}
                </p>
                <p className="font-inter text-sm md:text-base text-[#747474] line-through">
                  SAR {item.old}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
