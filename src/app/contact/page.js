export const metadata = {
    title: "Contact Us | Chandrika Enterprise",
    description:
        "Get in touch with Chandrika Enterprise for bulk stationery orders and business enquiries.",
};

export default function Contact() {
    return (
        <main className="bg-white">
            <section className="max-w-5xl mx-auto px-6 py-16">
                {/* Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl font-semibold text-gray-900">
                        Contact Chandrika Enterprise
                    </h1>
                    <p className="mt-3 text-gray-600">
                        For bulk orders, dealership enquiries, or product details, contact us using the information below.
                    </p>
                </div>

                {/* Info + Map */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Contact Info */}
                    <div className="space-y-6 text-gray-800 text-lg">
                        <div>
                            <p className="font-medium text-gray-900">📍 Address</p>
                            <p className="text-gray-600 mt-1">
                                Shree Nagar, Thane, Maharashtra
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">📞 Phone</p>
                            <p className="text-gray-600 mt-1">
                                +91 9892601601<br />
                                +91 8169708265
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">📧 Email</p>
                            <p className="text-gray-600 mt-1">
                                chandrika_enterprise@outlook.com
                            </p>
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918169708265?text=Hello, I want to enquire about your stationery products."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 border border-green-600 text-green-700 px-6 py-3 rounded-md hover:bg-green-50 transition"
                        >
                            Enquire on WhatsApp
                        </a>
                    </div>

                    {/* Right: Map */}
                    <div className="border rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-[320px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114614.19136989271!2d72.7915173972656!3d19.189182800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92da72e03db%3A0x45bccc7f5d789e53!2sChandrika%20Enterprise!5e1!3m2!1sen!2sin!4v1758031776345!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
