"use client";
import { motion } from "framer-motion";

const BogoPara = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-900 px-4 py-3 rounded-md shadow-md mt-8 flex justify-center items-center gap-2"
    >
      <span className="text-xl animate-bounce">🎁</span>
      <div>
        <p className="font-semibold text-sm sm:text-base font-inter">
          Buy One, Get One Free - Limited Time Only!
        </p>
      </div>
      <span className="text-xl animate-bounce">🎁</span>

    </motion.div>
  );
};

export default BogoPara;
