"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

const tiktokUrl = "https://www.tiktok.com/";
const instagramUrl = "https://www.instagram.com/officialclassystyle";

const CheckoutUs = () => {
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
          className="flex gap-6"
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 35,
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
          className="flex gap-6"
          animate={{
            translateX: ["-50%", "0%"],
          }}
          transition={{
            duration: 35,
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

      {/* <div className="bg-white w-full h-[280px]">
          <div className="container mx-auto">
            <div className="overflow-hidden bg-blue-400">
              <motion.div
                className="flex gap-10 flex-none bg-red-300"
                animate={{
                  translateX: "-50%",
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                  {instaCards.map((card, i) => (
                    <div className="w-auto h-[280px]">
                    <Image
                      key={i}
                      src={card.src}
                      alt={card.alt}
                      height={300}
                      width={300}
                      className="w-[280px] h-full bg-black"
                    />
                    </div>
                  ))}
              </motion.div>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default CheckoutUs;
