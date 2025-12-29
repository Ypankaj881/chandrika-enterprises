"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when menu open
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
        <header
            className={`sticky top-0 z-40 bg-white/90 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
                }`}
        >
            {/* Top Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={180}
                            height={60}
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.href} className="relative group">
                                <Link
                                    href={item.href}
                                    className="hover:text-yellow-500 transition-colors duration-300"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="text-2xl">☰</span>
                    </button>
                </nav>
            </div>

            {/* MOBILE MENU (FULL SCREEN, NO OVERFLOW) */}
            <div
                className={`fixed inset-0 w-screen h-screen md:hidden bg-white z-50
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Mobile Header */}
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <Image src="/logo.png" alt="logo" width={120} height={40} />
                    </Link>

                    <button
                        className="text-2xl text-gray-700"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Mobile Links */}
                <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700 overflow-x-hidden">
                    {menuItems.map((item, idx) => (
                        <li
                            key={item.href}
                            style={{ transitionDelay: `${idx * 80}ms` }}
                            className={`border-b pb-2 font-medium transform transition-all duration-500
              ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
              hover:text-yellow-500`}
                        >
                            <Link href={item.href} onClick={() => setOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
