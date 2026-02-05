import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true); // mostrar u ocultar navbar
  const [lastScrollY, setLastScrollY] = useState(0); // última posición del scroll

  const controlNavbar = () => {
    if (window.scrollY < 100) {
      // si estás cerca del hero, mostrar
      setShow(true);
    } else if (window.scrollY > lastScrollY) {
      // si scrolleas hacia abajo, ocultar
      setShow(false);
    } else {
      // si scrolleas hacia arriba, mostrar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        px-6 py-4 flex justify-between items-center
        bg-gradient-to-r from-[var(--green-light)] via-[var(--maize)] to-[var(--maize-light)]
        text-white backdrop-blur-md
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <h1 className="text-xl font-bold tracking-wide">JAIR-DEV</h1>

      <ul className="flex gap-6">
        <li className="hover:text-[var(--agro-green)] transition">
          <a href="#inicio" className="cursor-pointer">
            Inicio
          </a>
        </li>
        <li className="hover:text-[var(--agro-green)] cursor-pointer transition">
          <a href="#products" className="cursor-pointer">
            Productos
          </a>
        </li>
        <li className="hover:text-[var(--agro-green)] cursor-pointer transition">
          <a href="#benefits" className="cursor-pointer">
            Beneficios
          </a>
        </li>
        <li className="hover:text-[var(--agro-green)] cursor-pointer transition">
          <a href="#contact" className="cursor-pointer">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
