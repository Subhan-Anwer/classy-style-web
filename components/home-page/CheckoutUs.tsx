"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const tiktokUrl = "https://www.tiktok.com/";
const instagramUrl = "https://www.instagram.com/officialclassystyle";

const instaCards = [
  { src: "/insta-post-1.jpg", alt: "Customizable Ring with Name" },
  { src: "/insta-logo.png", alt: "Customizable Ring with Name" },
  { src: "/insta-post-2.jpg", alt: "Customizable Ring with Name" },
  { src: "/insta-logo.png", alt: "Customizable Ring with Name" },
  { src: "/insta-post-1.jpg", alt: "Customizable Ring with Name" },
  { src: "/insta-logo.png", alt: "Customizable Ring with Name" },
  { src: "/insta-post-2.jpg", alt: "Customizable Ring with Name" },
  { src: "/insta-logo.png", alt: "Customizable Ring with Name" },
];

const tiktokCards = [
  { src: "/tiktok-post-1.jpg", alt: "Customizable Ring with Name" },
  { src: "/tiktok-logo.png", alt: "Customizable Ring with Name" },
  { src: "/tiktok-post-2.jpg", alt: "Customizable Ring with Name" },
  { src: "/tiktok-logo.png", alt: "Customizable Ring with Name" },
  { src: "/tiktok-post-1.jpg", alt: "Customizable Ring with Name" },
  { src: "/tiktok-logo.png", alt: "Customizable Ring with Name" },
  { src: "/tiktok-post-2.jpg", alt: "Customizable Ring with Name" },
  { src: "/tiktok-logo.png", alt: "Customizable Ring with Name" },
];

const CheckoutUs = () => {

  const scrollSpeed = useMemo(() => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768 ? 6 : 35;
  }
  return 35; // default for SSR or unknown
}, []);

  return (
    <section className="w-full py-24 px-2 sm:px-6 lg:px-8 flex flex-col items-center mb-32">
      <h2 className="text-center font-medium text-[40px] sm:text-5xl md:text-7xl font-playfair mb-16">
        Checkout Us On
        <br />
        Instagram & Tiktok
      </h2>

      {/* Instagram Scroll Animation */}
      <div className="w-full overflow-hidden">
        <motion.div
         key={scrollSpeed} 
          className="flex gap-6"
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: scrollSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...instaCards].map((card, i) => {
            const isCustomCard = i % 2 === 1;
            return (
              <Link
                href={instagramUrl}
                target="_blank"
                key={i}
                className="min-w-[280px] h-[280px] flex-shrink-0 rounded-[10px] overflow-hidden cursor-pointer"
              >
                {isCustomCard ? (
                  <div className="w-full h-full insta-gradient flex flex-col justify-center items-center text-white p-4 rounded-[10px]">
                    <Image
                      src="/insta-logo.png"
                      alt="Instagram Logo"
                      width={130}
                      height={130}
                      className="mb-4"
                    />
                    <p className="text-[22px] font-inter">
                      @officialclassystyle
                    </p>
                  </div>
                ) : (
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={280}
                    height={280}
                    className="w-[280px] h-[280px] object-cover rounded-xl"
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>

      {/* Tiktok Scroll Animation */}
      <div className="w-full overflow-hidden mt-6">
        <motion.div
         key={scrollSpeed} 
          className="flex gap-6"
          animate={{
            // x: "-50%",
            translateX: ["-50%", "0%"],
          }}
          transition={{
            duration: scrollSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...tiktokCards, ...tiktokCards, ...tiktokCards].map((card, i) => {
            const isCustomCard = i % 2 === 1;
            return (
              <Link
                href={tiktokUrl}
                target="_blank"
                key={i}
                className="min-w-[280px] h-[280px] flex-shrink-0 rounded-[10px] overflow-hidden cursor-pointer"
              >
                {isCustomCard ? (
                  <div className="w-full h-full bg-black flex flex-col justify-center items-center text-white p-4 rounded-[10px]">
                    <Image
                      src="/tiktok-logo.png"
                      alt="Tiktok Logo"
                      width={130}
                      height={130}
                      className="mb-3"
                    />
                    <p className="text-[22px] font-inter">
                      @officialclassystyle
                    </p>
                  </div>
                ) : (
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={280}
                    height={280}
                    className="w-[280px] h-[280px] object-cover rounded-xl"
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CheckoutUs;
