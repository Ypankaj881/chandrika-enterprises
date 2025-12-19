import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <Link href="/" className="">

                        <Image
                            src="/images/chandrika_ent_logo7.png"
                            alt="Chandrika Enterprise"
                            width={150}
                            height={60}
                            priority
                        />
                    </Link>
                    <nav className="space-x-6 sticky">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 pt-16">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-100 text-center p-4 text-gray-600">
                © {new Date().getFullYear()} Chandrika Enterprise | All Rights Reserved
            </footer>
        </div>
    );
}
