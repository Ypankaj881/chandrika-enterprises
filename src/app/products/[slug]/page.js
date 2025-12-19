import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import fs from "fs";
import path from "path";

export async function generateMetadata({ params }) {
    const slug = params.slug;
    const category = products.find((p) => p.slug === slug);

    return {
        title: `${category?.name || "Products"} | Chandrika Enterprise`,
        description: `Explore ${category?.name || "our products"} at Chandrika Enterprise.`,
    };
}

export default function CategoryPage({ params }) {
    const slug = params.slug;
    const category = products.find((p) => p.slug === slug);

    if (!category) {
        return (
            <main className="text-center py-20">
                <h1 className="text-2xl font-semibold">Category Not Found</h1>
                <Link href="/products" className="text-blue-600 mt-4 inline-block">
                    Back to Products
                </Link>
            </main>
        );
    }

    const filePath = path.join(process.cwd(), "src/data/items", `${slug}.json`);
    const items = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* 🌤️ LIGHT HEADER */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        {category.name}
                    </h1>
                    <p className="mt-2 text-gray-500 max-w-xl mx-auto">
                        Trusted supplier of genuine {category.name} products for schools,
                        offices and retailers.
                    </p>
                </div>

                {/* 🔘 SOFT CTA BUTTONS */}
                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                    <a
                        href={`/catalogs/${slug}.pdf`}
                        download
                        className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition"
                    >
                        📄 Download Catalog
                    </a>

                    <a
                        href={`https://wa.me/918169708265?text=I want to enquire about ${category.name} products`}
                        target="_blank"
                        className="bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-green-600 transition"
                    >
                        💬 WhatsApp Enquiry
                    </a>
                </div>

                {/* 🧱 LIGHT PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
                        >
                            <div className="relative h-40 bg-gray-50 rounded-t-xl">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h3 className="text-sm font-medium text-gray-700">
                                    {item.name}
                                </h3>


                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔙 BACK LINK */}
                <div className="text-center mt-14">
                    <Link href="/products" className="text-sm text-blue-600 hover:underline">
                        ← Back to Categories
                    </Link>
                </div>
            </div>
        </main>
    );
}
