const Process = () => {
  const steps = [
    {
      title: "Producción",
      description:
        "Cosechamos y procesamos la materia prima con los más altos estándares de calidad.",
      icon: "/images/prodeccion.jpg",
    },
    {
      title: "Selección",
      description:
        "Seleccionamos cuidadosamente los productos para garantizar frescura y calidad.",
      icon: "/images/selector.jpg",
    },
    {
      title: "Distribución",
      description:
        "Entregamos rápidamente a nuestros clientes con logística eficiente y confiable.",
      icon: "/images/distribucion.jpg",
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-[var(--agro-green)]/5 py-20 px-6"
    >
      {/* Fondo sutil opcional */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/fondo-proceso.jpg')] bg-cover bg-center opacity-5" />

      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12">Nuestro Proceso</h3>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[var(--green-light)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Icono */}
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 mx-auto mb-4"
              />

              {/* Título */}
              <h4 className="text-2xl font-semibold mb-2 text-[var(--green-dark)]">
                {step.title}
              </h4>

              {/* Descripción */}
              <p className="text-gray-600">{step.description}</p>

              {/* Conector horizontal para desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-50%] w-full h-1 bg-[var(--maize-light)] z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
