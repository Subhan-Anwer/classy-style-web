// import { COUPON_CODES } from "@/sanity/lib/sale/couponCode";
// import { getActiveSaleByCouponCode } from "@/sanity/lib/sale/getActiveSaleByCouponCode";
import Image from "next/image";

const Hero = () => {
//   const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY50);

//   if (!sale?.isActive) {
//     console.log("Sale is not active");
//     return null;
//   }

  return (
    <div className="w-full h-[440px] text-center relative text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl leading-tight">
          Elevate Your Everyday Look
          <br />
          <span className=" text-lg sm:text-xl md:text-2xl block mt-2 ">
            Discover Timeless Fashion That Speaks Class
          </span>
        </h1>
      </div>

      <Image
        src="/hero-img.jpg"
        alt="Hero Section Image"
        className="w-full h-full object-cover object-center absolute inset-0 z-0"
        width={1140}
        height={633}
      />
    </div>
  );
};

export default Hero;
