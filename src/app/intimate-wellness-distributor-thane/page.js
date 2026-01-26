import Link from "next/link";

export const metadata = {
  title:
    "Intimate Wellness Products Wholesale Distributor in Thane | Chandrika Enterprises",
  description:
    "Chandrika Enterprises is a trusted wholesale distributor of intimate wellness products in Thane and Navi Mumbai. We supply condoms, lubricants, massage oils, delay sprays, pregnancy kits and personal wellness products at bulk prices.",
  keywords:
    "intimate wellness distributor Thane, condom wholesaler Mumbai, lubricant distributor Navi Mumbai, massage oil bulk supplier, delay spray wholesale India, pregnancy kit distributor",
};

export default function IntimateWellnessPage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Intimate Wellness Products Wholesale Distributor in Thane
          </h1>

          <p className="mt-5 text-slate-200 max-w-3xl mx-auto text-lg">
            Chandrika Enterprises supplies trusted intimate wellness and personal
            care products including condoms, lubricants, massage oils, delay
            sprays and pregnancy kits to retailers and wholesalers across Thane,
            Navi Mumbai and Maharashtra.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/products/cupid"
              className="bg-[#E63946] px-8 py-3 rounded-xl font-semibold hover:bg-[#C51F2A] transition shadow"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#1D3557] transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

        <div>
          <h2 className="text-3xl font-bold text-[#1D3557]">
            Trusted Intimate Wellness Distributor
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            We are a reliable wholesale distributor of intimate wellness and
            personal wellness products catering to medical stores, retail shops,
            wellness outlets and bulk buyers. Our focus is consistent supply,
            genuine brands and competitive pricing.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1D3557]">
            Product Categories We Supply
          </h3>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li>✔ Condoms (Multiple variants and packs)</li>
            <li>✔ Lubricants and personal gels</li>
            <li>✔ Delay sprays and wellness sprays</li>
            <li>✔ Massage oils and body oils</li>
            <li>✔ Pregnancy test kits</li>
            <li>✔ Wellness personal care products</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1D3557]">
            Why Buy From Chandrika Enterprises?
          </h3>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li>✅ Authorized product sourcing</li>
            <li>✅ Bulk order pricing</li>
            <li>✅ Fast delivery across Maharashtra</li>
            <li>✅ Trusted by retailers</li>
            <li>✅ Flexible order quantities</li>
          </ul>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#1D3557] text-white rounded-3xl py-14 text-center">

            <h2 className="text-2xl md:text-3xl font-bold">
              Looking for Bulk Supply or Dealership?
            </h2>

            <p className="mt-3 text-slate-200">
              Contact Chandrika Enterprises today for pricing, catalogs and bulk
              supply enquiries.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#E63946] px-8 py-3 rounded-xl font-semibold hover:bg-[#C51F2A] transition shadow"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
