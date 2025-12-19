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
        "Explore premium stationery products including notebooks, pens, files, office supplies, and more from Chandrika Enterprise.",
};

export default function ProductsPage() {
    return (
        <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-16 shadow-md">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Our Product Range
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
                        We offer a wide selection of high-quality stationery products for
                        businesses, schools, and retailers. Browse our categories below.
                    </p>
                </div>
            </section>

            {/* Product Categories */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/products/${cat.slug}`}
                            className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={cat.logo}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition">
                                    {cat.name}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-amber-600 text-white py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Need Bulk or Custom Orders?
                </h2>
                <p className="mt-2 opacity-90">
                    Contact us today and get a quote for your business or institution.
                </p>
                <Link
                    href="/contact"
                    className="mt-6 inline-block bg-white text-amber-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
}

