import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  

  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
