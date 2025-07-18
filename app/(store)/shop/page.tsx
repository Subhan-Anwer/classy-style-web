
import BogoPara from "@/components/BogoPara";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import ProductsView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import React from "react";

const page = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>>> Rerendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div className="w-full">

      {/* Currency Switcher */}
      <CurrencySwitcher />

      {/* Heading */}
      <div className="w-full mt-16 mx-auto mb-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">Shop</h2>
        <BogoPara />
      </div>

      <div className="flex flex-col items-center justify-top min-h-screen p-2 sm:p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
};

export default page;
