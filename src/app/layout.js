import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "A modern summer eCommerce platform for seasonal products like sunglasses, outfits, and beach accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900 selection:bg-orange-200 selection:text-orange-900 flex flex-col min-h-screen`}
        suppressHydrationWarning={true} // This fixes the Grammarly/Extension error
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
