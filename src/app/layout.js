import "./globals.css";
import LocalBusinessSchema from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Chandrika Enterprises | Wholesale Stationery, Body Care, Baby Products & Perfume Distributor in Thane",

  description:
    "Chandrika Enterprises is a trusted wholesale distributor of stationery, body care, baby products and perfumes serving retailers, offices and schools across Thane and Navi Mumbai. We supply notebooks, pens, files, personal care items, baby care essentials and branded perfumes at competitive bulk prices.",

  keywords:
    "stationery wholesaler in Thane, baby products distributor in Thane, body care wholesale supplier, perfume distributor Thane, office supplies wholesaler, notebooks bulk supplier, baby care products wholesale Navi Mumbai",

  openGraph: {
    title:
      "Wholesale Stationery, Baby Products, Body Care & Perfumes Distributor in Thane | Chandrika Enterprises",

    description:
      "Buy stationery, baby products, body care items and perfumes at wholesale prices from Chandrika Enterprises, trusted distributor serving Thane and Navi Mumbai retailers.",

    url: "https://www.chandrika-enterprises.in",
    siteName: "Chandrika Enterprises",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://www.chandrika-enterprises.in",
  },
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        {/* ✅ BEST PLACE FOR SCHEMA */}
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">

        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
