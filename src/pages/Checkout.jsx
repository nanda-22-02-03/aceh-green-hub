import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [form, setForm] = useState({
        nama: "",
        email: "",
        telepon: "",
        alamat: "",
        metode: "COD",
    });

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // data pesanan baru
        const newOrder = {
        id: Date.now(),
        nomor: `#AGH-${Date.now()}`,
        nama: form.nama,
        email: form.email,
        telepon: form.telepon,
        alamat: form.alamat,
        metode: form.metode,
        total,
        items: cart,
        status: "Diproses",
        date: new Date().toLocaleString(),
        };

        // simpan ke localStorage
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));

        // hapus keranjang
        localStorage.removeItem("cart");

        // redirect ke success
        navigate("/order-success", { state: { orderId: newOrder.nomor } });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Pembeli */}
            <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded p-6 space-y-4"
            >
            <h2 className="text-lg font-semibold">Data Pembeli</h2>
            <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={form.nama}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            <input
                type="text"
                name="telepon"
                placeholder="No. Telepon"
                value={form.telepon}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            <textarea
                name="alamat"
                placeholder="Alamat Lengkap"
                value={form.alamat}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            <select
                name="metode"
                value={form.metode}
                onChange={handleChange}
                className="w-full border rounded p-2"
            >
                <option value="COD">Cash on Delivery (COD)</option>
                <option value="Transfer">Transfer Bank</option>
                <option value="E-Wallet">E-Wallet</option>
            </select>
            <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
                Buat Pesanan
            </button>
            </form>

            {/* Ringkasan Order */}
            <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h2>
            <div className="space-y-3">
                {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <span>
                    {item.name} x {item.quantity}
                    </span>
                    <span>
                    Rp {(item.price * item.quantity).toLocaleString()}
                    </span>
                </div>
                ))}
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>Rp {total.toLocaleString()}</span>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Checkout;