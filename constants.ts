import { Jersey } from './types';

export const JERSEYS_DATA: Jersey[] = [
  {
    id: 1,
    teamName: 'Atlético Cósmico',
    year: 2024,
    type: 'home',
    price: 89.99,
    imageUrl: 'https://picsum.photos/seed/cosmico/800/1000',
    description: 'jersey_cosmico_description'
  },
  {
    id: 2,
    teamName: 'Inter Galáctica',
    year: 2024,
    type: 'away',
    price: 94.99,
    imageUrl: 'https://picsum.photos/seed/galactica/800/1000',
    description: 'jersey_galactica_description'
  },
  {
    id: 3,
    teamName: 'Real Volcánico',
    year: 2023,
    type: 'home',
    price: 85.00,
    imageUrl: 'https://picsum.photos/seed/volcanico/800/1000',
    description: 'jersey_volcanico_description'
  },
  {
    id: 4,
    teamName: 'Dinamo Cibernético',
    year: 2024,
    type: 'third',
    price: 99.99,
    imageUrl: 'https://picsum.photos/seed/cibernetico/800/1000',
    description: 'jersey_cibernetico_description'
  },
  {
    id: 5,
    teamName: 'F.C. Aurora',
    year: 2022,
    type: 'home',
    price: 79.99,
    imageUrl: 'https://picsum.photos/seed/aurora/800/1000',
    description: 'jersey_aurora_description'
  },
  {
    id: 6,
    teamName: 'Titanes del Océano',
    year: 2024,
    type: 'away',
    price: 92.50,
    imageUrl: 'https://picsum.photos/seed/oceano/800/1000',
    description: 'jersey_oceano_description'
  }
];

export const LEGENDS_DATA: Jersey[] = [
  {
    id: 7,
    teamName: 'Centinelas F.C.',
    year: 1998,
    type: 'home',
    price: 120.00,
    imageUrl: 'https://picsum.photos/seed/centinelas/800/1000',
    description: 'jersey_centinelas_description'
  },
  {
    id: 8,
    teamName: 'Gladiadores de Marte',
    year: 2005,
    type: 'away',
    price: 115.50,
    imageUrl: 'https://picsum.photos/seed/marte/800/1000',
    description: 'jersey_marte_description'
  },
  {
    id: 9,
    teamName: 'Imperio Esmeralda',
    year: 1989,
    type: 'home',
    price: 135.00,
    imageUrl: 'https://picsum.photos/seed/imperio/800/1000',
    description: 'jersey_imperio_description'
  },
];


// --- I18N Translations ---
export const enTranslations = {
  "document_title": "Jerseys F.C. - Wear the Legend",
  "header_brand": "JERSEYS",
  "nav_collections": "Collections",
  "nav_legends": "Legends",
  "nav_about": "About Us",
  "hero_title": "WEAR THE",
  "hero_title_span": "LEGEND",
  "hero_subtitle": "More than a shirt. It's an emblem. It's your story. It's your passion.",
  "hero_button": "Discover Collection",
  "collections_title": "NEW",
  "collections_title_span": "COLLECTIONS",
  "parallax1_title": "FORGED IN",
  "parallax1_title_span": "GLORY",
  "legends_title": "LEGENDARY",
  "legends_title_span": "JERSEYS",
  "parallax2_title": "OUR",
  "parallax2_title_span": "MISSION",
  "parallax2_text": "At Jerseys F.C., our mission is to connect fans with the history and emotion of football through jerseys that are more than just garments; they are symbols of loyalty, epic battles, and unforgettable moments.",
  "footer_tagline": "Wearing your passion since 2024.",
  "footer_copyright": "© {year} JERSEYS F.C. All rights reserved.",
  "jersey_type_home": "Home",
  "jersey_type_away": "Away",
  "jersey_type_third": "Third",
  "jersey_card_flip_prompt": "Click to view",
  "jersey_card_details_button": "See more",
  "jersey_card_back_button_aria": "Go back",
  "modal_close_button_aria": "Close modal",
  "welcome_modal_close_button_aria": "Close welcome modal",
  "jersey_cosmico_description": "Nebula-inspired design with vibrant colors representing the universe's energy on the field.",
  "jersey_galactica_description": "Dark elegance with silver details evoking a starry night. Perfect for playing under the lights.",
  "jersey_volcanico_description": "Intense red and black simulating flowing lava, symbolizing the team's passion and power.",
  "jersey_cibernetico_description": "A futuristic design with subtly glowing circuit patterns, representing precision and technology.",
  "jersey_aurora_description": "Pastel colors capturing the beauty of an aurora borealis, an ethereal design for a magical game.",
  "jersey_oceano_description": "Deep blue tones with wave patterns, designed for players who move with the fluidity of the sea.",
  "jersey_centinelas_description": "The iconic design worn in the '98 final, a symbol of unbreakable defense.",
  "jersey_marte_description": "With the red color of the warrior planet, this jersey was worn in their undefeated season.",
  "jersey_imperio_description": "Gold and green, the colors of a dynasty. The jersey of the team that won it all in the 80s."
};

