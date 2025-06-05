import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ali",
    rating: 5,
    review:
      "Absolutely in love with the quality and elegance. Felt truly special receiving my order!",
  },
  {
    name: "Adeel Khan",
    rating: 4,
    review:
      "Delivery was faster than I expected. The packaging and product were both top-notch!",
  },
  {
    name: "Mehwish Tariq",
    rating: 3,
    review:
      "Nice product, but delivery took a bit longer. Overall, Im satisfied with the quality.",
  },
  {
    name: "Rizwan Sheikh",
    rating: 5,
    review:
      "Perfect gift for my wife. She adored the details, will definitely shop again!",
  },
  {
    name: "Sana R.",
    rating: 4,
    review:
      "Lovely craftsmanship. I appreciate the free shipping and thoughtful packaging!",
  },
];

const renderStars = (count: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={
        i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }
    />
  ));
};

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-10 md:py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-black/80 font-poppins tracking-wide">
          Real reviews from people who trusted us with their special moments.
        </p>
      </div>

      <div className="relative mt-10 max-w-6xl mx-auto px-4">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-[60%] flex justify-center"
              >
                <Card className="w-full bg-gray-100/30 shadow-md rounded-2xl p-2 sm:p-4 md:p-6">
                  <CardHeader className="text-center py-4">
                    <CardTitle className="text-xl font-semibold text-primary">
                      {t.name}
                    </CardTitle>
                    <CardDescription className="flex justify-center gap-1 mt-2">
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(t.rating)}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-2">
                    <p className="text-center text-sm font-poppins text-black/80  leading-relaxed">
                      “{t.review}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-0 -translate-y-1/2 top-1/2 absolute" />
          <CarouselNext className="right-0 -translate-y-1/2 top-1/2 absolute" />
        </Carousel>
      </div>
    </section>
  );
}
