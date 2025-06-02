import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "@/components/ui/toaster";
import NewsMarquee from "@/components/NewsMarquee";

export const metadata: Metadata = {
  title: "Classy Style | Jewelry and Accessories",
  description: "Developed by Subhan Anwer",
};

export const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${inter.className} ${playfair.className} ${poppins.className} antialiased`}
        >
          <main>
            <Toaster />
            <NewsMarquee />
            <Header />
            {children}
            <Footer />
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
