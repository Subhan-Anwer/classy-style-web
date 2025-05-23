import Image from "next/image";
import React from "react";

const DiscountSection = () => {
  const discountCards = [
    { img: "/premium-ring.jpg", name: "Premium Ring", price: 120, old: 140 },
    { img: "/necklace.jpg", name: "Necklace", price: 120, old: 140 },
    { img: "/bracelet.jpg", name: "Bracelet", price: 130, old: 160 },
    { img: "/cufflink.jpg", name: "Cuff links", price: 135, old: 150 },
  ];

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8">
      <h2 className="text-center font-medium text-4xl sm:text-5xl md:text-7xl font-playfair">
        Get Flat <span className="font-poppins">10%</span> Off
      </h2>
      <h4 className="text-center text-xl sm:text-2xl md:text-4xl font-poppins px-1 font-light mt-1  sm:mt-3">
        Limited-time offer with exclusive collection.
      </h4>

      {/* Cards only 4 */}
      <div className="flex items-center justify-center flex-wrap gap-8 md:mt-20 mt-10">
        {/* Card no 1 */}
        {discountCards.map((item, i) => (
          <div key={i} className="flex flex-col  w-full sm:w-[45%] md:w-[22%]">
            <Image
              src={item.img}
              alt={item.name}
              className="w-full h-auto rounded-[10px] object-cover object-center mb-3 md:mb-5"
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
    </section>
  );
};

export default DiscountSection;
