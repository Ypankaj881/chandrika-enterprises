export const metadata = {
  title: "Perfume Distributor in Thane | Wholesale Fragrance Supplier",
  description:
    "Chandrika Enterprises is a perfume distributor in Thane supplying branded fragrances and perfumes to retailers and wholesalers.",
};

export default function PerfumeSEOPage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-800">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-[#1D3557]">
          Perfume Distributor in Thane
        </h1>

        <p className="mt-6 text-lg">
          We supply branded perfumes and fragrances to retailers and resellers
          across Thane and surrounding regions.
        </p>

        <p className="mt-4">
          Our perfume collection includes popular brands with consistent availability
          and competitive wholesale pricing.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[#1D3557]">
          Why Retailers Choose Us
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Genuine branded perfumes</li>
          <li>Attractive wholesale pricing</li>
          <li>Fast local delivery</li>
          <li>Reliable stock availability</li>
        </ul>

        <a
          href="/products"
          className="inline-block mt-8 bg-[#E63946] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#C51F2A] transition"
        >
          Explore Brands
        </a>
      </section>
    </main>
  );
}
