import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// Dummy data produk
const productData = [
  { id: 1, name: "Junggefood - Bumbu Bakar", price: 33000, image: "/images/makanan/junggefood.jpg", category: "Makanan", description: "Bumbu bakar khas Aceh, praktis dan enak." },
  { id: 2, name: "Awaina - Terasi Asli", price: 33000, image: "/images/makanan/awaina.jpg", category: "Makanan", description: "Terasi asli dengan aroma khas." },
  { id: 3, name: "Banana Chips", price: 33000, image: "/images/makanan/banana_chips.jpg", category: "Makanan", description: "Keripik pisang gurih dan renyah." },
  { id: 4, name: "Keripik Bawang Pedas", price: 33000, image: "/images/makanan/keripik.jpg", category: "Makanan", description: "Keripik bawang dengan rasa pedas nikmat." },
  { id: 5, name: "MADU LUSERA", price: 33000, image: "/images/minuman/madu.jpg", category: "Minuman", description: "Madu asli alami dari hutan Aceh." },
  { id: 6, name: "Kopi Pandan Jahe", price: 33000, image: "/images/minuman/kopi_pandan.jpg", category: "Minuman", description: "Kopi khas Aceh dengan aroma pandan dan jahe." },
  { id: 7, name: "Arabika Green Bean", price: 33000, image: "/images/minuman/green_bean.jpg", category: "Minuman", description: "Biji kopi Arabika pilihan dari Gayo." },
  { id: 8, name: "Teater Kopi", price: 33000, image: "/images/minuman/teater_kopi.jpg", category: "Minuman", description: "Racikan kopi khas Aceh untuk penikmat sejati." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("deskripsi");

  if (!product) {
    return <div className="p-10 text-center text-red-600">Produk tidak ditemukan.</div>;
  }

  // Simpan produk ke keranjang (localStorage)
  const addToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = savedCart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      savedCart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));
  };

  // Produk terkait (satu kategori)
  const relatedProducts = productData.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* DETAIL PRODUK */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gambar */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[400px] object-contain rounded"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg sm:text-xl text-green-700 font-semibold mt-2">
            Rp {product.price.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Kategori : <span className="font-medium">{product.category}</span>
          </p>

          {/* Quantity & Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 items-center">
            <div className="flex items-center rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-green-500 text-white"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-green-500 text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addToCart();
                navigate("/checkout");
              }}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Pesan Sekarang
            </button>
            <button
              onClick={() => {
                addToCart();
                navigate("/cart");
              }}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>

      {/* TAB */}
      <div className="mt-10">
        <div className="flex gap-4 sm:gap-6 border-b overflow-x-auto">
          {["deskripsi", "informasi", "ulasan"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold whitespace-nowrap ${
                activeTab === tab
                  ? "bg-green-700 border-b-2 border-green-700"
                  : "bg-gray-500 hover:text-green-600"
              }`}
            >
              {tab === "deskripsi"
                ? "Deskripsi"
                : tab === "informasi"
                ? "Informasi Tambahan"
                : "Ulasan"}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm sm:text-base">
          {activeTab === "deskripsi" && (
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          )}
          {activeTab === "informasi" && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Jenis produk: {product.category}</li>
              <li>UMKM Lokal Aceh</li>
              <li>Halal & tanpa pengawet berbahaya</li>
            </ul>
          )}
          {activeTab === "ulasan" && (
            <div className="space-y-4">
              <p className="text-gray-600">Belum ada ulasan.</p>
              <textarea
                placeholder="Tulis ulasanmu..."
                className="w-full border rounded p-3"
              />
              <button className="px-4 sm:px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                Kirim
              </button>
            </div>
          )}
        </div>
      </div>

      {/* PRODUK TERKAIT */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Produk Terkait</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                onClick={() => {
                  navigate(`/product/${rp.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white shadow-md rounded p-3 sm:p-4 text-center hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={rp.image}
                  alt={rp.name}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover mb-2 rounded"
                />
                <h3 className="text-xs sm:text-sm font-medium truncate">{rp.name}</h3>
                <p className="text-green-700 font-bold text-xs sm:text-sm">
                  Rp {rp.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;