import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);
  // console.log("products:", products);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-6">
            No Products found for:{" "}
            <span className="font-poppins text-blue-700">{query}</span>
          </h1>
          <p className="text-gray-600">Try searching with different keywords</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl  font-bold mb-3 sm:mb-6 text-center mt-6">
          Search results for &quot;<span className="tracking-wide font-poppins font-semibold">{query}</span>&quot;
        </h1>
        <ProductGrid products={products} />
    </div>
  );
};

export default SearchPage;