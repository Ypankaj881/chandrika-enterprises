export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "WholesaleStore"],
        "@id": "https://www.chandrika-enterprises.in/#business",
        name: "Chandrika Enterprises",
        url: "https://www.chandrika-enterprises.in",
        logo: "https://www.chandrika-enterprises.in/logo.png",
        image: "https://www.chandrika-enterprises.in/logo.png",
        telephone: "+91-8169708265", // use real number
        address: {
            "@type": "PostalAddress",
            streetAddress: "Shree Nagar",
            addressLocality: "Thane",
            addressRegion: "MH",
            postalCode: "400604",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 19.2183,
            longitude: 72.9781,
        },
        openingHours: "Mo-Sa 09:00-19:00",
        // sameAs: [
        //   "https://www.facebook.com/chandrikaenterprises", // real links only
        //   "https://www.instagram.com/chandrikaenterprises"
        // ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
