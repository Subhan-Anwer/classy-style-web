"use client";

import Link from "next/link";
import { useState } from "react";
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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const contactFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const metadata = {
        name: name ?? "Unknown",
        phone: Number(phone),
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
                className="w-full rounded-[6px] focus:bg-gray-100 bg-white text-black font-poppins px-3 h-10 border border-black"
              />
            </div>

            <div className="flex flex-col gap-1 items-start justify-center w-full sm:w-[45%]">
              <label
                htmlFor="phone"
                className="font-poppins text-black/80 text-lg"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                className="w-full rounded-[6px] focus:bg-gray-100 bg-white text-black font-poppins px-3 h-10 border border-black no-up-down"
              />
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
