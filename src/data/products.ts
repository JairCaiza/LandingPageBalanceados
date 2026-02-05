// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Maíz Amarillo",
    description:
      "Materia prima de alta calidad para consumo humano e industrial.",
    image: "/images/maiz.jpg",
  },
  {
    id: 2,
    name: "Soya",
    description: "Ideal para balanceados, aceites y derivados proteicos.",
    image: "/images/soya.jpg",
  },
  {
    id: 3,
    name: "Trigo",
    description: "Seleccionado para molinos, harinas y procesos industriales.",
    image: "/images/trigo.jpg",
  },
  {
    id: 4,
    name: "Maiz",
    description: "Maiz limpio de 98 lib.",
    image: "/images/maiz-ensacado.jpg",
  },
  {
    id: 5,
    name: "Afrecho",
    description: "Afrecho ecuatoriano",
    image: "/images/afrecho.jpg",
  },
  {
    id: 6,
    name: "Afrecho Amarillo",
    description: "Afrecho remolido de casacara de Trigo",
    image: "/images/afrechoamarillo.jpg",
  },
  {
    id: 7,
    name: "Selecto Grueso",
    description: "Maiz molido cernido de tamaño grueso",
    image: "/images/selecto-grueso.jpg",
  },
  {
    id: 8,
    name: "Selecto Fino",
    description: "Maiz molido cernido de tamaño fino",
    image: "/images/selectofino.jpg",
  },
  {
    id: 9,
    name: "Huevos",
    description: "Huevos baratos",
    image: "/images/huevos.jpg",
  },
];

export default products;
