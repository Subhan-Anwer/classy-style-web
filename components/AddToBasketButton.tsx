// "use client";

// import { Product } from "@/sanity.types";
// import useBasketStore from "@/store/store";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";

// function AddToBasketButton({ product, disabled }: { product: Product; disabled: boolean }) {
//     const { addItem } = useBasketStore();
//     const [selectedQuantity, setSelectedQuantity] = useState(0);
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     if (!isClient) {
//         return null;
//     }

//     return (
//         <div className="flex flex-col items-center justify-center space-y-5">
//             <div className="flex items-center justify-center space-x-2">
//                 {/* Minus button - Only decreases selected quantity */}
//                 <button
//                     onClick={() => setSelectedQuantity(prev => Math.max(prev - 1, 0))}
//                     className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${selectedQuantity === 0
//                         ? "bg-gray-100 cursor-not-allowed"
//                         : "bg-gray-200 hover:bg-gray-300"
//                         }`}
//                     disabled={selectedQuantity === 0}
//                 >
//                     <span className="text-xl font-bold text-gray-600">-</span>
//                 </button>

//                 {/* Selected Quantity */}
//                 <span className="w-8 text-center font-semibold">{selectedQuantity}</span>

//                 {/* Plus button - Only increases selected quantity */}
//                 <button
//                     onClick={() => setSelectedQuantity(prev => prev + 1)}
//                     className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled
//                         ? "bg-gray-400 cursor-not-allowed"
//                         : "bg-blue-500 hover:bg-blue-600"
//                         }`}
//                     disabled={disabled}
//                 >
//                     <span className="text-xl font-bold text-white">+</span>
//                 </button>
//             </div>

//             {/* Add to Basket Button - Adds selected quantity to Zustand store */}
//             <Button
//                 onClick={() => {
//                     if (selectedQuantity > 0) {
//                         for (let i = 0; i < selectedQuantity; i++) {
//                             addItem(product);
//                         }
//                         setSelectedQuantity(0); // Reset after adding to basket
//                     }
//                 }}
//                 className="text-base font-bold text-blue-500 hover:text-white border-2 border-blue-500 hover:bg-blue-500 rounded-[6px] px-6 py-5 transition-all"
//                 disabled={selectedQuantity === 0}
//             >
//                 Add to Basket
//             </Button>
//         </div>
//     );
// }

// export default AddToBasketButton;
