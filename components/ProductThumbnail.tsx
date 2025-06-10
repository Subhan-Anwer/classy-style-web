import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCurrencyStore from "@/store/currencyStore";

const ProductThumbnail = ({ product }: { product: Product }) => {

  const currency = useCurrencyStore((state) => state.currency);
  const [hydrated, setHydrated] = useState(false);

  // Wait for localStorage to hydrate (for SSR safety)
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const isOutOfStock = product.stock != null && product.stock <= 0;

  const price =
    currency === "SAR" ? (product.price ?? 0) : (product.aedPrice ?? 0);
  const oldPrice = price * 1.1;

  return (
    <Link
      href={`/products/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-[8px] border-2 border-gray-200 shadow-lg hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
      {/* Image Content */}
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="p-4">
        {/* Product Title/Name */}
        <h2 className="text-2xl font-semibold text-[#191919] truncate">
          {product.name}
        </h2>

        {/* Product Description */}
        <p className="mt-4 text-sm font-poppins tracking-normal text-gray-600 line-clamp-2">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available"}
        </p>

        {/* Product Price */}
        <div className="flex items-center gap-2 mt-4">
          <p className="font-inter  text-lg font-medium text-[#191919]">
             {currency === "SAR" ? `SAR ${price.toFixed(2)}` : `AED ${price.toFixed(2)}`} 
          </p>
          <p className="font-inter  text-sm tracking-wider line-through font-medium text-[#747474]">
            {currency === "SAR" ? `SAR ${oldPrice.toFixed(2)}` : `AED ${oldPrice.toFixed(2)}`} 
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductThumbnail;
