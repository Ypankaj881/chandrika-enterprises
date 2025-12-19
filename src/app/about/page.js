export const metadata = {
    title: "About Us | Chandrika Enterprise",
    description:
        "Learn about Chandrika Enterprise, our journey, mission, and commitment to quality stationery distribution.",
};

export default function About() {
    return (
        <main className="bg-gradient-to-b from-white to-gray-50">
            <section className="max-w-5xl mx-auto px-6 py-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        About Chandrika Enterprise
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Your trusted stationery distribution partner
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Chandrika Enterprise is a trusted distributor of quality stationery
                        products, serving schools, offices, retailers, and institutions.
                        We focus on reliability, fair pricing, and long-term partnerships.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        We work with reputed brands to ensure consistent quality and timely
                        delivery for bulk and recurring orders. Our experience helps us
                        understand customer needs and provide the right products at the
                        right time.
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-amber-600">✔</h3>
                            <p className="mt-2 font-medium text-gray-700">
                                Trusted Brands
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-amber-600">✔</h3>
                            <p className="mt-2 font-medium text-gray-700">
                                Bulk Supply Expertise
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-amber-600">✔</h3>
                            <p className="mt-2 font-medium text-gray-700">
                                Reliable Service
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <a
                        href="https://wa.me/918169708265?text=I want to enquire about your stationery distribution services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition"
                    >
                        💬 Contact Us on WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
