import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export const metadata = {
  title: "Chandrika Enterprises | Premium Stationery Distributor",
  description:
    "Chandrika Enterprises is a trusted distributor for stationery products including notebooks, pens, files, and office supplies. Serving schools, businesses, and retailers across Maharashtra.",
};

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-slate-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Chandrika Enterprises
            </h1>

            <p className="mt-4 text-lg text-slate-200">
              Your trusted distributor for premium stationery products in
              Thane and across Maharashtra — serving schools, offices and retailers.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/products"
                className="bg-[#E63946] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#C51F2A] transition"
              >
                Browse Products
              </Link>

              <Link
                href="/contact"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#1D3557] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/stationary.jpg"
              alt="Stationery products"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            About Chandrika Enterprises
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are a leading distributor of high-quality stationery products —
            notebooks, pens, files, and office supplies. Our focus is on reliable
            service, genuine brands, and long-term business relationships.
          </p>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
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
                className="bg-[#F8FAFC] border fle rounded-2xl hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-52 bg-white">
                  <Image
                    src={cat.logo}
                    alt={cat.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-[#1D3557]">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center bg-[#1D3557] text-white rounded-3xl py-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            Looking for Bulk Stationery Supplies?
          </h2>

          <p className="mt-4 text-slate-200">
            Contact us for bulk orders, catalogs and distributor enquiries.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#E63946] px-8 py-3 rounded-xl font-semibold hover:bg-[#C51F2A] transition shadow"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}
