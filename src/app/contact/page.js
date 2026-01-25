import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title:
    "Contact Chandrika Enterprises | Wholesale Distributor in Thane & Navi Mumbai",

  description:
    "Contact Chandrika Enterprises for bulk orders, dealership enquiries and wholesale supply of stationery, personal care, baby products, perfumes and FMCG items across Thane and Navi Mumbai.",

  keywords:
    "contact stationery distributor Thane, wholesale supplier Thane, baby products distributor Navi Mumbai, personal care wholesale contact, perfume distributor Thane, FMCG supplier Maharashtra",
};


export default function Contact() {
    return (
        <main className="bg-[#F8FAFC] text-slate-800 min-h-screen">

            {/* ================= HEADER ================= */}
            <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Contact Chandrika Enterprises
                    </h1>
                    <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
                        Bulk orders, dealership enquiries, or product details — we’re here to help.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* ---------- CONTACT INFO ---------- */}
                    <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-6">

                        <div>
                            <h3 className="text-lg font-semibold text-[#1D3557]">📍 Address</h3>
                            <p className="mt-1 text-slate-600">
                                Shree Nagar, Thane, Maharashtra
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#1D3557]">📞 Phone</h3>
                            <p className="mt-1 text-slate-600">
                                +91 9892601601 <br />
                                +91 8169708265
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#1D3557]">📧 Email</h3>
                            <p className="mt-1 text-slate-600">
                                chandrika_enterprise@outlook.com
                            </p>
                        </div>

                        {/* CTA */}
                        <WhatsAppButton />
                    </div>

                    {/* ---------- MAP ---------- */}
                    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                        <iframe
                            className="w-full h-full min-h-[360px]"
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
