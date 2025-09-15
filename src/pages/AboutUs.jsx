const AboutUs = () => {
  return (
    <div className="bg-green-50">
      {/* Hero / Our Story */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Gambar full */}
        <img
          src="/images/about/bg_about_us.png"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay tipis agar teks lebih jelas */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Teks OUR STORY di atas gambar */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            OUR STORY
          </h2>
        </div>
      </section>

      {/* Deskripsi di bawah gambar */}
      <section className="text-center py-8 px-6">
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          <span className="font-bold text-green-800">Acehgreenhub</span> adalah
          sebuah platform digital cerdas berbasis green concept yang berfokus
          pada pemasaran produk lokal dan ramah lingkungan dari Aceh, khususnya
          hasil karya UMKM. Platform ini dirancang sebagai jembatan antara pelaku
          usaha lokal dengan konsumen yang semakin peduli terhadap keberlanjutan,
          etika produksi, dan nilai-nilai lokal.
        </p>
      </section>

      {/* Sejarah Usaha */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-bold text-lg mb-4">Sejarah Usaha</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Aceh Green Hub digagas pada awal tahun 2025, melihat banyaknya pelaku
            UMKM lokal yang memiliki produk berkualitas namun kurang dikenal,
            serta tingginya kebutuhan akan produk yang ramah lingkungan,
            sehingga lahirlah gagasan membangun sebuah platform digital yang
            tidak hanya berorientasi bisnis, tetapi juga memiliki nilai sosial
            dan ekologis.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            Sebagai usaha rintisan awal, platform ini diharapkan menjadi salah
            satu unggulan dari Lembaga Inkubator Universitas Serambi Mekkah
            dalam mendorong dan mendukung eksistensi produk lokal dan ramah
            lingkungan di tingkat nasional bahkan internasional.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/sejarah.jpg"
            alt="Sejarah Usaha"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Lokasi Usaha */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/images/lokasi.jpg"
            alt="Lokasi Usaha"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-bold text-lg mb-4">Lokasi Usaha</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Dalam menjalankan aktivitas usahanya, usaha ini mengusung konsep
            Co-Working di Lembaga Inkubator Universitas Serambi Mekkah yang
            beralamat di Jl. Tgk. Imum Lueng Bata, Desa Batoh, Kec. Lueng Bata,
            Kota Banda Aceh, Aceh. 23245.
          </p>
        </div>
      </section>

      {/* Fitur Inovatif */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-bold text-lg mb-4">
            Fitur Inovatif: Chat AI Pendamping Konsumen
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed pb-2">
            Sebagai nilai tambah digital, Aceh Green Hub mengintegrasikan Chat AI berbasis website dan aplikasi mobile, yang berfungsi untuk:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 text-sm md:text-base">
            <li>
              Menjawab pertanyaan konsumen secara otomatis tentang spesifikasi,
              kegunaan, dan keunikan setiap produk yang tersedia.
            </li>
            <li>
              Memberikan rekomendasi produk berdasarkan pertanyaan, kebutuhan,
              dan preferensi pengguna.
            </li>
            <li>
              Menghemat waktu dan meningkatkan pengalaman pengguna (user
              experience) saat berbelanja di platform.
            </li>
          </ul>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            Chat AI ini bekerja berdasarkan basis data dan jawaban yang telah
            diinput oleh tim konten Aceh Green Hub sebelumnya. Dengan pendekatan
            ini, informasi yang diberikan tetap terkontrol, akurat, dan sesuai
            dengan narasi produk UMKM yang ditawarkan.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/fitur.jpg"
            alt="Fitur Inovatif"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Closing */}
      <section className="bg-green-50 py-12 text-center px-6">
        <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Dengan hadirnya Aceh Green Hub, kami tidak hanya membangun sebuah
          platform digital, tetapi juga menggerakkan ekosistem ekonomi hijau yang
          inklusif dan berkelanjutan bagi UMKM lokal Aceh. Melalui pendekatan
          teknologi, semangat kearifan lokal, dan konsep ramah lingkungan, kami
          percaya bahwa Aceh dapat menjadi pionir dalam transformasi digital
          berbasis nilai-nilai sosial dan ekologis.
        </p>
        <p className="text-gray-700 max-w-4xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
          Kami mengundang semua pihak - pemerintah, lembaga pendidikan, mitra
          bisnis, dan masyarakat - untuk menjadi bagian dari gerakan ini.
          Bersama, mari kita wujudkan masa depan ekonomi Aceh yang hijau, cerdas,
          dan berdaya saing.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;