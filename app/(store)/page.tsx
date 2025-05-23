
import CheckoutUs from "@/components/home-page/CheckoutUs";
import DiscountSection from "@/components/home-page/DiscountSection";
import FeaturedSection from "@/components/home-page/FeaturedSection";
import Hero from "@/components/home-page/Hero";
import ShopByCategory from "@/components/home-page/ShopByCategory";


// export const dynamic = "force-static";
// export const revalidate = 60;
export default function Home() {

  

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
  );
}
