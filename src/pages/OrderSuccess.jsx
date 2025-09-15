import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
            {/* Icon Success */}
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto animate-bounce" />

            {/* Message */}
            <h1 className="text-2xl font-bold text-green-700 mt-6">
            Pesanan Berhasil!
            </h1>
            <p className="text-gray-600 mt-2">
            Terima kasih telah berbelanja di <strong>Aceh Green Hub</strong>.
            Pesananmu sedang kami proses 🚚
            </p>

            {/* Order Number */}
            <p className="mt-4 text-sm text-gray-500">
            Nomor Pesanan: <span className="font-semibold">#AGH2025-12345</span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() =>
                navigate("/user", { state: { activeTab: "riwayat" } })
                }
                className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
            >
                Lihat Riwayat Pesanan
            </button>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
            >
                Kembali ke Beranda
            </button>
            </div>
        </div>
        </div>
    );
};

export default OrderSuccess;
