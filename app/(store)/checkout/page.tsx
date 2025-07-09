"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useBasketStore } from "@/store/store";
import { createCodOrder } from "@/actions/createCodOrder";
import useCurrencyStore from "@/store/currencyStore";

export default function CheckoutPage() {
  const currency = useCurrencyStore((state) => state.currency);
  const router = useRouter();
  const { user } = useAuth();
  const groupedItems = useBasketStore((state) => state.getGroupedItems());

  const [loading, setLoading] = useState(false);

  // Form Fields State
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [engravingName, setEngravingName] = useState("");
  const [note, setNote] = useState("");

  // Country Selection State

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "UAE",
    code: "+971",
    flag: "🇦🇪",
  });

  const countries = [
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "India", code: "+91", flag: "🇮🇳" },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || groupedItems.length === 0) return;

    setLoading(true);

    try {
      const metadata = {
        orderNumber: crypto.randomUUID(),
        firebaseUserId: user.uid,
        customerName: user?.displayName ?? "Unknown",
        customerEmail: user?.email ?? "Unknown",
        phone: `${selectedCountry.code}${phone}`, // Combine country code with phone number
        address,
        city,
        postalCode: Number(postalCode),
        engravingName,
        note,
        totalPrice:
          currency === "SAR"
            ? useBasketStore.getState().getTotalPrice().toFixed(2)
            : useBasketStore.getState().getTotalPriceInAED().toFixed(2),
        currency: currency, // make it dynamic
      };

      const result = await createCodOrder(groupedItems, metadata);

      if (result._id) {
        // 👇 Send the order email to client
        await fetch("/api/send-order-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderDocId: result._id,
            orderId: result.orderId,
            customerName: user?.displayName ?? "Unknown",
            totalPrice: metadata.totalPrice,
            currency,
            customerEmail: user?.email ?? "Unknown",
            phone: phone,
            address: address,
            city: city,
            postalCode: Number(postalCode),
            engravingName: engravingName,
            note: note,
          }),
        });

        // Redirect to success page
        router.push(`/success?orderId=${result.orderId}`);
      } else {
        alert("❌ Failed to place order.");
      }
    } catch (error) {
      alert("❌ Error placing order. Please try again.");
      console.error("Error placing order:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-playfair font-bold text-center text-black mb-10 font-poppins">
          Just One Last Step
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto bg-white shadow-xl rounded-[10px] p-6 md:p-10 border border-gray-400"
        >
          <div className="flex flex-col md:flex-row gap-10 pt-4 md:pt-0">
            {/* Section 1: Contact / Shipping Info */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black font-poppins">
                Delivery Information
              </h2>
              <div className="space-y-4">
                <div className="flex w-full relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="z-10 inline-flex items-center font-inter gap-1 px-3 py-[9px] text-sm font-medium text-black  border border-black  rounded-s-[6px]"
                  >
                    <span className="font-emoji">{selectedCountry.flag}</span>
                    {selectedCountry.code}
                    {/* Down arrow */}
                    <svg
                      className="w-2.5 h-2.5 ml-1"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    maxLength={15}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                  />
                  {dropdownOpen && (
                    <div className="absolute top-[48px] z-20 arial bg-white border border-gray-300 w-full rounded-[6px] shadow-md max-h-60 overflow-y-auto">
                      <ul className="text-sm text-black">
                        {countries.map((country) => (
                          <li key={country.code}>
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-2"
                            >
                              <span className="font-emoji">{country.flag}</span>
                              {country.name} ({country.code})
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                />
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                />
                <input
                  type="number"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                  className="w-full focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                />
              </div>
            </div>

            {/* Section 2: Customization Info */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black font-poppins">
                Jewelry Customization
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name to Engrave on Jewelry"
                  value={engravingName}
                  onChange={(e) => setEngravingName(e.target.value)}
                  required
                  className="w-full focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                />
                <textarea
                  // type="text"
                  placeholder="Special Message or Instructions"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full min-h-[117px] focus:outline-none focus:border-[#292929] border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
                />
              </div>
            </div>
          </div>

          {/* Button goes here - below both sections */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white w-full py-3 rounded-[6px] text-lg font-semibold font-poppins tracking-wide transition-opacity duration-300 disabled:opacity-60"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
