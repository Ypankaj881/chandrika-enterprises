// src/components/Navbar.jsx
"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <header
            className={
                "sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow " +
                (scrolled ? "shadow-lg" : "shadow-sm")
            }
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/chandrika_ent_logo7.png" alt="logo" width={180} height={60} />
                    </Link>

                    <ul className="hidden md:flex items-center gap-6 text-gray-700">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-700"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {/* simple hamburger */}
                        <span className="text-2xl">☰</span>
                    </button>
                </nav>

                {/* Mobile menu */}
                <div className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
                    <ul className="space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
