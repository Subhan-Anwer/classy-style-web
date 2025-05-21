// "use client";

// import { createCheckoutSession } from "@/actions/createCheckoutSession";
// import AddOrRemoveFromBasketButton from "@/components/AddOrRemoveFromBasketButton";
// import Loader from "@/components/ui/Loader";
// import { imageUrl } from "@/lib/imageUrl";
// import useBasketStore from "@/store/store";
// import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export type Metadata = {
//     orderNumber: string,
//     customerName: string,
//     customerEmail: string,
//     clerkUserId: string,
// }



// export default function BasketPage() {
//     const groupedItems = useBasketStore((state) => state.getGroupedItems());
//     const { isSignedIn } = useAuth();
//     const { user } = useUser();

//     const [isClient, setIsClient] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // wait for the client to mount
//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     // Check if the component is running on the client side
//     if (!isClient) {
//         // If not, return a loading spinner component
//         return <Loader />
//     }

//     if (groupedItems.length === 0) {
//         return (
//             <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
//                 <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Basket</h1>
//                 <p className="text-gray-600 text-lg">Your Basket is empty!</p>
//             </div>
//         )
//     }

//     const handleCheckout = async () => {
//         if (!isSignedIn) return;
//         setIsLoading(true);

//         try {
//             const metadata: Metadata = {
//                 orderNumber: crypto.randomUUID(),
//                 customerName: user?.fullName ?? "Unknown",
//                 customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
//                 clerkUserId: user!.id,
//             };

//             const checkoutUrl = await createCheckoutSession(groupedItems, metadata);

//             if (checkoutUrl) {
//                 window.location.href = checkoutUrl;
//             }

//         } catch (error) {
//             console.error("Error handling checkout session:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 max-w-6xl">
//             <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Your Basket</h1>

//             <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Product List */}
//                 <div className="flex-grow">
//                     {groupedItems?.map((item) => (
//                         <div
//                             key={item.product._id}
//                             className="mb-4 p-4 border border-gray-300 rounded-[6px] flex flex-col sm:flex-row items-center justify-between"
//                         >
//                             <div
//                                 className="w-[80%] sm:w-auto flex sm:flex-row flex-col items-center cursor-pointer flex-1 min-w-0"
//                                 onClick={() =>
//                                     window.open(`/products/${item.product.slug?.current}`, '_blank')
//                                 }
//                             >
//                                 {/* Product Image */}
//                                 <div className="w-full h-auto sm:w-24 sm:h-24 flex-shrink-0 sm:mr-4 mr-0">
//                                     {item.product.image && (
//                                         <Image
//                                             src={imageUrl(item.product.image).url()}
//                                             alt={item.product.name ?? "Product image"}
//                                             className="w-full h-full object-cover rounded"
//                                             width={500}
//                                             height={500}
//                                             quality={100}
//                                         />
//                                     )}
//                                 </div>

//                                 {/* Product Name & Price */}
//                                 <div className="min-w-0 text-center text-gray-800 sm:text-left">
//                                     <h2 className="text-lg sm:text-xl font-semibold sm:truncate">
//                                         {item.product.name}
//                                     </h2>
//                                     <p className="text-sm sm:text-base">
//                                         Price: $ {item.product.price?.toFixed(2)}
//                                     </p>
//                                     <p className="text-sm sm:text-base">
//                                         Quantity: {item.quantity}
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-center mt-3 sm:mt-0 sm:ml-4 ml-0 flex-shrink-0">
//                                 <AddOrRemoveFromBasketButton product={item.product} disabled={false} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Summary Section */}
//                 <div className="w-full lg-w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border border-gray-300 rounded-[6px] order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
//                     <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>

//                     <div className="mt-4 space-y-2">
//                         <p className="flex justify-between">
//                             <span>Items:</span>
//                             <span>
//                                 {groupedItems.reduce((total, item) => total + item.quantity, 0)}
//                             </span>
//                         </p>
//                         <p className="flex justify-between text-2xl font-bold border-t border-gray-400 pt-2">
//                             <span>Total:</span>
//                             <span>
//                                 ${useBasketStore.getState().getTotalPrice().toFixed(2)}
//                             </span>
//                         </p>
//                     </div>

//                     {isSignedIn ? (
//                         <button
//                             onClick={handleCheckout}
//                             //   disabled={isLoading}
//                             className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
//                         >
//                             {isLoading ? "Processing..." : "Checkout"}
//                         </button>
//                     ) : (
//                         <SignInButton mode="modal">
//                             <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                                 Sign in to Checkout
//                             </button>
//                         </SignInButton>
//                     )}
//                 </div>

//                 <div className="h-64 lg:h-0">
//                     {/* Space for fixed checkout on mobile */}
//                 </div>
//             </div>
//         </div>
//     )
// }

