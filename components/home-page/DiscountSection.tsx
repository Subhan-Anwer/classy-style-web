import Image from "next/image";
import Link from "next/link";
import React from "react";

const DiscountSection = () => {
  const discountCards = [
    {
      img: "/premium-ring.jpg",
      name: "Premium Rings",
      price: 120,
      old: 140,
      src: "/categories/rings",
    },
    {
      img: "/necklace.jpg",
      name: "Necklaces",
      price: 120,
      old: 140,
      src: "/categories/necklaces",
    },
    {
      img: "/bracelet.jpg",
      name: "Bracelets",
      price: 130,
      old: 160,
      src: "/categories/bracelets",
    },
    {
      img: "/cufflink.jpg",
      name: "Cuff links",
      price: 135,
      old: 150,
      src: "/categories/cufflinks",
    },
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
            <Link href={item.src}>
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-auto rounded-[10px] object-cover object-center mb-3 md:mb-5"
                width={300}
                height={300}
              />
            </Link>
            <Link href={item.src}>
              <h5 className="font-playfair text-[28px] md:text-3xl font-bold">
                {item.name}
              </h5>
            </Link>
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
