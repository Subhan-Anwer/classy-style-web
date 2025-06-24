"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { createContactQuery } from "@/actions/createContactQuery";

const contactDetails = [
  {
    title: "Send Email",
    description:
      "For queries, orders, or collaborations, feel free to reach out anytime.",
    link: "mailto:classystyle493@gmail.com",
    linkTitle: "classystyle493@gmail.com",
    icon: Mail,
  },
  {
    title: "Call or WhatsApp",
    description: "Need quick help? Our team is just a call or message away.",
    link: "https://www.wa.me/+971543638507",
    linkTitle: "+971543638507",
    icon: Phone,
  },
  {
    title: "Visit or Follow Us",
    description: "Stay connected with our latest drops & updates.",
    link: "https://www.instagram.com/officialclassystyle",
    linkTitle: "@officialclassystyle",
    icon: Instagram,
  },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const contactFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const metadata = {
        name: name ?? "Unknown",
        phone: `${selectedCountry.code}${phone}`, // Combine country code with phone number
        msg: msg,
      };

      const result = await createContactQuery(metadata);
      console.log("✅ Contact Query:", result);

      setSuccess(true); // Show success message

      setName(""); // Reset form fields
      setPhone("");
      setMsg("");

      setTimeout(() => {
        setSuccess(false); // Hide after 3 seconds
      }, 3000);
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full ">
      <div className="w-full mt-16 mx-auto mb-10 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Contact Our Team
        </h2>
        <p className="mt-3 font-poppins text-[13px] sm:text-[17px] md:text-[20px] font-normal">
          Have a question or need assistance?!
        </p>
      </div>

      {/* Details */}
      <div className="container sm:px-5 px-3 py-6 mx-auto mb-20">
        <div className="flex md:flex-row flex-col items-center justify-center flex-wrap -m-4">
          {/* Card 1 */}
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div className="md:p-4 p-1 lg:w-1/3" key={index}>
                <div className="sm:h-[270px] h-auto  flex flex-col items-center justify-center gap-2 bg-opacity-75 px-6 sm:py-3 py-6 rounded-[10px] overflow-hidden text-center relative">
                  <Icon className={`text-black md:w-12 w-8 h-auto mb-2`} />{" "}
                  {/* Icon here */}
                  <h2 className="md:text-3xl text-2xl font-playfair ">
                    {detail.title}
                  </h2>
                  <p className="font-inter font-light lg:text-lg sm:text-base text-sm">
                    {detail.description}
                  </p>
                  <Link
                    href={detail.link}
                    className="font-poppins font-medium lg:text-lg sm:text-base text-sm"
                  >
                    {detail.linkTitle}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full flex items-center justify-center mb-14 px-2">
        <form
          onSubmit={contactFormHandler}
          action=""
          className="w-[700px] min-h-[600px] px-6 sm:px-14 py-10 h-auto border-2 border-black rounded-[25px]"
        >
          <h4 className="font-playfair mt-6 font-medium text-2xl mb-20 sm:text-3xl text-center">
            Send Us Your Questions!
          </h4>

          <div className="flex md:flex-row flex-col items-center justify-between gap-7">
            <div className="flex flex-col gap-1 items-start justify-center w-full sm:w-[45%]">
              <label
                htmlFor="name"
                className="font-poppins text-black/80 text-lg"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={50}
                className="w-full rounded-[6px] focus:bg-gray-100 bg-white text-black font-poppins px-3 h-10 border border-black"
              />
            </div>

            {/* Phone number with country code dropdown */}
            <div className="flex flex-col gap-1 items-start justify-center w-full sm:w-[45%] relative">
              <label
                htmlFor="phone"
                className="font-poppins text-black/80 text-lg"
              >
                Phone Number
              </label>

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
                  name="phone"
                  required
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={15}
                  className="w-full rounded-e-[6px] focus:bg-gray-100 bg-white text-black font-poppins px-3 h-10 border border-black border-l-0"
                  placeholder="123-456-7890"
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
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 my-6">
            <label htmlFor="msg" className="font-poppins text-black/80 text-lg">
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              value={msg}
              required
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message here..."
              maxLength={250}
              className="w-full max-w-full min-h-[140px] resize-none rounded-[6px] focus:bg-gray-100 bg-white text-black font-poppins px-3 py-3 h-10 border border-black"
            />
          </div>

          <div className="w-full h-11 mb-10">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-full bg-black font-poppins text-lg text-white text-center rounded-[6px]"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>

            {success && (
              <p className="text-green-600 font-poppins text-sm text-center mt-3 transition-opacity duration-300">
                ✅ message submitted successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