export const esTranslations = {
  "document_title": "Jerseys F.C. - Viste la Leyenda",
  "header_brand": "JERSEYS",
  "nav_collections": "Colecciones",
  "nav_legends": "Leyendas",
  "nav_about": "Nosotros",
  "hero_title": "VISTE LA",
  "hero_title_span": "LEYENDA",
  "hero_subtitle": "Más que una camisa. Es un emblema. Es tu historia. Es tu pasión.",
  "hero_button": "Descubrir Colección",
  "collections_title": "NUEVAS",
  "collections_title_span": "COLECCIONES",
  "parallax1_title": "FORJADAS EN LA",
  "parallax1_title_span": "GLORIA",
  "legends_title": "JERSEYS DE",
  "legends_title_span": "LEYENDA",
  "parallax2_title": "NUESTRA",
  "parallax2_title_span": "MISIÓN",
  "parallax2_text": "En Jerseys F.C., nuestra misión es conectar a los aficionados con la historia y la emoción del fútbol a través de camisetas que son más que simples prendas; son símbolos de lealtad, batallas épicas y momentos inolvidables.",
  "footer_tagline": "Vistiendo tu pasión desde 2024.",
  "footer_copyright": "© {year} JERSEYS F.C. Todos los derechos reservados.",
  "jersey_type_home": "Local",
  "jersey_type_away": "Visitante",
  "jersey_type_third": "Tercera",
  "jersey_card_flip_prompt": "Click para ver",
  "jersey_card_details_button": "Ver más",
  "jersey_card_back_button_aria": "Volver",
  "modal_close_button_aria": "Cerrar modal",
  "welcome_modal_close_button_aria": "Cerrar modal de bienvenida",
  "jersey_cosmico_description": "Diseño inspirado en nebulosas, con colores vibrantes que representan la energía del universo en el campo.",
  "jersey_galactica_description": "Elegancia oscura con detalles plateados que evocan una noche estrellada. Perfecta para jugar bajo los reflectores.",
  "jersey_volcanico_description": "Rojo intenso y negro que simulan la lava fluyendo, simbolizando la pasión y el poder del equipo.",
  "jersey_cibernetico_description": "Un diseño futurista con patrones de circuitos que brillan sutilmente, representando la precisión y la tecnología.",
  "jersey_aurora_description": "Colores pastel que capturan la belleza de una aurora boreal, un diseño etéreo para un juego mágico.",
  "jersey_oceano_description": "Tonos de azul profundo con patrones de olas, diseñado para jugadores que se mueven con la fluidez del mar.",
  "jersey_centinelas_description": "El icónico diseño que vistieron en la final del '98, un símbolo de defensa inquebrantable.",
  "jersey_marte_description": "Con el color rojo del planeta guerrero, esta camiseta fue usada en su temporada invicta.",
  "jersey_imperio_description": "Dorado y verde, los colores de una dinastía. La camiseta del equipo que lo ganó todo en los 80."
};
