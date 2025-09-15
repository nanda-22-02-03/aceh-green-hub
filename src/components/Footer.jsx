const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-auto">
      <div className="container mx-auto px-6">
        {/* Logo di atas */}
        <div className="flex flex-col items-center text-center mb-4">
          <img
            src="/images/foto_agh.png"
            alt="Acehgreenhub Logo"
            className="w-32 h-auto mb-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left text-sm">
          {/* Alamat */}
          <div>
            <h4 className="font-bold mb-1">Alamat :</h4>
            <p className="leading-relaxed text-sm">
              Universitas Serambi Mekkah <br />
              Batoh <br />
              Kec. Lueng Bata <br />
              Kota Banda Aceh <br />
              Aceh
            </p>
            <a
              href="#"
              className="flex items-center justify-center md:justify-start mt-2 text-sm font-semibold hover:text-green-700"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
                  0-2.5-1.12-2.5-2.5s1.12-2.5 
                  2.5-2.5 2.5 1.12 2.5 2.5-1.12 
                  2.5-2.5 2.5z" />
              </svg>
              Dapatkan Alamat
            </a>
          </div>

          {/* Jam Operasional */}
          <div>
            <h4 className="font-bold mb-1">Jam Aktif</h4>
            <ul className="text-sm space-y-0.5 mb-3">
              <li>Senin - Jum’at : 08:00 - 16:00</li>
              <li>Sabtu : 08:00 - 13:00</li>
            </ul>

            <h4 className="font-bold mb-1">Jam Operasional</h4>
            <ul className="text-sm space-y-0.5">
              <li>Senin - Jum’at : 08:00 - 16:00</li>
              <li>Sabtu : 08:00 - 13:00</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold mb-2">Kontak</h4>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#" className="flex items-center text-sm hover:text-green-700">
                <img src="/images/footer/gmail.png" alt="gmail" className="w-5 h-5 mr-2" />
                <span>namagmail@gmail.com</span>
              </a>
              <a href="#" className="flex items-center text-sm hover:text-green-700">
                <img src="/images/footer/telephone.png" alt="telephone" className="w-5 h-5 mr-2" />
                <span>0851-6797-3974</span>
              </a>
              <a href="#" className="flex items-center text-sm hover:text-green-700">
                <img src="/images/footer/instagram.png" alt="instagram" className="w-5 h-5 mr-2" />
                <span>acehgreenhub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-6 pt-3 text-center">
          <p className="text-sm">
            &copy; Copyright 2025 - Aceh Green Hub <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;