// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import TopStickyHeader from "./TopStickyHeader";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Shadow on scroll
//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 8);
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     // Lock body scroll when menu open
//     useEffect(() => {
//         document.body.style.overflow = open ? "hidden" : "";
//     }, [open]);

//     const menuItems = [
//         { name: "Home", href: "/" },
//         { name: "Products", href: "/products" },
//         { name: "About", href: "/about" },
//         { name: "Contact", href: "/contact" },
//     ];

//     return (
//         <>
//             {/* Top Announcement */}
//             <TopStickyHeader />

//             {/* Navbar */}
//             <header
//                 className={`sticky top-[56px] z-40 bg-white/90 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
//                     }`}
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <nav className="flex items-center justify-between h-16">
//                         {/* Logo */}
//                         <Link href="/" className="flex items-center gap-3">
//                             <Image
//                                 src="/logo.png"
//                                 alt="logo"
//                                 width={180}
//                                 height={60}
//                                 priority
//                             />
//                         </Link>

//                         {/* Desktop Menu */}
//                         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//                             {menuItems.map((item) => (
//                                 <li key={item.href} className="relative group">
//                                     <Link
//                                         href={item.href}
//                                         className="hover:text-yellow-500 transition-colors duration-300"
//                                     >
//                                         {item.name}
//                                         <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
//                             onClick={() => setOpen(true)}
//                             aria-label="Open menu"
//                         >
//                             <span className="text-2xl">☰</span>
//                         </button>
//                     </nav>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div
//                     className={`fixed inset-0 w-screen h-screen md:hidden bg-white z-50
//             transform transition-transform duration-500 ease-in-out
//             ${open ? "translate-x-0" : "translate-x-full"}`}
//                 >
//                     {/* Mobile Header */}
//                     <div className="flex justify-between items-center px-4 py-4 border-b">
//                         <Link href="/" onClick={() => setOpen(false)}>
//                             <Image src="/logo.png" alt="logo" width={120} height={40} />
//                         </Link>

//                         <button
//                             className="text-2xl text-gray-700"
//                             onClick={() => setOpen(false)}
//                             aria-label="Close menu"
//                         >
//                             ✕
//                         </button>
//                     </div>

//                     {/* Mobile Links */}
//                     <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700">
//                         {menuItems.map((item, idx) => (
//                             <li
//                                 key={item.href}
//                                 style={{ transitionDelay: `${idx * 80}ms` }}
//                                 className={`border-b pb-2 font-medium transform transition-all duration-500
//                   ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
//                   hover:text-yellow-500`}
//                             >
//                                 <Link href={item.href} onClick={() => setOpen(false)}>
//                                     {item.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </header>
//         </>
//     );


// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import TopStickyHeader from "./TopStickyHeader";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* FIXED HEADER WRAPPER */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <TopStickyHeader />

                {/* WHITE NAVBAR */}
                <header
                    className={`transition-all duration-300 bg-white
            ${scrolled ? "shadow-md" : "shadow-sm"}
          `}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex items-center justify-between h-[72px]">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={170}
                                    height={50}
                                    priority
                                />
                            </Link>

                            {/* Desktop Menu */}
                            <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-gray-800">
                                {menuItems.map((item) => (
                                    <li key={item.href} className="relative group">
                                        <Link
                                            href={item.href}
                                            className="transition-colors duration-300 hover:text-black"
                                        >
                                            {item.name}
                                            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="hidden md:flex">
                                {/* <Link
                                    href="/contact"
                                    className="px-5 py-2 text-sm rounded-full
                  bg-gray-900 text-white font-semibold
                  hover:bg-gray-800 transition"
                                >
                                    Get Quote
                                </Link> */}

                                {/* <WhatsAppButton /> */}


                                <Link
                                    href="https://wa.me/918169708265"
                                    target="_blank"
                                    className="px-5 py-3 text-sm rounded-lg
   font-semibold    border-2 border-[#25D366]
        text-[#25D366]
   hover:bg-[#25D366]
        hover:text-white transition"
                                >
                                    WhatsApp Order
                                </Link>


                            </div>

                            {/* Mobile Toggle */}
                            <button
                                className="md:hidden text-gray-900 text-2xl"
                                onClick={() => setOpen(true)}
                                aria-label="Open menu"
                            >
                                ☰
                            </button>
                        </nav>
                    </div>
                </header>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed top-[55px] inset-0 bg-white z-[60] transform transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <Image src="/logo.png" alt="logo" width={140} height={40} />
                    <button
                        className="text-gray-900 text-2xl"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-6 py-8 text-gray-800 text-lg">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block border-b pb-3 hover:text-black"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <div className="flex justify-center">

                        <Link
                            href="https://wa.me/918169708265"
                            target="_blank"
                            className="px-5 py-3 w-fit text-sm rounded-lg
                        font-semibold    border-2 border-[#25D366]
                        text-[#25D366]
                        hover:bg-[#25D366]
                        hover:text-white transition"
                        >
                            WhatsApp Order
                        </Link>
                    </div>
                    {/* <WhatsAppButton /> */}


                </ul>
            </div>

            {/* SPACER (VERY IMPORTANT) */}
            <div className="h-[127px]" />
        </>
    );
}
