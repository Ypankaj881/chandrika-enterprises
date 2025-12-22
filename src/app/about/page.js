import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
    title: "About Us | Chandrika Enterprises",
    description:
        "Learn about Chandrika Enterprises, our journey, mission, and commitment to quality stationery distribution.",
};

export default function About() {
    return (
        <main className="bg-[#F8FAFC] text-slate-800 min-h-screen">

            {/* ================= HEADER ================= */}
            <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        About Chandrika Enterprises
                    </h1>
                    <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
                        Your trusted stationery distribution partner
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl border shadow-sm p-8 md:p-12 space-y-6">

                    <p className="text-slate-700 leading-relaxed text-lg">
                        Chandrika Enterprises is a trusted distributor of quality stationery
                        products, serving schools, offices, retailers, and institutions.
                        We focus on reliability, fair pricing, and long-term partnerships.
                    </p>

                    <p className="text-slate-700 leading-relaxed text-lg">
                        We work with reputed brands to ensure consistent quality and timely
                        delivery for bulk and recurring orders. Our experience helps us
                        understand customer needs and provide the right products at the
                        right time.
                    </p>

                    {/* ================= HIGHLIGHTS ================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                        <div className="text-center border rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-[#1D3557]">
                                Trusted Brands
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Partnerships with reputed stationery manufacturers
                            </p>
                        </div>

                        <div className="text-center border rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-[#1D3557]">
                                Bulk Supply
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Efficient handling of bulk and recurring orders
                            </p>
                        </div>

                        <div className="text-center border rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-[#1D3557]">
                                Reliable Service
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Timely delivery and consistent support
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= CTA ================= */}
                <div className="text-center mt-14">
                    {/* <a
                        href="https://wa.me/918169708265?text=I want to enquire about your stationery distribution services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#E63946] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow hover:bg-[#C51F2A] transition"
                    >
                        💬 Enquire on WhatsApp
                    </a> */}
                    <WhatsAppButton />
                </div>
            </section>

        </main>
    );
}
