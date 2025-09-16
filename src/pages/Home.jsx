import MainProduct from '../components/MainProduct';
import Partners from '../components/Partners';

const Home = () => {
  const features = [
    {
      icon: (<img src="/images/home/product.png" alt="UMKM Icon" className="w-16 h-16" />),
      title: "Produk Lokal Khas Aceh",
      description: "Membangun identitas daerah dengan diferensiasi produk yang unik dan berkualitas",
    },
    {
      icon: (<img src="/images/home/green_concept.png" alt="UMKM Icon" className="w-16 h-16" />),
      title: "Green Concept & Social Mission",
      description: "Menjangkau segmen konsumen yang peduli lingkungan sekaligus mendukung misi sosial",
    },
    {
      icon: (<img src="/images/home/chat_ai.png" alt="UMKM Icon" className="w-16 h-16" />),
      title: "Fitur Chat AI Cerdas",
      description: "Memberikan pengalaman belanja interaktif sekaligus edukasi ramah pengguna",
    },
    {
      icon: (<img src="/images/home/society.png" alt="UMKM Icon" className="w-16 h-16" />),
      title: "Pendampingan UMKM secara aktif",
      description: "Mendampingi pelaku UMKM secara langsung agar siap bersaing di pasar digital",
    },
    {
      description: "Aceh Green Hub Adalah Karya Inovatif Yang Dikembangkan Oleh Mahasiswa Universitas Serambi Mekkah, Sebagai Bentuk Kontribusi Nyata Untuk UMKM Lokal Dan Ekonomi",
    },
  ];

  // fungsi untuk scroll ke bagian katalog
  const scrollToCatalog = () => {
    const section = document.getElementById("main-product");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Logo and Text */}
          <div className="text-center lg:text-left space-y-6">
            <img
              src="/images/foto_agh.png"
              alt="Acehgreenhub Logo"
              className="w-48 max-w-full h-auto mx-auto lg:mx-0"
            />

            <div className="space-y-3 mt-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                Platform Digital Cerdas Berbasis
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 leading-tight">
                GREEN CONCEPT
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Untuk Pemasaran Produk Lokal UMKM <br /> Aceh Yang Ramah Lingkungan
              </p>
            </div>
          </div>

          {/* Decorative Images */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="w-full h-36 sm:h-40 rounded-2xl shadow-lg flex items-center justify-center">
                <img
                  src="/images/home/craft.jpg"
                  alt="kerajinan"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-36 sm:h-40 rounded-xl shadow-md flex items-center justify-center">
                <img
                  src="/images/home/bamboo.jpg"
                  alt="bambu"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="w-full h-107 sm:h-85 rounded-xl shadow-md flex items-center justify-center">
                <img
                  src="/images/home/pintu_aceh.jpg"
                  alt="pintu_aceh"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="w-full -mt-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-80 sm:h-40 lg:h-80"
            preserveAspectRatio="none"
          >
            <path
              fill="#065f46"
              d="M0,160 C 480,260 960,60 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white text-black py-12 lg:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-12 w-full">
            <div className="hidden sm:block flex-1 h-0.5 bg-gray-500 mx-4" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center whitespace-normal leading-snug">
              Mengapa Pilih Aceh Green Hub?
            </h2>
            <div className="hidden sm:block flex-1 h-0.5 bg-gray-500 mx-4" />
        </div>

          {/* Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-3">{feature.title}</h3>
                <p className="text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Deskripsi */}
          <p className="mt-10 text-center font-semibold text-lg max-w-4xl mx-auto leading-relaxed px-4">
            {features[4].description}
          </p>

          <div className="w-full h-10  bg-green-700 mt-8"></div>
        </div>
      </section>
      
      {/* Katalog Section */}
      <section id="main-product">
        <MainProduct />
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-200 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <img 
            src="/images/home/text_agh.png" 
            alt="Acehgreenhub Logo" 
            className="mx-auto mb-6 w-40 sm:w-48 md:w-56 h-auto object-contain"
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Siap Bergabung dengan Gerakan Hijau?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-4xl mx-auto">
            Jadilah Bagian Dari Komunitas Yang Peduli Lingkungan Dan Dukung UMKM Lokal Aceh
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToCatalog}
              className="px-8 py-4 bg-green-800 text-green-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
            >
              Mulai Belanja
            </button>
            <button className="px-8 py-4 bg-green-800 text-green-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
              Daftar Sebagai UMKM
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div id="partners">
        <Partners/>
      </div>

    </div>
  );
};

export default Home;