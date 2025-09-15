// Cart.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ fungsi untuk navigate ke MainProduct
  const goToCatalog = () => {
    navigate("/"); // kembali ke home dulu
    setTimeout(() => {
      const section = document.getElementById("main-product");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Keranjang Kosong</h2>
        <button
          onClick={goToCatalog}
          className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Mulai Belanja
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow rounded p-4 gap-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-green-700 font-bold">Rp {item.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-green-500 text-white rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-green-500 text-white rounded">+</button>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">Rp {(item.price * item.quantity).toLocaleString()}</p>
              <button onClick={() => removeItem(item.id)} className="bg-red-500 hover:underline">Hapus</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Total: Rp {total.toLocaleString()}</h2>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <button onClick={goToCatalog} className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Lanjut Belanja
          </button>
          <button onClick={() => navigate("/checkout")} className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
            Lanjutkan ke Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;