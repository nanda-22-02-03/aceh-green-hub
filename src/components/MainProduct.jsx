import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainProduct = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Makanan",
      route: "/products/food",
      products: [
        { id: 1, name: "Junggefood - Bumbu Bakar", price: "33.000", image: "/images/makanan/junggefood.jpg" },
        { id: 2, name: "Awaina - Terasi Asli", price: "33.000", image: "/images/makanan/awaina.jpg" },
        { id: 3, name: "Banana Chips", price: "33.000", image: "/images/makanan/banana_chips.jpg" },
        { id: 4, name: "Keripik Bawang Pedas", price: "33.000", image: "/images/makanan/keripik.jpg" },
      ],
    },
    {
      title: "Minuman",
      route: "/products/beverage",
      products: [
        { id: 5, name: "MADU LUSERA", price: "33.000", image: "/images/minuman/madu.jpg" },
        { id: 6, name: "Kopi Pandan Jahe", price: "33.000", image: "/images/minuman/kopi_pandan.jpg" },
        { id: 7, name: "Arabika Green Bean", price: "33.000", image: "/images/minuman/green_bean.jpg" },
        { id: 8, name: "Teater Kopi", price: "33.000", image: "/images/minuman/teater_kopi.jpg" },
      ],
    },
    {
      title: "Fashion",
      route: "/products/fashion",
      products: [
        { id: 9, name: "Agasalay’s Fashion – Aceh Oriental Gown", price: "33.000", image: "/images/fashion/agasalay.jpg" },
        { id: 10, name: "Jilbab Ecoprint", price: "33.000", image: "/images/fashion/jilbab.jpg" },
        { id: 11, name: "Blazer Kerawang Gayo", price: "33.000", image: "/images/fashion/blazer.jpg" },
        { id: 12, name: "Jilbab Kerawang Gayo", price: "33.000", image: "/images/fashion/jilbab_kerawang.jpg" },
      ],
    },
    {
      title: "Kerajinan",
      route: "/products/craft",
      products: [
        { id: 13, name: "SLINGBAG", price: "33.000", image: "/images/kerajinan/slingbag.jpg" },
        { id: 14, name: "ACCESSORIES", price: "33.000", image: "/images/kerajinan/accessories.jpg" },
        { id: 15, name: "Home Decor", price: "33.000", image: "/images/kerajinan/home_decor.jpg" },
        { id: 16, name: "Coconut Shell Teapot and Cup", price: "33.000", image: "/images/kerajinan/coconut.jpg" },
      ],
    },
  ];

  // fungsi untuk pindah halaman detail produk
  const goToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // fungsi untuk pindah halaman kategori
  const handleNavigate = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Katalog</h2>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {category.title}
            </h3>
            <div className="flex items-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => goToProductDetail(product.id)}
                    className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer hover:shadow-lg transition"
                  >
                    <div className="h-40 flex items-center justify-center bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover h-full w-full group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="bg-green-700 p-2 text-center">
                      <h4 className="text-sm font-medium truncate text-white">
                        {product.name}
                      </h4>
                      <p className="text-yellow-300 font-bold">
                        Rp {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Panah → Pindah ke halaman sesuai kategori */}
              <button
                onClick={() => handleNavigate(category.route)}
                className="ml-4 p-3 rounded-full bg-yellow-400 hover:bg-yellow-500 shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProduct;