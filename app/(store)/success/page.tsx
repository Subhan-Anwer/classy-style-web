"use client";
import { Button } from '@/components/ui/button';
import useBasketStore from '@/store/store';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react'

export default function SuccessPage () {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderId) {
      clearBasket();
    }
  }, [orderId, clearBasket]);

  return (
    <div className="flex flex-col items-center font-poppins justify-center min-h-[85vh] bg-gray-100">
       <motion.div
         className="bg-white p-6 sm:p-9 md:p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.45 }}
       >
         <motion.div
           className="flex justify-center mb-8"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ duration: 0.5, delay: 0.5 }}
         >
           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
             <motion.svg
               className="w-8 h-8 text-green-600"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1, ease: "easeInOut" }}
             >
               <motion.path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M5 13l4 4L19 7"
               />
             </motion.svg>
           </div>
         </motion.div>

         <motion.h1
           className="text-4xl font-playfair font-bold mb-6 text-center"
           initial={{ y: -50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.45, delay: 1 }}
         >
           Thank you for your order!
         </motion.h1>

         <motion.div
           className="flex items-center justify-center border-t border-b border-gray-200 py-4 mb-8"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 1.5 }}
         >
           <p className="text-[14px] sm:text-[17px] font-poppins text-center h-full text-gray-500">
             Your order has been confirmed and will be shipped shortly.
           </p>
         </motion.div>

         <motion.div
           className="space-y-4 tracking-wide"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 2 }}
         >
           <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
             <Button asChild className="bg-green-600 hover:bg-green-700 rounded-[5px] text-white ">
               <Link href="/orders">View Order Details</Link>
             </Button>
            
             <Button asChild variant="outline" className="text-black/80 rounded-[5px]">
               <Link href="/">Continue Shopping</Link>
             </Button>
           </div>
         </motion.div>
       </motion.div>
     </div>
  )
}