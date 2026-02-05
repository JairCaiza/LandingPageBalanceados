import React from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import products from "../data/products";

const Products: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section
      id="products"
      className="relative bg-[var(--agro-green)]/5 text-[var(--agro-green)] py-20 px-6"
    >
      {/* Fondo difuminado */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/images/fondoproducto.jpg')` }}
      />

      <h3 className="text-4xl font-bold text-center mb-14">
        Venta de Productos
      </h3>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id} className="px-3">
              <div className="group relative bg-[var(--green-dark)] rounded-2xl p-6 text-center overflow-hidden shadow-lg">
                {/* Imagen cuadrada */}
                <div className="relative mx-auto mb-6 w-40 h-40 overflow-hidden border-4 border-[var(--maize)] rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Glow animado */}
                  <div className="absolute inset-0 rounded-2xl border border-[var(--maize-light)] opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>

                <h4 className="text-2xl font-semibold mb-2 text-[var(--white-pure)]">
                  {p.name}
                </h4>

                <p className="text-[var(--maize-light)]/90 text-sm mb-6">
                  {p.description}
                </p>

                <button className="bg-[var(--green-light)] hover:bg-[var(--orange-light)] transition px-6 py-2 rounded-lg font-medium text-black">
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
