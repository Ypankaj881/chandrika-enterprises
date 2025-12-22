export default function Button({ children, href, variant = "primary" }) {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition";

    const styles = {
        primary: "bg-amber-600 text-white hover:bg-amber-700",
        outline:
            "border border-amber-600 text-amber-700 hover:bg-amber-50",
        whatsapp:
            "bg-green-600 text-white hover:bg-green-700",
    };

    return (
        <a href={href} className={`${base} ${styles[variant]}`}>
            {children}
        </a>
    );
}
