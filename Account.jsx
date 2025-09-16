import { useState } from "react";

// Dummy users buat testing login
const users = [
  {
    id: 1,
    firstName: "Nanda User",
    email: "user@agh.com",
    password: "user123",
    role: "user",
  },
  {
    id: 2,
    firstName: "Nanda Admin",
    email: "admin@agh.com",
    password: "admin123",
    role: "admin",
  },
];

const Account = () => {
  const [mode, setMode] = useState("login"); // "login" | "register" | "forgot"
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      const foundUser = users.find(
        (u) =>
          u.email === formData.email.trim() &&
          u.password === formData.password.trim()
      );

      if (foundUser) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", foundUser.role);
        localStorage.setItem("user", JSON.stringify(foundUser));

        if (foundUser.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/user";
        }
      } else {
        alert("❌ Email atau password salah!");
      }
    }

    if (mode === "register") {
      if (formData.password !== formData.confirmPassword) {
        alert("❌ Password tidak sama!");
        return;
      }

      const newUser = {
        id: Date.now(),
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
        role: "user",
      };

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");
      localStorage.setItem("user", JSON.stringify(newUser));

      window.location.href = "/user";
    }

    if (mode === "forgot") {
      alert(`📩 Link reset password sudah dikirim ke email ${formData.email}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex md:w-1/2 relative items-center justify-center bg-gray-50">
          <img
            src="/images/bag.png"
            alt="Eco Bag"
            className="object-contain h-full w-auto max-h-[600px] mx-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1 space-x-2">
            {["login", "register", "forgot"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${
                  mode === m
                    ? "bg-green-800 text-white shadow"
                    : "bg-gray-700 text-black hover:bg-gray-200"
                }`}
              >
                {m === "login"
                  ? "Login"
                  : m === "register"
                  ? "Daftar"
                  : "Lupa Password"}
              </button>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            {mode === "login"
              ? "Selamat Datang Kembali!"
              : mode === "register"
              ? "Buat Akun Baru"
              : "Reset Password"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <input
                name="firstName"
                placeholder="Nama Lengkap"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />

            {mode === "register" && (
              <input
                type="tel"
                name="phone"
                placeholder="No. Handphone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              />
            )}

            {mode !== "forgot" && (
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            )}

            {mode === "register" && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            )}

            {/* Main Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-green-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors shadow-lg mt-2"
            >
              {mode === "login"
                ? "Sign In"
                : mode === "register"
                ? "Create Account"
                : "Send Reset Link"}
            </button>
          </form>

          {/* Divider */}
          {mode !== "forgot" && (
            <>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Atau Lanjutkan Dengan
                  </span>
                </div>
              </div>

              {/* Social Login Dummy */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors shadow-lg">
                  <img
                    src="/images/google.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors shadow-lg">
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;