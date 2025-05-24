import AddToBasketButton from "@/components/AddToBasketButton";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 60;

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>>> Rerendered the product page cache for ${slug}`
  );

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-[10px] shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="flex flex-col font-inter py-2 md:py-8">
          <div>
            {/* Product Name/Title */}
            <h1 className="text-4xl font-playfair font-bold mb-4">
              {product.name}
            </h1>

            {/* Product Price before & after discount */}
            <div className="flex items-center gap-2 my-7">
              <p className="font-inter text-2xl font-medium text-[#191919]">
                SAR {product.price?.toFixed(2)}
              </p>
              <p className="font-inter text-base tracking-wider line-through font-medium text-[#525252]">
                SAR {product.price && `${(product.price * 1.1).toFixed(2)}`}
              </p>
            </div>

            {/* Product Description */}
            <div className="prose max-w-none mb-6">
              <h5 className="font-light text-lg">
                {Array.isArray(product.description) && (
                  <PortableText value={product.description} />
                )}
              </h5>
            </div>
          </div>

          {/* Add to basket button */}

          

          <div className="mt-10 mb-6">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
