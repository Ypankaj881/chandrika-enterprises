"use client";

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WholesaleStore", // You can also use "Store" or "OfficeEquipmentStore"
        name: "Chandrika Enterprise",
        image: "https://chandrikaenterprise.com/logo.png", // Replace with actual logo URL
        "@id": "https://chandrikaenterprise.com",
        url: "https://chandrikaenterprise.com",
        telephone: "+91-XXXXXXXXXX", // Add your real phone number
        address: {
            "@type": "PostalAddress",
            streetAddress: "Shree Nagar",
            addressLocality: "Thane",
            addressRegion: "Maharashtra",
            postalCode: "400604", // Example pincode for Thane – use correct one
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 19.2183, // Thane approx lat
            longitude: 72.9781, // Thane approx long
        },
        openingHours: "Mo-Sa 09:00-19:00",
        sameAs: [
            "https://www.facebook.com/YourBusinessPage", // optional social links
            "https://www.instagram.com/YourBusinessPage",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
