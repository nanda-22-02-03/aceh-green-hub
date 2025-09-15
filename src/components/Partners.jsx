import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const [partners, setPartners] = useState([]);



  return (
    <section className="py-12 bg-gray-50" id="partners">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-8">
        OUR PARTNERS
      </h2>

      <Marquee
        gradient={false} // hilangkan fade gelap di ujung
        speed={40} // kecepatan
        pauseOnHover={true} // stop saat hover
        loop={0} // 0 = infinite
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-8 min-w-[100px]"
          >
            {/* Logo bulat */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border bg-white shadow flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
            {/* Nama partner */}
            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center">
              {partner.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;