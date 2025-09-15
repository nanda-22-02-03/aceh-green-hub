import React from "react";
import { useNavigate } from "react-router-dom";

const Food = () => {
    const navigate = useNavigate();

    const foods = [
        { id: 1, name: "Junggefood - Bumbu Bakar", price: 33000, image: "/images/makanan/junggefood.jpg" },
        { id: 2, name: "Awaina - Terasi Asli", price: 33000, image: "/images/makanan/awaina.jpg" },
        { id: 3, name: "Banana Chips", price: 33000, image: "/images/makanan/banana_chips.jpg" },
        { id: 4, name: "Keripik Bawang Pedas", price: 33000, image: "/images/makanan/keripik.jpg" },
    ];

    return (
        <div className="bg-green-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Produk Makanan
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {foods.map((food) => (
                <div
                key={food.id}
                onClick={() => {
                    navigate(`/product/${food.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition cursor-pointer"
                >
                <div className="h-40 flex items-center justify-center bg-gray-100">
                    <img
                    src={food.image}
                    alt={food.name}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                    />
                </div>
                <div className="bg-green-700 p-3 text-center">
                    <h4 className="text-sm font-medium truncate text-white">
                    {food.name}
                    </h4>
                    <p className="text-yellow-300 font-bold">
                    Rp {food.price.toLocaleString()}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default Food;
