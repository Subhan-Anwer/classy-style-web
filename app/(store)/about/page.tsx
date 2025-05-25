import OurStory from "@/components/about-page/OurStory";
import WhyChooseUs from "@/components/about-page/WhyChooseUs";
import React from "react";

const services = [
  {
    title: "What We do?",
    description:
      "We create custom, name-engraved jewelry that blends elegance with emotion. Each piece is sourced locally and delivered globally. Classy Style turns your personal stories into timeless accessories.",
  },
  {
    title: "Our Value",
    description:
      "Quality. Trust. Individuality.We believe every customer deserves exceptional raftsmanship, honest service, and pieces that reflect their unique style.",
  },
  {
    title: "Our Mission",
    description:
      "To make luxury personalized jewelry accessible, memorable, and meaningful. Elegance at every piece.",
  },
];

const page = () => {
  return (
    <div>
      <OurStory />

      <WhyChooseUs />

      <section
        id="services"
        className="text-black sm:text-left text-center font-playfair px-6 md:px-12 py-16 md:py-20"
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Heading */}
          <div className="lg:w-1/4 w-full">
            <h2 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold sticky top-20">
              About Us
            </h2>
          </div>

          {/* Services */}
          <div className="lg:w-3/4 w-full space-y-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:gap-6"
              >
                <div className="ml-0 sm:ml-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-sm md:text-lg lg:text-xl opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
