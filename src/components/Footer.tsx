import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--green-dark)] text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo / Nombre */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">JairDEV</h2>
          <p className="text-[var(--maize-light)]">
            Calidad y frescura directamente para ti.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="text-center">
          <h4 className="font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#products"
                className="hover:text-[var(--maize)] transition"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="hover:text-[var(--maize)] transition"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="hover:text-[var(--maize)] transition"
              >
                Nuestro Proceso
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[var(--maize)] transition"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-4">Síguenos</h4>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maize)] transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maize)] transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maize)] transition text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyrigh */}
      <div className="mt-8 border-t border-[var(--maize)]/50 pt-4 text-center text-sm text-[var(--maize-light)]">
        © 2026 JairDev. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
