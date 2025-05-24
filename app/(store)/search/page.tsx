import React from 'react'

const page = () => {
  return (
    <div>
      Search Page
    </div>
  )
}

export default page


// import ProductGrid from "@/components/ProductGrid";
// import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

// const SearchPage = async ({searchParams}: {searchParams: Promise<{query: string}>}) => {

//   const { query } = await searchParams;
//   const products = await searchProductsByName(query);
//   console.log("products:", products)
  

//   if(!products.length) {
//     return (
//       <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl text-center">
//           <h1 className="text-3xl font-bold mb-6">
//             No Products found for: {query}
//           </h1>
//           <p className="text-gray-600">
//             Try searching with different keywords
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-[5px] shadow-md w-full">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Search results for &quot;{query}&quot;
//         </h1>
//         <ProductGrid products={products} /> 
//       </div>
//     </div>
//   )
// }

// export default SearchPage