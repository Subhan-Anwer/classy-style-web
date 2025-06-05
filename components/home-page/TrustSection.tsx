"use client";
import { FaTruck, FaBolt, FaGem, FaHeart } from "react-icons/fa";

const TrustBadges = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    text: "Enjoy complimentary shipping on all orders.",
  },
  {
    icon: FaBolt,
    title: "Fast Delivery",
    text: "We ship fast so your special moments never have to wait.",
  },
  {
    icon: FaGem,
    title: "Quality Guarantee",
    text: "Only the finest pieces pass our strict quality checks.",
  },
  {
    icon: FaHeart,
    title: "Made With Love",
    text: "Every item is crafted with care, meaning, and a human touch.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-500">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl mt-5 font-playfair text-center text-white mb-10 tracking-tight">
            Experience Unrivaled <span className="text-[#ffb435]">Quality</span> &{" "}
            <span className="text-[#ffb435]">Trust</span>
            </h2>

            {/* Trust Badges / Key Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-5 text-center cursor-default">
            {TrustBadges.map((badge, index) => (
                <div
                key={index}
                className="flex flex-col items-center p-5 glass rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                <div className="text-[#ffb435] mb-3 text-3xl">
                    {<badge.icon />}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    {badge.title}
                </h3>
                <p className="text-gray-300/80 text-xs font-poppins">
                    {badge.text}
                </p>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default TrustSection;
