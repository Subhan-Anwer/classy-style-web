// import { COUPON_CODES } from "@/sanity/lib/sale/couponCode";
// import { getActiveSaleByCouponCode } from "@/sanity/lib/sale/getActiveSaleByCouponCode";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  //   const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY50);

  //   if (!sale?.isActive) {
  //     console.log("Sale is not active");
  //     return null;
  //   }

  return (
    <div className="w-full h-[440px] relative text-center text-white">
      <Image
        src="/hero-img.jpg"
        alt="Hero Section Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        width={1140}
        height={633}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl leading-tight text-shadow-sm">
          Buy {" "}
          <span className="text-[48px] sm:text-[60px] md:text-[80px]">1</span>,
          Get {" "}
          <span className="text-[48px] sm:text-[60px] md:text-[80px]">1</span>{" "}
          Free
          <br />
        </h1>
        
        <p className="font-poppins text-lg sm:text-xl md:text-2xl tracking-wider font-light block mt-3 text-shadow-lg">
          Limited Time Offer on All Items!
        </p>


        <Link href="/shop">
          <button className="mt-6 px-6 py-2 font-inter text-sm sm:text-base rounded-full border-2 border-[#d7931b] bg-black  transition-all duration-300 hover:shadow-[0_0_5px_#d7931b] hover:scale-x-105">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
