import React from "react";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
    const navigate = useNavigate();

    const fashions = [
        { id: 9, name: "Agasalay’s Fashion – Aceh Oriental Gown", price: 33000, image: "/images/fashion/agasalay.jpg" },
        { id: 10, name: "Jilbab Ecoprint", price: 33000, image: "/images/fashion/jilbab.jpg" },
        { id: 11, name: "Blazer Kerawang Gayo", price: 33000, image: "/images/fashion/blazer.jpg" },
        { id: 12, name: "Jilbab Kerawang Gayo", price: 33000, image: "/images/fashion/jilbab_kerawang.jpg" },
    ];

    return (
        <div className="bg-green-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Produk Fashion
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {fashions.map((fash) => (
                <div
                key={fash.id}
                onClick={() => {
                    navigate(`/product/${fash.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition cursor-pointer"
                >
                <div className="h-40 flex items-center justify-center bg-gray-100">
                    <img
                    src={fash.image}
                    alt={fash.name}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                    />
                </div>
                <div className="bg-green-700 p-3 text-center">
                    <h4 className="text-sm font-medium truncate text-white">
                    {fash.name}
                    </h4>
                    <p className="text-yellow-300 font-bold">
                    Rp {fash.price.toLocaleString()}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default Fashion;
