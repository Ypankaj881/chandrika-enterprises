// import Image from "next/image";
// import products from "@/data/products.json";


// export const metadata = {
//     title: "Our Products | Chandrika Enterprise",
//     description:
//         "Browse our wide range of stationery products including notebooks, pens, files, office supplies, and more.",
// };

// // const products = [
// //     { name: "Classic Notebook", img: "/images/notebooks.jpg" },
// //     { name: "Gel Pen Pack", img: "/images/pens.jpg" },
// //     { name: "Office File Set", img: "/images/files.jpg" },
// //     // Add more products later
// // ];

// export default function Products() {
//     return (
//         <main className="max-w-7xl mx-auto px-6 py-16">
//             <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                 {products.map((p) => (
//                     <div
//                         key={p.name}
//                         className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
//                     >
//                         <div className="relative w-full h-48">
//                             <Image src={p.img} alt={p.name} fill className="object-cover" />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h2 className="font-semibold">{p.name}</h2>
//                             <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                                 Request Quote
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }


import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export const metadata = {
    title: "Products | Chandrika Enterprise",
    description:
        "Explore premium stationery brands and product categories supplied by Chandrika Enterprise for schools, offices and retailers.",
};

export default function ProductsPage() {
    return (
        <main className="bg-[#F8FAFC] min-h-screen text-slate-800">

            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-r from-[#1D3557] to-[#243A5E] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our Product Range
                    </h1>
                    <p className="mt-4 text-slate-200 max-w-2xl mx-auto">
                        We supply trusted stationery brands and products for schools,
                        offices, wholesalers and retailers across Maharashtra.
                    </p>
                </div>
            </section>

            {/* ================= CATEGORIES ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {products.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/products/${cat.slug}`}
                            className="bg-white border rounded-2xl hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="relative h-52 bg-white">
                                <Image
                                    src={cat.logo}
                                    alt={cat.name}
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h2 className="font-semibold text-[#1D3557] hover:text-[#E63946] transition">
                                    {cat.name}
                                </h2>
                            </div>
                        </Link>
                    ))}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#1D3557] text-white rounded-3xl py-14 text-center">

                        <h2 className="text-2xl md:text-3xl font-bold">
                            Looking for Bulk or Wholesale Orders?
                        </h2>

                        <p className="mt-3 text-slate-200">
                            Get in touch with us for catalogs, pricing and distributor enquiries.
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
