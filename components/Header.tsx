"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import useBasketStore from "@/store/store";
import SearchOverlay from "./searchBarOverlay";
import { useAuth } from "@/context/AuthContext";
import Login from "./Login";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Contact", path: "/contact" },
  { title: "My Orders", path: "/orders/auth-check" },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Enable "/" keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user } = useAuth();

  return (
    <>
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
            <nav className="sm:block hidden font-inter md:mt-3 mt-0">
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
                onClick={() => setShowSearch(true)}
                className="cursor-pointer hover:text-white/50 transition"
              />

              <Link href="/cart" className="relative">
                <span
                  className={`absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ${itemCount === 0 ? "hidden" : ""}`}
                >
                  {itemCount}
                </span>
                <FiShoppingCart
                  size={26}
                  className="cursor-pointer hover:text-white/50 transition"
                />
              </Link>

              {user ? (
                <div className="flex items-center space-x-2">
                  <Image
                    src={user.photoURL || "/default-user.png"}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover object-center"
                    width={32}
                    height={32}
                  />
                  <div className="sm:block hidden text-xs">
                    <p className="text-gray-400">Welcome Back</p>
                    <p className="font-bold">{user.displayName || "Dear User"}!</p>
                  </div>
                </div>
              ) : (
                <Login />
              )}

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
                      className="text-white text-lg font-inter font-medium hover:text-white/50 transition-all duration-300"
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

      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
    </>
  );
};

export default Header;
