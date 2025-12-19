import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export const metadata = {
  title: "Chandrika Enterprise | Premium Stationery Distributor",
  description:
    "Chandrika Enterprise is a trusted distributor for stationery products including notebooks, pens, files, and office supplies. Serving businesses, schools, and retailers with quality products at the best price in Thane, Maharashtra.",
};

export default function Home() {
  return (
    <main className="flex flex-col bg-[#F1FAEE] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D3557] to-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Chandrika Enterprises
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Your trusted distributor for premium stationery products in
              Shree Nagar and entire Maharashtra — serving schools, businesses & retailers.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/products"
                className="bg-[#E63946] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#C51F2A] hover:shadow-xl transition-all"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#1D3557] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 relative h-72">
            <Image
              src="/images/stationary.jpg"
              alt="Stationery products"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557]">
          About Chandrika Enterprise
        </h2>
        <p className="mt-6 text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          We are a leading distributor of high-quality stationery products —
          notebooks, pens, files, office supplies, and more. Our mission is to
          make premium stationery accessible to businesses, schools, and
          retailers at competitive prices, with reliable service and timely
          delivery.
        </p>
      </section>

      {/* Product Categories Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557]">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {products.map((cat) => (
              <Link
                key={cat.name}
                href={`/products/${cat.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden "
              >
                <div className="relative w-full h-56">
                  <Image
                    src={cat.logo}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition p-4"
                  />
                </div>
                <div className="p-5 text-center font-semibold text-lg text-[#1D3557] group-hover:text-[#E63946]">
                  {cat.name}
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16 bg-[#1D3557] text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Have a bulk order or product inquiry? Let us help you stock up on the
          best stationery at wholesale prices.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-[#E63946] px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#C51F2A] hover:shadow-xl transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
