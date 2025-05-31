import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[410px] h-auto flex flex-col items-center bg-black">
      <div className="mx-auto w-full px-6 my-8">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 px-4 py-6 lg:py-8">
          <div className="flex flex-col mx-auto ">
            {/* Logo */}
            <Image
              src={"/footer-logo.png"}
              alt="Classy Style logo"
              width={310}
              height={140}
              className="mx-auto lg:mx-0 w-[311px] h-[139px] object-contain object-center"
            />
            <p className="text-center md:text-left font-inter text-md text-white font-light opacity-90 pl-3">
              Timeless elegance in every piece. Luxury handcrafted jewelry
              designed to shine.
            </p>
          </div>

          {/* Links Parent Div */}
          <div className="mx-auto md:mt-9 mt-6 flex sm:flex-row flex-col items-start justify-between sm:gap-20 gap-10 my-6 md:my-0">
            {/* Useful links */}
            <div className="mx-auto flex flex-col items-center sm:items-start text-center sm:text-left w-auto md:-w-32">
              <h2 className="mb-6 text-base md:text-lg font-poppins font-semibold tracking-wide text-white uppercase dark:text-white">
                Useful Links
              </h2>
              <ul className="text-white font-normal font-poppins ">
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Shop
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore links */}
            <div className="mx-auto flex flex-col items-center sm:items-start text-center sm:text-left w-auto md:min-w-32">
              <h2 className="mb-6 text-base md:text-lg font-poppins font-semibold tracking-wide text-white uppercase dark:text-white">
                Explore More
              </h2>
              <ul className="text-white  font-normal font-poppins ">
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Rings
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Bracelets
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Necklace
                  </Link>
                </li>
                <li className="mb-1 md:mb-2">
                  <Link
                    href="#"
                    className="text-sm md:text-base hover:underline"
                  >
                    Cufflinks
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media, phone number */}
          <div className="flex flex-col items-center justify-center gap-4 text-white mx-auto">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl">
              Connect With Us
            </h3>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-2 sm:gap-1">
              <Image
                src={"/icons/facebook.svg"}
                alt="Facebook"
                width={33}
                height={33}
                className="w-[25px] sm:w-[33px] h-auto object-cover object-center"
              />
              <Link href="https://instagram.com/officialclassystyle">
              <Image
                src={"/icons/instagram.svg"}
                alt="Instagram"
                width={33}
                height={33}
                className="w-[25px] sm:w-[33px] h-auto object-cover object-center"
              />
              </Link>
              <Image
                src={"/icons/tiktok.svg"}
                alt="Tiktok"
                width={28}
                height={28}
                className="w-[23px] h-auto object-contain object-center"
              />
              <Link href="https://wa.me/+971543638507">
                <Image
                  src={"/icons/whatsapp.svg"}
                  alt="WhatsApp"
                  width={33}
                  height={33}
                  className="w-[25px] sm:w-[33px] h-auto object-cover object-center"
                />
              </Link>
            </div>
            <Link href="https://wa.me/+971543638507">
              <p className="font-poppins text-base md:text-lg">
                +971-54-363-8507
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Credit Part */}
      <div className="w-full h-[92px] self-end bottom-0 flex items-center justify-center border-t border-[#B1B1B1] px-3">
        <p className="text-white text-center font-poppins font-light text-sm sm:text-base sm:leading-3 leading-6">
          Created by{" "}
          <Link href="https://subhan-portfolio.vercel.app/">
            <span className="font-medium underline opacity-90 sm:opacity-100">
              Subhan
            </span>
          </Link>{" "}
          - Powered by{" "}
          <Link href="https://subhan-portfolio.vercel.app/">
            <span className="font-medium underline opacity-90 sm:opacity-100">
              Social Pulse
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
