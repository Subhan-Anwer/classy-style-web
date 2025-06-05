"use client";
// import { useState, useEffect, useRef } from "react";
import {
    FaTruck ,
    FaBolt,
    FaGem,
    FaHeart,
//   FaLock,
//   FaShieldAlt,
//   FaHandshake,
//   FaChevronLeft, // for testimonials
//   FaChevronRight, // for testimonials
//   FaStar, // for testimonials
//   FaStarHalfAlt, // for testimonials
} from "react-icons/fa";

interface Testimonial {
  text: string;
  author: string;
  stars: number;
}

// const testimonials: Testimonial[] = [
//   {
//     text: "The bespoke necklace is simply breathtaking. The attention to detail is unparalleled, making it truly one-of-a-kind.",
//     author: "Isabella C.",
//     stars: 5,
//   },
//   {
//     text: "Impeccable service and an absolutely stunning piece. The brilliance of the diamonds is captivating. A true treasure.",
//     author: "David L.",
//     stars: 2.5,
//   },
//   {
//     text: "My engagement ring from here is beyond perfect. The quality and elegance are evident, and the customer experience was seamless.",
//     author: "Sofia P.",
//     stars: 5,
//   },
//   {
//     text: "Absolutely delighted with my purchase. The craftsmanship is superb, and it arrived so quickly. A truly luxurious experience.",
//     author: "Michael B.",
//     stars: 4.5,
//   },
// ];

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
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to display a specific slide and update the active dot
  //   const showSlide = (n: number) => {
  //     let newSlideIndex = n;
  //     if (newSlideIndex >= testimonials.length) {
  //       newSlideIndex = 0; // Loop back to the first slide
  //     } else if (newSlideIndex < 0) {
  //       newSlideIndex = testimonials.length - 1; // Loop to the last slide
  //     }
  //     setCurrentSlide(newSlideIndex);
  //   };

  // Function to advance to the next slide
  //   const nextSlide = () => {
  //     showSlide(currentSlide + 1);
  //   };

  // Function to go back to the previous slide
  //   const prevSlide = () => {
  //     showSlide(currentSlide - 1);
  //   };

  // Effect for auto-sliding and cleanup
  //   useEffect(() => {
  //     // Start the auto-slide interval
  //     const startAutoSlide = () => {
  //       // Clear any existing interval to prevent multiple timers
  //       if (slideIntervalRef.current) {
  //         clearInterval(slideIntervalRef.current);
  //       }
  //       slideIntervalRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  //     };

  //     startAutoSlide(); // Start auto-slide on component mount

  //     // Cleanup function: clear the interval when the component unmounts
  //     return () => {
  //       if (slideIntervalRef.current) {
  //         clearInterval(slideIntervalRef.current);
  //       }
  //     };
  //   }, [currentSlide]); // Re-run effect when currentSlide changes to reset timer

  // Render star icons based on the star rating
  //   const renderStars = (stars: number) => {
  //     const fullStars = Math.floor(stars);
  //     const hasHalfStar = stars % 1 !== 0;
  //     const starIcons = [];

  //     for (let i = 0; i < fullStars; i++) {
  //       starIcons.push(<FaStar key={`full-${i}`} />);
  //     }
  //     if (hasHalfStar) {
  //       starIcons.push(<FaStarHalfAlt key="half" />);
  //     }
  //     // Fill remaining with empty stars if needed for consistent look (e.g., always 5 stars total)
  //     while (starIcons.length < 5) {
  //       starIcons.push(
  //         <FaStar key={`empty-${starIcons.length}`} className="opacity-50" />
  //       ); // Optional: dim empty stars
  //     }

  //     return (
  //       <div className="text-yellow-400 text-xl mt-2 flex justify-center">
  //         {starIcons}
  //       </div>
  //     );
  //   };

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

        {/* Customer Testimonials Section with Carousel */}
      </div>
    </section>
  );
};

export default TrustSection;

/* Customer Testimonials Section with Carousel */

// {/* <div className="text-center max-w-2xl mx-auto">
//   <h3 className="text-2xl font-bold text-gray-100 mb-6">
//     What Our Customers Say
//   </h3>

//   {/* Main Carousel Wrapper: This div acts as the positioning context for absolute slides and buttons */}
//   {/* min-h-[280px] prevents layout shifts as slides are absolutely positioned */}
//   <div className="relative min-h-[280px]">
//     {/* Carousel Slides Container */}
//     <div id="testimonial-carousel" className="w-full h-full">
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={index}
//           className={`
//                     testimonial-slide bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-xl border border-yellow-700 w-full
//                     ${index === currentSlide ? "active" : ""}
//                   `}
//           // Custom styles for testimonial slides for animation. In a real Next.js app,
//           // these would typically be in a global CSS file or a CSS module.
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             opacity: index === currentSlide ? 1 : 0,
//             visibility: index === currentSlide ? "visible" : "hidden",
//             transition: "opacity 0.7s ease-in-out, visibility 0.7s step-end",
//             // Adjust transition timing for active slide to ensure it fades in before becoming visible
//             ...(index === currentSlide && {
//               transition:
//                 "opacity 0.7s ease-in-out, visibility 0.7s step-start",
//             }),
//           }}
//         >
//           <p className="text-lg italic text-gray-200 mb-6">
//             "{testimonial.text}"
//           </p>
//           <p className="font-semibold text-gray-100">- {testimonial.author}</p>
//           {renderStars(testimonial.stars)}
//         </div>
//       ))}
//     </div>

//     {/* Navigation Buttons */}
//     <button
//       onClick={() => {
//         clearInterval(slideIntervalRef.current!);
//         prevSlide();
//       }}
//       className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-700 text-yellow-400 p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10"
//       aria-label="Previous testimonial"
//     >
//       <FaChevronLeft />
//     </button>
//     <button
//       onClick={() => {
//         clearInterval(slideIntervalRef.current!);
//         nextSlide();
//       }}
//       className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-700 text-yellow-400 p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10"
//       aria-label="Next testimonial"
//     >
//       <FaChevronRight />
//     </button>
//   </div>

//   {/* Dots for Pagination */}
//   <div id="dot-container" className="flex justify-center mt-6">
//     {testimonials.map((_, index) => (
//       <span
//         key={index}
//         className={`dot h-2.5 w-2.5 mx-1.5 bg-gray-500 rounded-full inline-block transition-colors duration-300 cursor-pointer ${index === currentSlide ? "active bg-yellow-400" : ""}`}
//         onClick={() => {
//           clearInterval(slideIntervalRef.current!);
//           showSlide(index);
//         }}
//         aria-label={`Go to testimonial ${index + 1}`}
//       ></span>
//     ))}
//   </div>
// </div>; */}
