export default function WhatsAppButton({
    text = "Enquire on WhatsApp",
    message = "Hello, I want to enquire about your products.",
    phone = "918169708265",
    className = "",
}) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

     const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "Lead",
        event_label: text,
      });
    }
  };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
             onClick={handleClick}
            className={`
        inline-flex items-center gap-3
        px-6 py-3
        rounded-full
        border-2 border-[#25D366]
        text-[#25D366]
        font-semibold text-lg
        transition-all duration-300
        hover:bg-[#25D366]
        hover:text-white
        ${className}
      `}
        >
            {/* WhatsApp Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.645.864 5.084 2.318 7.064L4 29l7.165-2.29a11.95 11.95 0 0 0 4.838.998h.005c6.63 0 12.003-5.373 12.003-12.003C28.01 8.373 22.633 3 16.003 3zm0 21.835a9.85 9.85 0 0 1-4.996-1.355l-.357-.212-4.252 1.359 1.386-4.144-.232-.374a9.817 9.817 0 1 1 8.451 4.726zm5.404-7.398c-.295-.148-1.743-.861-2.013-.959-.27-.099-.466-.148-.663.148-.197.296-.764.959-.936 1.157-.172.197-.344.222-.639.074-.295-.148-1.246-.46-2.374-1.467-.878-.783-1.47-1.75-1.642-2.046-.172-.296-.018-.456.13-.604.133-.132.296-.344.443-.517.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.074-.148-.663-1.6-.91-2.191-.24-.577-.485-.499-.663-.508l-.564-.01c-.197 0-.517.074-.787.37-.27.296-1.035 1.012-1.035 2.469 0 1.456 1.06 2.864 1.207 3.061.148.197 2.086 3.19 5.056 4.47.707.305 1.259.487 1.688.623.71.226 1.355.194 1.866.118.569-.085 1.743-.712 1.989-1.399.246-.687.246-1.276.172-1.399-.074-.123-.27-.197-.564-.345z" />
            </svg>

            {text}
        </a>
    );
}
