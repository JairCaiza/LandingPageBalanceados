const Benefits = () => {
  const benefits = [
    {
      title: "🌱 Producto fresco",
      description:
        "Garantizamos productos de la más alta calidad, recién cosechados y listos para su uso.",
      icon: "/images/calidad.jpg",
    },
    {
      title: "🚚 Entrega rápida",
      description:
        "Nuestro sistema logístico asegura que tus pedidos lleguen en tiempo récord.",
      icon: "/images/entregainmed.png",
    },
    {
      title: "🤝 Trato directo",
      description:
        "Comercializamos directamente, sin intermediarios, para ofrecer mejores precios y atención.",
      icon: "/images/trato.png",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative bg-[var(--agro-green)]/5 py-20 px-6"
    >
      {/* Fondo difuminado igual que en Productos */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/images/fondoin.jpg')` }}
      />

      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h3>
        <p className="text-[var(--maize)]/80 mb-12 text-lg">
          Nos enfocamos en calidad, rapidez y trato directo para nuestros
          clientes.
        </p>

        <div className="  grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[var(--maize-light)] relative  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={b.icon}
                alt={b.title}
                className="bg-[var(--green-dark)] w-20 h-20 mx-auto mb-4"
              />
              <h4 className=" text-2xl font-semibold mb-2 text-[var(--green-dark)]">
                {b.title}
              </h4>
              <p className="text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
