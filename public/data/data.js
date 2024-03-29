// Definimos los datos estáticos que nuestra aplicación utilizará para funcionar.
// En una aplicación convencional estos datos provendrían desde un back-end pero a los fines de este ejercicio utilizaremos variables pre-definidas.
// Utilizamos fechas dinámicas para que la aplicación siempre muestre un rango de días entre la fecha actual y el futuro.

const today = new Date();
const hotelsData = [
  {
    id: 1,
    slug: "la-bamba-de-areco",
    name: "La Bamba de Areco",
    photo: "https://i.imgur.com/k99hAlJ.jpg",
    description:
      "La Bamba de Areco It is located in San Antonio de Areco, in the heart of the pampas. It is one of the oldest rooms in Argentina, recently restored to offer its guests all the comfort and colonial splendor. ",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Buenos Aires",
    country: "Argentina",
    price: 4
  },
  {
    id: 2,
    slug: "sainte-jeanne",
    name: "Sainte Jeanne Boutique & Spa",
    photo: "https://i.imgur.com/M5KDHrO.jpeg",
    description:
      "Sainte Jeanne Hotel Boutique & Spa It is located in the heart of Los Troncos, an elegant residential neighborhood of Mar del Plata. Luxury, comfort and passion for details give personality to this warm proposal.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 23,
    city: "Mar del Plata",
    country: "Argentina",
    price: 2
  },
  {
    id: 3,
    slug: "entre-cielos",
    name: "Entre Cielos",
    photo: "https://i.imgur.com/OvLWzfl.jpg",
    description:
      "Located in one of the largest wine-growing regions in Latin America, Entre Cielos was designed and built on an 8-hectare field surrounded by Malbec vineyards and an imposing view of the Andes Mountains.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 16,
    city: "Mendoza",
    country: "Argentina",
    price: 4
  },
  {
    id: 4,
    slug: "huacalera",
    name: "Hotel Huacalera",
    photo: "https://i.imgur.com/l632poR.jpg",
    description:
      "This neocolonial house, built in the 1940s, is located in the heart of the Quebrada de Humahuaca, an extensive valley surrounded by imposing mountain ranges, crossed by the Rio Grande and declared a World Heritage Site in 2003.",
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 32,
    city: "Jujuy",
    country: "Argentina",
    price: 1
  },
  {
    id: 5,
    slug: "merced-del-alto",
    name: "La Merced del Alto",
    photo: "https://i.imgur.com/wZTQ85l.jpg",
    description:
      "Close to Nevado de Cachi, La Merced del Alto stands out over the picturesque valley surrounded by hills, rivers and streams. Dominating over the top, the hotel and its imposing views invite you to explore the Calchaquíes Valley or simply to enjoy the peace of the place.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 14,
    city: "Salta",
    country: "Argentina",
    price: 2
  },
  {
    id: 6,
    slug: "azur-real",
    name: "Azur Real Hotel",
    photo: "https://i.imgur.com/jnG9NzQ.jpg",
    description:
      "Exclusivity surrounded by history. Azur Real Hotel Boutique is located in the heart of the commercial area and the historic center of Córdoba, within one of the main cultural and tourist circuits of the city.",
    availabilityFrom: today.valueOf() + 1296000000, // 15 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 16,
    city: "Córdoba",
    country: "Argentina",
    price: 1
  },
  {
    id: 7,
    slug: "rincon-del-socorro",
    name: "Rincón del Socorro",
    photo: "https://i.imgur.com/SQOQI0F.jpg",
    description:
      "Rincón del Socorro is a ranch located in the Esteros del Iberá nature reserve, a wildlife sanctuary, where the Conservation Land Trust Foundation decided to develop an ambitious recovery and conservation project.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 11,
    city: "Corrientes",
    country: "Argentina",
    price: 2
  },
  {
    id: 8,
    slug: "luma-casa-de-montana",
    name: "Luma Casa de Montaña",
    photo: "https://i.imgur.com/SQOQI0F.jpeg",
    description:
      "Located in a natural environment on the shores of Lake Nahuel Huapi and with the imposing image of the Andes Mountains, Luma Casa de Montaña is majestic but at the same time, simple and homely: a different, timeless and magical place.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 8,
    city: "Villa La Angostura",
    country: "Argentina",
    price: 2
  },
  {
    id: 9,
    slug: "casa-turquesa",
    name: "Casa Turquesa",
    photo: "https://i.imgur.com/R2uIK03.jpg",
    description:
      "Casa Turquesa is a historic 18th century mansion that recreates the typical charm of Paraty, one of the most beautiful colonial heritages in Brazil, declared a World Heritage Site by UNESCO.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 9,
    city: "Río de Janeiro",
    country: "Brasil",
    price: 3
  },
  {
    id: 10,
    slug: "vila-da-santa",
    name: "Vila Da Santa",
    photo: "https://i.imgur.com/NZrNDYX.jpg",
    description:
      "This fisherman's house was elegantly renovated, but without neglecting its original spirit. It opens onto a large central courtyard with two designer pools, one of which is heated.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 19,
    city: "Buzios",
    country: "Brasil",
    price: 3
  },
  {
    id: 11,
    slug: "uxua-casa",
    name: "UXUA Casa Hotel & Spa",
    photo: "https://i.imgur.com/ZpVzjYk.jpg",
    description:
      "UXUA Casa Hotel & Spa is a five-star boutique hotel recognized worldwide for its incomparable tropical beauty, the wonderful bar with ocean views, the award-winning restaurant, a fully equipped gym and the unique Almescar spa that offers innovative treatments with ingredients extracted from the jungle. .",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Bahía",
    country: "Brasil",
    price: 4
  },
  {
    id: 12,
    slug: "ponta-dos-ganchos",
    name: "Ponta dos Ganchos",
    photo: "https://i.imgur.com/xUcclME.jpg",
    description:
      "Located steps away from São Paulo, Rio de Janeiro, and even Buenos Aires, on a private peninsula and surrounded by a picturesque fishing village, is Ponta dos Ganchos, one of the most exclusive beach resorts in southern Brazil.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 25,
    city: "Santa Catarina",
    country: "Brasil",
    price: 4
  },
  {
    id: 13,
    slug: "alto-atacama",
    name: "Alto Atacama",
    photo: "https://i.imgur.com/SLRjbuQ.jpg",
    description:
      "Located steps away from São Paulo, Rio de Janeiro, and even Buenos Aires, on a private peninsula and surrounded by a picturesque fishing village, is Ponta dos Ganchos, one of the most exclusive beach resorts in southern Brazil.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 42,
    city: "San Pedro de Atacama",
    country: "Chile",
    price: 4
  },
  {
    id: 14,
    slug: "tierra-patagonia",
    name: "Tierra Patagonia",
    photo: "https://i.imgur.com/nh9qcRB.jpeg",
    description:
      "Tierra Patagonia Hotel & Spa is a luxurious boutique hotel located in Chilean Patagonia on the shores of Lake Sarmiento, wrapped in the extraordinary natural scenery of Torres del Paine, a national park surrounded by mountains, waterfalls, glaciers, lakes and crags, declared a Reserve of the Biosphere by UNESCO in 1978.",
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    rooms: 40,
    city: "Torres del Paine",
    country: "Chile",
    price: 4
  },
  {
    id: 15,
    slug: "vira-vira",
    name: "Vira Vira",
    photo: "https://i.imgur.com/4z3mARb.jpeg",
    description:
      "Hotel Hacienda Vira Vira Relais & Chateaux is located in a privileged location, very close to Pucón, Chile. Its impressive 23-hectare native park on the banks of the Liucura River offers a unique oasis of peace and tranquility.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 21,
    city: "Pucón",
    country: "Chile",
    price: 4
  },
  {
    id: 16,
    slug: "vik-chile",
    name: "Vik Chile",
    photo: "https://i.imgur.com/duuVhHk.jpg",
    description:
      "Vik Chile is a modern and sophisticated hacienda where avant-garde art and design converge, an unparalleled location, fabulous natural settings, personalized service and careful attention to the environment.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 22,
    city: "Millahue",
    country: "Chile",
    price: 4
  },
  {
    id: 17,
    slug: "casa-higueras",
    name: "Casa Higueras",
    photo: "https://i.imgur.com/rWwVBoS.jpeg",
    description:
      "Located in the heart of Cerro Alegre, facing the imposing bay of Valparaíso, is Casa Higueras, the port's first boutique and design hotel.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 20,
    city: "Valparaíso",
    country: "Chile",
    price: 4
  },
  {
    id: 18,
    slug: "campo-tinto",
    name: "Campo Tinto",
    photo: "https://i.imgur.com/vbqs0oh.jpg",
    description:
      "Campo Tinto is a 25-hectare farm located in the heart of San Roque, in the middle of the rolling Carmelo, an area of farms, vineyards, wineries and fruit trees, with a lot of history and a calm and natural rhythm of life.",
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: "Colonia",
    country: "Uruguay",
    price: 1
  }
];

const initialStates = {
  countryState: "All Countries",
  priceState: "All Costs",
  roomsState: "All Sizes",
  datesState: ""
};
export { hotelsData, initialStates };
