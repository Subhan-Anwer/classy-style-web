import CurrencySwitcher from "@/components/CurrencySwitcher";
import ProductsView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { notFound } from "next/navigation";
import React from "react";

const product = "Product";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();

  if (!product) {
    return notFound();
  }

  // const selectedCategory = slug;


  return (
    <div className="w-full">
    
          {/* Currency Switcher */}
          <CurrencySwitcher />


      {/* Heading */}
      <div className="w-full mt-16 mx-auto mb-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          {slug
               .split("-")
               .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
               .join(" ")}{" "}
               Collection
        </h2>
      </div>

      <div className="flex flex-col items-center justify-top min-h-screen p-4">
        <ProductsView products={products} categories={categories}  selectedCategory={slug}/>
      </div>
    </div>
  );
};

export default page;
