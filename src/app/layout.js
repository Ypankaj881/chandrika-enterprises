import "./globals.css";
import LocalBusinessSchema from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const metadata = {
  title:
    "Chandrika Enterprises | Wholesale Distributor in Thane for Stationery, Personal Care, Baby Products, Perfumes & FMCG",

  description:
    "Chandrika Enterprises is a trusted wholesale distributor in Thane supplying stationery, personal care, baby products, perfumes and wellness essentials to retailers, offices, schools and medical stores across Thane and Navi Mumbai.",

  keywords:
    "wholesale distributor in Thane, stationery wholesaler Thane, personal care distributor Thane, baby products wholesale supplier, perfume distributor Thane, FMCG distributor Navi Mumbai, office stationery bulk supplier, school stationery wholesaler, healthcare essentials distributor",

  openGraph: {
    title:
      "Wholesale Distributor in Thane | Stationery, Personal Care, Baby Products & FMCG – Chandrika Enterprises",

    description:
      "Buy stationery, personal care, baby products, perfumes and wellness essentials at wholesale prices from Chandrika Enterprises, serving retailers and institutions across Thane and Navi Mumbai.",

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
