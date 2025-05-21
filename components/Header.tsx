"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { HiMenu } from "react-icons/hi";
import { IoClose } from 'react-icons/io5'

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Contact", path: "/contact" },
  { title: "My Orders", path: "/orders" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-black shadow-sm">
      <nav className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 py-6 lg:py-4">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/nav-logo-png.png"
              alt="Classy Style Logo"
              width={440}
              height={200}
              className="h-[70px] md:h-[80px] w-auto"
              priority
            />
          </Link>

          {/* Nav Links */}
          <nav
            className="sm:block hidden font-inter md:mt-3 mt-0"
          >
            <ul className="flex flex-row gap-5 md:gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-white sm:text-[17px] text-sm hover:text-white/50 transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="font-inter flex items-center gap-5 md:gap-7 text-white">
            <IoSearch
              size={28}
              className="cursor-pointer hover:text-white/50 transition"
            />
            <FiShoppingCart
              size={26}
              className="cursor-pointer hover:text-white/50 transition"
            />
            <VscAccount
              size={26}
              className="cursor-pointer hover:text-white/50 transition"
            />

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden focus:outline-none"
            >
              <HiMenu size={26} className="text-white" />
            </button>
          </div>

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} sm:hidden`}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <IoClose size={30} className="text-white" />
              </button>
            </div>
            <ul className="flex flex-col items-start gap-6 px-6 mt-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-lg font-medium hover:text-white/50 transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
