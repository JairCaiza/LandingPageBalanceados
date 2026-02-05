const Contact = () => {
  return (
    <section id="contact" className="relative bg-[var(----beige)] py-20 px-6">
      {/* Fondo sutil */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/fondo-contacto.jpg')] bg-cover bg-center opacity-5" />

      <div className="max-w-3xl mx-auto bg-[var(--green-light)]/10 rounded-2xl p-10 shadow-lg text-center">
        <h3 className="text-4xl font-bold mb-6 text-[var(--brown-dark)]">
          Contáctanos
        </h3>

        <p className="flex items-center justify-center gap-2 mb-6 text-xl text-[var(--maize)]">
          <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
          WhatsApp:{" "}
          <a href="https://wa.me/0983792221" className="underline">
            0983792221
          </a>
        </p>

        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 rounded-lg border border-[var(--maize)] focus:outline-none focus:ring-2 focus:ring-[var(--maize)] transition"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded-lg border border-[var(--maize)] focus:outline-none focus:ring-2 focus:ring-[var(--maize)] transition"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-[var(--maize)] focus:outline-none focus:ring-2 focus:ring-[var(--maize)] transition"
          />
          <button
            type="submit"
            className="bg-[var(--maize)] hover:bg-[var(--maize-dark)] text-black px-6 py-2 rounded-lg font-semibold transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
