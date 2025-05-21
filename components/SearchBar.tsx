// import Form from "next/form";
// import React, { useEffect, useRef } from "react";

// const SearchBar = () => {
//   const searchInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       // check if / key is pressed
//       if (event.key === "/") {
//         event.preventDefault(); // prevent default behaviour


//         if (searchInputRef.current) {
//           searchInputRef.current.focus(); // focus on the search input
//         }
//       }
//     };

//     //   add event listner
//     window.addEventListener("keydown", handleKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   return (
//     <Form action="/search" className="w-full sm:w-auto flex-1 max-w-2xl">
//       <input
//         type="text"
//         name="query"
//         placeholder="Search for products..."
//         className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
//         ref={searchInputRef}
//       />
//     </Form>
//   );
// };

// export default SearchBar;
