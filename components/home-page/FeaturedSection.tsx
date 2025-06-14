"use client";

import useCurrencyStore from "@/store/currencyStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FeaturedSection = () => {
  const discountCards = [
    {
      img: "/f-ring.jpg",
      name: "Premium Ring",
      price: 120,
      old: 140,
      link: "https://classystyle.vercel.app/products/eternal-bond-name-rings-personalized-for-him-and-her",
    },
    {
      img: "/f-necklace.jpg",
      name: "Necklace",
      price: 120,
      old: 140,
      link: "https://classystyle.vercel.app/products/name-glow-custom-necklace",
    },
    {
      img: "/f-bracelet.jpg",
      name: "Bracelet",
      price: 130,
      old: 160,
      link: "https://classystyle.vercel.app/products/name-bloom-custom-bracelet",
    },
    {
      img: "/f-cufflink.jpg",
      name: "Cuff links",
      price: 135,
      old: 150,
      link: "https://classystyle.vercel.app/products/classic-monogram-cufflinks",
    },
  ];

  const currency = useCurrencyStore((state) => state.currency);
    const [hydrated, setHydrated] = useState(false);
  
    // Wait for localStorage to hydrate (for SSR safety)
    useEffect(() => {
      setHydrated(true);
    }, []);
  
    if (!hydrated) return null;

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
                {currency} 170
              </p>
              <p className="font-inter text-sm md:text-base text-[#747474] line-through">
                {currency} 210
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 flex-wrap gap-6 sm:gap-8 ">
          {discountCards.map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="flex flex-col">
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
                    {currency} {item.price}
                  </p>
                  <p className="font-inter text-sm md:text-base text-[#747474] line-through">
                    {currency} {item.price * 1.1}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
