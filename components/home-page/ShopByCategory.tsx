import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopByCategory = () => {
  return (
    <section className="w-full py-24 px-2 sm:px-6 lg:px-8 flex flex-col">
      <h2 className="text-center font-medium text-[40px] sm:text-5xl md:text-7xl font-playfair mb-14">
        Shop by Category
      </h2>

      {/* Catgories */}
      <div className="w-full flex justify-center flex-wrap  gap-9">
        {[
          {
            categoryName: "Rings",
            imgSrc: "/ring-category.jpg",
            src: "/categories/rings",
          },
          {
            categoryName: "Neclaces",
            imgSrc: "/necklace-category.jpg",
            src: "/categories/necklaces",
          },
          {
            categoryName: "Bracelets",
            imgSrc: "/bracelet-category.jpg",
            src: "/categories/bracelets",
          },
          {
            categoryName: "Cufflinks",
            imgSrc: "/cufflink-category.jpg",
            src: "/categories/cufflinks",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <Link href={item.src}>
              <Image
                src={item.imgSrc}
                alt="premium-ring.jpg"
                width={300}
                height={400}
                className="w-full sm:w-[280px] h-[320px] hover:scale-[1.03] transition-all duration-300 sm:h-[380px] rounded-[10px] object-cover object-center mb-2"
              />
            </Link>

            <Link href={item.src}>
              <h4 className="text-center font-medium md:text-[40px] sm:text-[35px] text-[30px] font-playfair">
                {item.categoryName} &gt;
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
