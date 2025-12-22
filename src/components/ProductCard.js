import Image from "next/image";
import Button from "./Button";

export default function ProductCard({ item }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative w-full h-44 bg-gray-50">
                <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain p-4"
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">
                    {item.name}
                </h3>

                <div className="mt-4">
                    <Button
                        href={`https://wa.me/918169708265?text=Enquiry about ${item.name}`}
                        variant="whatsapp"
                    >
                        Enquire
                    </Button>
                </div>
            </div>
        </div>
    );
}
