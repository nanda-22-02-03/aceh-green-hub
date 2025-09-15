import React from "react";
import { useNavigate } from "react-router-dom";

const Beverage = () => {
    const navigate = useNavigate();

    const beverages = [
        { id: 5, name: "MADU LUSERA", price: 33000, image: "/images/minuman/madu.jpg" },
        { id: 6, name: "Kopi Pandan Jahe", price: 33000, image: "/images/minuman/kopi_pandan.jpg" },
        { id: 7, name: "Arabika Green Bean", price: 33000, image: "/images/minuman/green_bean.jpg" },
        { id: 8, name: "Teater Kopi", price: 33000, image: "/images/minuman/teater_kopi.jpg" },
    ];

    return (
        <div className="bg-green-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Produk Minuman
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {beverages.map((bev) => (
                <div
                key={bev.id}
                onClick={() => {
                    navigate(`/product/${bev.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition cursor-pointer"
                >
                <div className="h-40 flex items-center justify-center bg-gray-100">
                    <img
                    src={bev.image}
                    alt={bev.name}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                    />
                </div>
                <div className="bg-green-700 p-3 text-center">
                    <h4 className="text-sm font-medium truncate text-white">
                    {bev.name}
                    </h4>
                    <p className="text-yellow-300 font-bold">
                    Rp {bev.price.toLocaleString()}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default Beverage;