
import CurrencySwitcher from "@/components/CurrencySwitcher";
import CheckoutUs from "@/components/home-page/CheckoutUs";
import DiscountSection from "@/components/home-page/DiscountSection";
import FeaturedSection from "@/components/home-page/FeaturedSection";
import Hero from "@/components/home-page/Hero";
import ShopByCategory from "@/components/home-page/ShopByCategory";
import TestimonialsCarousel from "@/components/home-page/Testimonials";
import TrustSection from "@/components/home-page/TrustSection";


// export const dynamic = "force-static";
// export const revalidate = 60;
export default function Home() {

  

  return (
    <div>
      <Hero />

      {/* Trust Section */}
      <TrustSection />

      {/* Currency Switcher */}
      <CurrencySwitcher />

      {/* Get 10% discount Section */}
      {/* <DiscountSection /> */}

      {/* Testimonial Section */}
      <TestimonialsCarousel />

      {/* Featured Products Section */}
      <FeaturedSection />

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Checkout Instagram & Tiktok */}
      <CheckoutUs />

    </div>
  );
}
