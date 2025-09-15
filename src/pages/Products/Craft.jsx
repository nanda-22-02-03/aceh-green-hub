import React from "react";
import { useNavigate } from "react-router-dom";

const Craft = () => {
    const navigate = useNavigate();

    const crafts = [
        { id: 13, name: "SLINGBAG", price: 33000, image: "/images/kerajinan/slingbag.jpg" },
        { id: 14, name: "ACCESSORIES", price: 33000, image: "/images/kerajinan/accessories.jpg" },
        { id: 15, name: "Home Decor", price: 33000, image: "/images/kerajinan/home_decor.jpg" },
        { id: 16, name: "Coconut Shell Teapot and Cup", price: 33000, image: "/images/kerajinan/coconut.jpg" },
    ];

    return (
        <div className="bg-green-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Produk Kerajinan
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {crafts.map((craft) => (
                <div
                key={craft.id}
                onClick={() => {
                    navigate(`/product/${craft.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition cursor-pointer"
                >
                <div className="h-40 flex items-center justify-center bg-gray-100">
                    <img
                    src={craft.image}
                    alt={craft.name}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                    />
                </div>
                <div className="bg-green-700 p-3 text-center">
                    <h4 className="text-sm font-medium truncate text-white">
                    {craft.name}
                    </h4>
                    <p className="text-yellow-300 font-bold">
                    Rp {craft.price.toLocaleString()}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default Craft;