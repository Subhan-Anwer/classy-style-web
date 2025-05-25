import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="container sm:px-5 px-3 md:py-24 sm:py-16 py-10 mx-auto">
          <h2 className="text-center mx-auto text-4xl md:text-6xl lg:text-[80px] font-playfair font-semibold md:mb-12 mb-8">
            Why Choose Us?
          </h2>
        <div className="flex flex-wrap -m-4">
          {/* Card 1 */}
          <div className="p-4 lg:w-1/3">
            <div className="sm:h-[270px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center bg-opacity-75 px-6 sm:py-3 py-6 rounded-[10px] overflow-hidden text-center relative">
              <Image
                src={"/icons/free-delivery.png"}
                alt="Free Delivery"
                width={100}
                height={100}
                className="md:w-[90px] sm:w-[70px] w-[60px] h-auto object-cover object-center"
              />
              <h2 className="md:text-3xl text-2xl font-playfair sm:mb-3 mb-1">
                Free Shipping
              </h2>
              <p className="font-inter font-light lg:text-lg sm:text-base text-sm">
                Enjoy complimentary shipping on all orders, because elegance
                should come at your doorstep.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 lg:w-1/3">
            <div className="sm:h-[270px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center bg-opacity-75 px-6 sm:py-3 py-6 rounded-[10px] overflow-hidden text-center relative">
              <Image
                src={"/icons/fast.png"}
                alt="Free Delivery"
                width={100}
                height={100}
                className="md:w-[90px] sm:w-[70px] w-[60px] mb-2 h-auto object-cover object-center"
              />
              <h2 className="md:text-3xl text-2xl font-playfair sm:mb-3 mb-1">
                Fast Delivery
              </h2>
              <p className="font-inter font-light lg:text-lg sm:text-base text-sm">
                We prioritize fast and quick delivery so your special moments
                aren&#39;t kept waiting.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 lg:w-1/3">
            <div className="sm:h-[270px] h-auto bg-[#D9D9D9] flex flex-col items-center justify-center bg-opacity-75 px-6 sm:py-3 py-6 rounded-[10px] overflow-hidden text-center relative">
              <Image
                src={"/icons/quality.png"}
                alt="Free Delivery"
                width={100}
                height={100}
                className="md:w-[90px] sm:w-[70px] w-[60px] h-auto object-cover object-center"
              />
              <h2 className="md:text-3xl text-2xl font-playfair sm:mb-3 mb-1">
                Quality Guarantee
              </h2>
              <p className="font-inter font-light lg:text-lg sm:text-base text-sm">
                Every piece is crafted with premium materials and a commitment
                to excellence
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs