export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  number: string
  title: string
  summary: string
  description: string[]
  stack: string[]
  links: ProjectLink[]
  media: ProjectMedia[]
}

// Textos limitados a lo que se puede comprobar en las capturas y en lo
// acordado. Las descripciones largas del portfolio anterior están en
// PENDIENTE-REVISION.md hasta contrastarlas con el código de cada repo.
export const projects: Project[] = [
  {
    slug: 'chopcheck',
    number: '01',
    title: 'ChopCheck',
    summary: 'Aplicación web para dividir la cuenta de una mesa entre sus comensales.',
    description: [
      'Cada mesa tiene un código y una lista de participantes, con lo que debe pagar cada uno. En la lista de productos se indica quién ha consumido cada cosa.',
      'El proyecto tiene una interfaz móvil para los comensales y un panel de administración.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    links: [{ label: 'Código en GitHub', href: 'https://github.com/soytavodev/chopcheck' }],
    media: [
      { type: 'video', src: '/projects/chopcheck.webm', alt: 'Demostración en vídeo de ChopCheck' },
      { type: 'image', src: '/projects/chopcheck-mobile.webp', alt: 'ChopCheck: vista móvil de una mesa con participantes y productos' },
      { type: 'image', src: '/projects/chopcheck-admin.webp', alt: 'ChopCheck: panel de administración' },
    ],
  },
  {
    slug: 'guessit',
    number: '02',
    title: 'GuessIT!',
    summary: 'Juego web con pantalla de partida y perfil de jugador.',
    description: [
      'Proyecto de juego con una pantalla de partida y una pantalla de perfil.',
    ],
    stack: ['PHP', 'MySQL', 'CSS'],
    links: [
      { label: 'Ver en línea', href: 'https://guessit.gamer.gd/index.php' },
      { label: 'Código en GitHub', href: 'https://github.com/soytavodev/GuessIt' },
    ],
    media: [
      { type: 'image', src: '/projects/guessit-juego.webp', alt: 'GuessIT!: pantalla de partida' },
      { type: 'image', src: '/projects/guessit-perfil.webp', alt: 'GuessIT!: pantalla de perfil' },
    ],
  },
  {
    slug: 'changeit',
    number: '03',
    title: 'ChangeIT!',
    summary: 'Conversor de divisas que obtiene las tasas de cambio de una API externa.',
    description: [
      'Conversor de divisas hecho con PHP, HTML y CSS. Consulta una API externa para obtener las tasas de cambio.',
    ],
    stack: ['PHP', 'HTML', 'CSS', 'API externa'],
    links: [],
    media: [
      { type: 'image', src: '/projects/changeit-1.webp', alt: 'ChangeIT!: pantalla del conversor' },
      { type: 'image', src: '/projects/changeit-2.webp', alt: 'ChangeIT!: resultado de una conversión' },
    ],
  },
]
