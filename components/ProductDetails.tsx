"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { PortableText } from "next-sanity";
import Image from "next/image";
import AddToBasketButton from "./AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import CurrencySwitcher from "./CurrencySwitcher";

export default function ProductDetails({ product: product }: any) {
  const { currency } = useCurrency();

  const price = currency === "SAR" ? product.price : product.aedPrice;
  const oldPrice = price ? price * 1.1 : 0;
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <CurrencySwitcher />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-[10px] shadow-lg ${
            isOutOfStock ? "opacity-50" : ""
          }`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="flex flex-col font-inter py-2 md:py-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 my-7">
            <p className="font-inter text-2xl font-medium text-[#191919]">
              {currency} {price?.toFixed(2)}
            </p>
            {price && (
              <p className="font-inter text-base tracking-wider line-through font-medium text-[#525252]">
                {currency} {oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="prose max-w-none mb-6">
            <h5 className="font-light text-lg">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </h5>
          </div>

          <div className="mt-10 mb-6">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
          </div>
        </div>
      </div>
    </div>
  );
}
