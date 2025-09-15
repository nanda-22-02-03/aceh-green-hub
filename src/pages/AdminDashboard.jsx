import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Package,
  Users,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  Upload,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("produk");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔹 state produk
  const [products, setProducts] = useState([
    { id: 1, name: "Kopi Pandan Jahe", price: 33000, stock: 20, image: "" },
    { id: 2, name: "Banana Chips", price: 25000, stock: 50, image: "" },
  ]);

  // 🔹 modal tambah produk
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    imagePreview: "",
  });

  // 🔹 dummy user & laporan
  const users = [
    { id: 1, name: "Nanda", email: "nanda@example.com", role: "User" },
    { id: 2, name: "Admin", email: "admin@example.com", role: "Admin" },
  ];
  const reports = [
    { id: 1, product: "Kopi Pandan Jahe", sold: 120, revenue: 3960000 },
    { id: 2, product: "Banana Chips", sold: 80, revenue: 2000000 },
  ];

  const menuItems = [
    { key: "produk", label: "Kelola Produk", icon: <Package className="w-5 h-5" /> },
    { key: "user", label: "Kelola User", icon: <Users className="w-5 h-5" /> },
    { key: "laporan", label: "Laporan Penjualan", icon: <BarChart2 className="w-5 h-5" /> },
    { key: "pengaturan", label: "Pengaturan", icon: <Settings className="w-5 h-5" /> },
    { key: "logout", label: "Keluar", icon: <LogOut className="w-5 h-5" /> },
  ];

  const handleClick = (key) => {
    setActive(key);
    setIsSidebarOpen(false);
    if (key === "logout") navigate("/account");
  };

  // 🔹 handle upload produk
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({
        ...newProduct,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSaveProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      alert("Lengkapi semua data produk!");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock),
        image: newProduct.imagePreview,
      },
    ]);
    setNewProduct({ name: "", price: "", stock: "", image: "", imagePreview: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 bg-green-800 text-white flex-col">
        <div className="p-6 text-2xl font-bold border-b border-green-700">Admin Panel</div>
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

      {/* Sidebar Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-green-700">
          <span className="text-2xl font-bold">Admin Panel</span>
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

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Content */}
      <main className="flex-1 p-6">
        {/* Mobile Topbar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-7 h-7 text-green-800" />
          </button>
          <h1 className="text-xl font-bold">Dashboard Admin</h1>
          <div className="w-7"></div>
        </div>

        {/* Kelola Produk */}
        {active === "produk" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Kelola Produk</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mb-4 px-4 py-2 bg-green-700 text-white rounded flex items-center gap-2 hover:bg-green-800"
            >
              <Plus className="w-4 h-4" /> Tambah Produk
            </button>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow rounded text-sm sm:text-base">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="p-3">Gambar</th>
                    <th className="p-3">Nama Produk</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-t">
                      <td className="p-3">
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500">No Img</div>
                        )}
                      </td>
                      <td className="p-3">{p.name}</td>
                      <td className="p-3">Rp {p.price.toLocaleString()}</td>
                      <td className="p-3">{p.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 🔹 Modal Tambah Produk */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Tambah Produk</h3>
              <input
                type="text"
                placeholder="Nama Produk"
                className="w-full border px-3 py-2 rounded mb-3"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Harga"
                className="w-full border px-3 py-2 rounded mb-3"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <input
                type="number"
                placeholder="Stok"
                className="w-full border px-3 py-2 rounded mb-3"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              />

              <label className="block mb-2">Upload Gambar</label>
              <input type="file" onChange={handleImageUpload} className="mb-3" />
              {newProduct.imagePreview && (
                <img src={newProduct.imagePreview} alt="Preview" className="w-32 h-32 object-cover mb-3 rounded" />
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Batal
                </button>
                <button onClick={handleSaveProduct} className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;