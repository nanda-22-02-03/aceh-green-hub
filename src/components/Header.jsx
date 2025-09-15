import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const headerRef = useRef(null);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Dummy produk untuk search suggestion
  const products = [
    { id: 1, name: "Kopi Pandan Jahe", slug: "kopi-pandan-jahe" },
    { id: 2, name: "Banana Chips", slug: "banana-chips" },
    { id: 3, name: "Madu Lusera", slug: "madu-lusera" },
    { id: 4, name: "Keripik Bawang Pedas", slug: "keripik-bawang" },
    { id: 5, name: "Teh Tarik Aceh", slug: "teh-tarik" },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Close dropdowns saat klik luar atau tekan ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsProductOpen(false);
        setMobileMenu(false);
      }
    };
    const handleKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // 🔹 Disable body scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenu]);

  const closeAll = () => {
    setIsProductOpen(false);
    setMobileMenu(false);
  };

  // 🔹 Navigate helper
  const handleNavigate = (href) => {
    closeAll();
    if (!href) return;

    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 200);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🔹 Klik suggestion produk
  const handleSelectProduct = (slug) => {
    setSearchTerm("");
    navigate(`/product/${slug}`);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white shadow-sm border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-2 font-bold text-green-800"
        >
          <img
            src="/images/logo_agh.png"
            alt="Logo"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleNavigate("/")}
            className="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700 transition"
          >
            Home
          </button>
          <div className="relative">
            <button
              onClick={() => setIsProductOpen((s) => !s)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700 transition"
            >
              Product <ChevronDown className="w-4 h-4" />
            </button>
            {isProductOpen && (
              <div className="absolute left-0 mt-2 w-44 py-2 bg-green-700 shadow rounded-lg">
                {["food", "beverage", "fashion", "craft"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleNavigate(`/products/${cat}`)}
                    className="w-full text-left block px-3 py-2 text-sm hover:bg-green-50 hover:text-green-700"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => handleNavigate("#partners")}
            className="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700 transition"
          >
            Partners
          </button>
          <button
            onClick={() => handleNavigate("/about")}
            className="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700 transition"
          >
            About Us
          </button>
        </nav>

        {/* 🔎 Search (selalu tampil rapi) */}
        <div className="relative flex-1 max-w-md mx-2 hidden sm:block">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
            <Search className="w-5 h-5 text-green-700 mr-2" />
            <input
              ref={inputRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari produk..."
              className="w-full focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Dropdown suggestion */}
          {searchTerm && (
            <div className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow max-h-60 overflow-y-auto z-50">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p.slug)}
                    className="px-3 py-2 text-sm cursor-pointer hover:bg-green-50"
                  >
                    {p.name}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500 text-sm">
                  Produk tidak ditemukan
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          {/* Cart & Account */}
          <Link
            to="/cart"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full hover:bg-green-100"
          >
            <ShoppingCart className="w-5 h-5 text-green-700" />
          </Link>
          <Link to="/account" className="p-2 rounded-full hover:bg-green-100">
            <User className="w-5 h-5 text-green-700" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenu((s) => !s);
            }}
            className="md:hidden p-2 rounded-full hover:bg-green-100"
          >
            {mobileMenu ? (
              <X className="w-6 h-6 text-green-700" />
            ) : (
              <Menu className="w-6 h-6 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 py-2 border-t bg-white">
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
          <Search className="w-5 h-5 text-green-700 mr-2" />
          <input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari produk..."
            className="w-full focus:outline-none text-sm"
          />
        </div>

        {searchTerm && (
          <div className="mt-1 bg-white border rounded-md shadow max-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p.slug)}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-green-50"
                >
                  {p.name}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500 text-sm">
                Produk tidak ditemukan
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-sm w-full absolute left-0 z-40">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => handleNavigate("/")}
              className="block w-full text-left px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700"
            >
              Home
            </button>
            <button
              onClick={() => setIsProductOpen((s) => !s)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700"
            >
              Product <ChevronDown className="w-4 h-4" />
            </button>
            {isProductOpen && (
              <div className="pl-3 space-y-1">
                {["food", "beverage", "fashion", "craft"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleNavigate(`/products/${cat}`)}
                    className="block w-full text-left px-3 py-2 rounded bg-green-700"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={() => handleNavigate("#partners")}
              className="block w-full text-left px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700"
            >
              Partners
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className="block w-full text-left px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-700"
            >
              About Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;