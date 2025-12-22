import "./globals.css";
import LocalBusinessSchema from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chandrika Enterprises | Stationery Distributor in Thane",
  description:
    "Chandrika Enterprises is a leading distributor of stationery products in Shree Nagar, Thane. Browse notebooks, pens, files, and office supplies at the best prices.",
  keywords:
    "stationery distributor in Thane, stationery wholesale, office supplies Thane, notebooks supplier, pens supplier",
  openGraph: {
    title: "Chandrika Enterprises - Stationery Distributor in Thane",
    description:
      "Your trusted stationery distributor in Shree Nagar, Thane. Get notebooks, pens, files, and more for your office or school.",
    url: "https://chandrika-enterprises.in",
    siteName: "Chandrika Enterprises",
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="antialiased">
        <LocalBusinessSchema />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
