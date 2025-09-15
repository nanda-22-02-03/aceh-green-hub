import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogOut, List, Menu, X, MapPin } from "lucide-react";

const UserDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // default: "profil", kalau ada state dari OrderSuccess → buka itu
    const [active, setActive] = useState(location.state?.activeTab || "profil");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Dummy data pesanan
    const orders = [
        { id: 1, item: "Kopi Pandan Jahe", qty: 2, status: "Dikirim" },
        { id: 2, item: "Keripik Bawang Pedas", qty: 1, status: "Selesai" },
    ];

    const menuItems = [
        { key: "profil", label: "Profil Saya", icon: <User className="w-5 h-5" /> },
        { key: "cart", label: "Keranjang", icon: <ShoppingCart className="w-5 h-5" /> },
        { key: "riwayat", label: "Riwayat Pesanan", icon: <List className="w-5 h-5" /> },
        { key: "logout", label: "Keluar", icon: <LogOut className="w-5 h-5" /> },
    ];

    const handleClick = (key) => {
        setActive(key);
        setIsSidebarOpen(false);

        if (key === "logout") {
        navigate("/account");
        }

        if (key === "cart") {
        navigate("/cart"); // 🔹 langsung ke halaman keranjang
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar Desktop */}
        <aside className="hidden md:flex w-64 bg-green-800 text-white flex-col">
            <div className="p-6 text-2xl font-bold border-b border-green-700">User Panel</div>
            <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
                <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-md transition ${
                    active === item.key ? "bg-green-600" : "hover:bg-green-700"
                }`}
                >
                {item.icon} {item.label}
                </button>
            ))}
            </nav>
        </aside>

        {/* Sidebar Mobile Drawer */}
        <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-800 text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
        >
            <div className="flex items-center justify-between p-6 border-b border-green-700">
            <span className="text-2xl font-bold">User Panel</span>
            <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
            </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
                <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-md transition ${
                    active === item.key ? "bg-green-600" : "hover:bg-green-700"
                }`}
                >
                {item.icon} {item.label}
                </button>
            ))}
            </nav>
        </div>

        {/* Overlay Mobile */}
        {isSidebarOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
            {/* Mobile Topbar */}
            <div className="flex items-center justify-between mb-6 md:hidden">
            <button onClick={() => setIsSidebarOpen(true)}>
                <Menu className="w-7 h-7 text-green-800" />
            </button>
            <h1 className="text-xl font-bold">Dashboard User</h1>
            <div className="w-7"></div>
            </div>

            {/* Pages */}
            {active === "profil" && (
            <div>
                <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>
                <form className="space-y-4 max-w-lg">
                <input type="text" placeholder="Nama Lengkap" className="w-full border px-4 py-2 rounded" />
                <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
                <input type="tel" placeholder="No. Telepon" className="w-full border px-4 py-2 rounded" />
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-700" />
                    <input type="text" placeholder="Alamat Lengkap" className="w-full border px-4 py-2 rounded" />
                </div>
                <button className="px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700">
                    Simpan Perubahan
                </button>
                </form>
            </div>
            )}

            {active === "riwayat" && (
            <div>
                <h2 className="text-2xl font-bold mb-4">Riwayat Pesanan</h2>
                <div className="bg-white rounded shadow divide-y">
                {orders.map((order) => (
                    <div key={order.id} className="flex justify-between items-center p-4">
                    <div>
                        <p className="font-semibold">{order.item}</p>
                        <p className="text-sm text-gray-600">Qty: {order.qty}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                        {order.status}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            )}
        </main>
        </div>
    );
};

export default UserDashboard;