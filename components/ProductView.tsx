"use client";
import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import { useRouter } from "next/navigation";
// import { CategorySelectorComponent } from "./category-selector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
  selectedCategory?: string;
}


// console.log(category.slug?.current);

const ProductsView = ({ products, categories, selectedCategory }: ProductsViewProps) => {
  
  const router = useRouter();
  return (
    <div className="flex flex-col">
      
      {/* Categories buttons */}
      <div className="w-full mb-4 sm:mb-6 px-1 sm:px-4 gap-3 sm:gap-6 flex justify-center items-center flex-wrap h-auto font-normal font-poppins text-lg text-center">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => {
              router.push(`/categories/${category.slug?.current}`);
            }}
            className={`border sm:border-2 border-black/80 text-[15px] sm:text-[18px] px-2 sm:px-3 py-[2px] sm:py-1 rounded-[10px] cursor-pointer
              ${selectedCategory === category.slug?.current ? "bg-black text-white" : "bg-white text-black hover:bg-black  hover:text-white"}
              `}
          >
            {category.title}
          </button>
        ))}
      </div>


      
      {/* Products */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr className="w-4/5 sm:w-5/6 mx-auto mt-12 mb-6 border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
