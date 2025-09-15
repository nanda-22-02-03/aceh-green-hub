import React, { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // contoh dummy orders
        const dummyOrders = JSON.parse(localStorage.getItem("orders")) || [
        {
            id: "ORD123",
            date: "2025-09-01",
            total: 120000,
            status: "Selesai",
            items: [
            { name: "Bumbu Bakar", qty: 2, price: 20000 },
            { name: "Kopi Gayo", qty: 1, price: 80000 },
            ],
        },
        ];
        setOrders(dummyOrders);
    }, []);

    if (orders.length === 0) {
        return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-center">
            <h2 className="text-xl font-semibold">Belum ada pesanan</h2>
        </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Riwayat Pesanan</h1>

        <div className="space-y-6">
            {orders.map((order) => (
            <div key={order.id} className="bg-white shadow rounded p-6">
                <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">ID Pesanan: {order.id}</h2>
                <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                    order.status === "Selesai"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                    {order.status}
                </span>
                </div>
                <p className="text-gray-600">Tanggal: {order.date}</p>
                <ul className="mt-3 space-y-1">
                {order.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between">
                    <span>
                        {item.name} x {item.qty}
                    </span>
                    <span>Rp {(item.price * item.qty).toLocaleString()}</span>
                    </li>
                ))}
                </ul>
                <div className="mt-3 font-bold text-right">
                Total: Rp {order.total.toLocaleString()}
                </div>
            </div>
            ))}
        </div>
    </div>
);
};

export default Orders;
