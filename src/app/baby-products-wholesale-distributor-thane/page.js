export const metadata = {
  title: "Baby Products Wholesale Supplier in Thane | Chandrika Enterprises",
  description:
    "Wholesale supplier of baby care products in Thane including hygiene, care essentials and wellness products for retailers.",
};

export default function BabySEOPage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-800">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-[#1D3557]">
          Baby Products Wholesale Supplier in Thane
        </h1>

        <p className="mt-6 text-lg">
          Chandrika Enterprises supplies baby care and hygiene products to pharmacies,
          retailers and distributors across Thane and Navi Mumbai.
        </p>

        <p className="mt-4">
          Our baby product range includes daily care essentials sourced from
          reliable manufacturers with consistent quality.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[#1D3557]">
          Why Partner With Us
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Bulk availability</li>
          <li>Trusted brands</li>
          <li>Competitive wholesale margins</li>
          <li>Reliable delivery</li>
        </ul>

        <a
          href="/products"
          className="inline-block mt-8 bg-[#E63946] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#C51F2A] transition"
        >
          View Products
        </a>
      </section>
    </main>
  );
}
