import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import fs from "fs";
import path from "path";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ---------- SEO ---------- */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = products.find((p) => p.slug === slug);

    return {
        title: `${category?.name || "Products"} | Chandrika Enterprises`,
        description: `Explore ${category?.name || "our products"} from Chandrika Enterprises.`,
    };
}

/* ---------- PAGE ---------- */
export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const category = products.find((p) => p.slug === slug);

    if (!category) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
                <h1 className="text-2xl font-semibold text-slate-800">
                    Category Not Found
                </h1>
                <Link
                    href="/products"
                    className="mt-4 text-[#E63946] hover:underline"
                >
                    ← Back to Products
                </Link>
            </main>
        );
    }

    /* ---------- LOAD ITEMS ---------- */
    const filePath = path.join(
        process.cwd(),
        "src/data/items",
        `${slug}.json`
    );

    let items = [];
    if (fs.existsSync(filePath)) {
        items = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    return (
        <main className="bg-[#F8FAFC] min-h-screen text-slate-800">

            {/* ================= HEADER ================= */}
            <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {category.name}
                    </h1>
                    <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
                        Selected popular products from {category.name}.
                        Full range available via catalog or enquiry.
                    </p>
                </div>
            </section>

            {/* ================= ACTION BUTTONS ================= */}
            <section className="max-w-7xl mx-auto px-6 mt-10">
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <a
                        href={`/catalogs/${slug}.pdf`}
                        download
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white transition"
                    >
                        📄 Download Catalog
                    </a>

                    <WhatsAppButton />

                </div>
            </section>

            {/* ================= PRODUCTS GRID ================= */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {items.length > 0 ? (
                        items.slice(0, 12).map((item) => (
                            <div
                                key={item.name}
                                className="bg-white border rounded-2xl hover:shadow-lg transition"
                            >
                                <div className="relative h-44 bg-white rounded-t-2xl">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>

                                <div className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-slate-700">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-slate-500">
                            Products will be updated soon. Please download the catalog or contact us.
                        </p>
                    )}

                </div>
            </section>

            {/* ================= BACK LINK ================= */}
            <section className="pb-20 text-center">
                <Link
                    href="/products"
                    className="text-[#E63946] hover:underline"
                >
                    ← Back to Categories
                </Link>
            </section>

        </main>
    );
}
