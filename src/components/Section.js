export default function Section({ title, subtitle, children }) {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                {title && (
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
