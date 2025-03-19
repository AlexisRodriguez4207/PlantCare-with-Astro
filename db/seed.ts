import { db, Plantas } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Plantas).values([
    {
      id: 1,
      name: "Arum Lily",
      description:
        "Son originarios de Sudáfrica y son consideradas como la flor nacional de Etiopía. Su color mas común es el blanco, pero también puedes encontrarlas en" +
        "tonos amarillos, naranjas, rosas y morados.",
    },
    {
      id: 2,
      name: "Blue Orchid",
      description:
        "Son originarias de Asia y son consideradas como la flor nacional de Venezuela.",
    },
    {
      id: 3,
      name: "Bugambilia",
      description:
        "Este arbusto o árbol espinoso es nativo de Sudamérica, principalmente de Brasil y Perú. Actualmente se cultiva como planta ornamental en varias regiones subtropicales y tropicales del mundo",
    },
    {
      id: 4,
      name: "Clavel",
      description:
        "El lugar de nacimiento original del clavel esta en la costa mediterránea oriental. Su nombre latino es Dianthus, derivador de Dios y anthos que significa flor.",
    },
    {
      id: 5,
      name: "Cactus",
      description:
        "Los cactus son originarios de América. Podemos encontrar cactus silvestres desde Canadá hasta Argentina. El nombre científico de esta familia es cactaceae y la palabra exacta que la define en" +
        "español es cactáceas, aunque su denominación popular sea la de cactus",
    },
    {
      id: 6,
      name: "Girasol",
      description:
        "El girasol es una planta domesticada importante; su forma silvestre es originaria del norte de México y oeste de E.U.A. El nombre 'girasol' hace referencia al heliotropismo, lo que es el" +
        "movimiento que hacen algunas flores cuando reciben luz solar.",
    },
    {
      id: 7,
      name: "Jacinto",
      description:
        "Estas son flores vibrantes y de olor dulce que pueden crecer en exteriores e interiores durante todo el año. Se consideran nativas del Meditarraneo Oriental, incluida Turquía, Iran, Libano, Siria y la región de Palestina",
    },
    {
      id: 8,
      name: "Orquideas",
      description:
        "Las orquídeas son plantas de origen tropical, pertenecientes a la familia de plantas monocotiledóneas, que se distinguen por la complejidad de sus flores y por ser elementos clave en la polinización.",
    },
    {
      id: 9,
      name: "Peonias",
      description:
        " La Peonía es originaria del sur de Europa donde vive en un estado espontáneo. Se encuentra en Francia, península balcánica y Asia menor.Se reconoce por sus pétalos exuberantes y" +
        "voluminosos de colores luminosos. En el lenguaje de las flores, la Peonía simboliza la protección, la sinceridad y la generosidad. ",
    },
  ]);
}
