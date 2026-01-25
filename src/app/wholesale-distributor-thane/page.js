export const metadata = {
  title: "Wholesale Distributor in Thane | Stationery, Personal Care & FMCG",
  description:
    "Chandrika Enterprise is a trusted wholesale distributor in Thane supplying stationery, personal care, baby products, perfumes and wellness essentials to retailers and institutions.",
};

export default function WholesaleDistributorPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center">
          Wholesale Distributor in Thane – Chandrika Enterprise
        </h1>

        <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
          Chandrika Enterprise is a trusted wholesale distributor serving retailers,
          institutions, medical stores and corporate buyers across Thane and nearby areas.
          We supply quality products at competitive prices with reliable delivery.
        </p>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              📚 Stationery & Office Supplies
            </h2>
            <p className="mt-2 text-slate-600">
              Notebooks, pens, pencils, files, school stationery, office consumables and bulk supplies
              for schools, offices and distributors.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              🧴 Personal Care & Body Care Products
            </h2>
            <p className="mt-2 text-slate-600">
              Skin care, grooming products, hygiene essentials and wellness items from trusted brands
              for retail distribution.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              👶 Baby Care Products
            </h2>
            <p className="mt-2 text-slate-600">
              Safe and quality baby care products including daily essentials for pharmacies and baby stores.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              🌸 Perfumes & Fragrances
            </h2>
            <p className="mt-2 text-slate-600">
              Branded perfumes and fragrances for gifting, retail counters and bulk supply.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow md:col-span-2">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              🏥 Healthcare & Wellness Essentials
            </h2>
            <p className="mt-2 text-slate-600">
              Protection, hygiene and wellness products supplied responsibly to medical stores and authorised retailers.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/918169708265?text=Hello, I am looking for wholesale distribution partnership."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition"
          >
             Contact Us on WhatsApp
          </a>
        </div>

      </section>
    </main>
  );
}
