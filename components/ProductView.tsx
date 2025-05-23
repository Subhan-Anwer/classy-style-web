"use client";
import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import { useRouter } from "next/navigation";
// import { CategorySelectorComponent } from "./category-selector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      {/* Categories */}
      {/* <div className="w-full sm:w-[200px]">
                <CategorySelectorComponent categories={categories} />
            </div> */}

      <div className="w-full mb-6 px-4 gap-6 flex justify-center items-center h-auto font-normal font-poppins text-lg text-center">
        {/* Add this code in category selector component  */}
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => {
              router.push(`/categories/${category.slug?.current}`);
            }}
            className="border-2 border-black/80 px-3 py-1 rounded-[10px] hover:bg-black hover:text-white cursor-pointer"
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
