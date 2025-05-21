
import CheckoutUs from "@/components/home-page/CheckoutUs";
import DiscountSection from "@/components/home-page/DiscountSection";
import FeaturedSection from "@/components/home-page/FeaturedSection";
import Hero from "@/components/home-page/Hero";
import ShopByCategory from "@/components/home-page/ShopByCategory";
// import ProductsView from "@/components/ProductView";
// import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


// export const dynamic = "force-static";
// export const revalidate = 60;

// export default async function Home() {
export default function Home() {
  // const products = await getAllProducts();
  // const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>>> Rerendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div>
      <Hero />

      {/* Get 10% discount Section */}
      <DiscountSection />

      {/* Featured Products Section */}
      <FeaturedSection />

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Checkout Instagram & Tiktok */}
      <CheckoutUs />

    </div>


    // OLD CODE
    // <div>
    //   <BlackFridayBanner />

    //   <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
    //     <ProductsView products={products} categories={categories} />
    //   </div>

    // </div>
  );
}
