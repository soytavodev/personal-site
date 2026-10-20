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

// Textos comprobados con el código de cada repositorio (revisión del 20/10/2026).
// Si cambia un proyecto, actualizar aquí solo lo que se pueda ver en su código.
export const projects: Project[] = [
  {
    slug: 'chopcheck',
    number: '01',
    title: 'ChopCheck',
    summary: 'Aplicación web para dividir la cuenta de una mesa entre sus comensales.',
    description: [
      'Cada comensal entra en la mesa desde su móvil con un código, marca lo que ha consumido y genera un PIN de 4 dígitos para pagar su parte en caja. Si varias personas comparten un producto, el precio se reparte entre ellas.',
      'El camarero tiene un panel con el plano del local: abre y cierra mesas, añade productos y valida los pagos con el PIN. El panel avisa cuando una mesa está lista para pagar.',
      'Está hecho con PHP sin frameworks, siguiendo el patrón MVC con un único punto de entrada. Usa PDO con consultas preparadas, contraseñas cifradas con password_hash y precios en céntimos para que el reparto siempre cuadre. La parte del comensal está en español e inglés.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    links: [{ label: 'Código en GitHub', href: 'https://github.com/soytavodev/ChopCheck' }],
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
    summary: 'Juego de preguntas de cultura general con cuentas de usuario y ranking.',
    description: [
      'Cada partida tiene 10 preguntas al azar con las opciones desordenadas. El progreso se guarda en la sesión, así que recargar la página no rompe la partida.',
      'Los jugadores se registran e inician sesión (contraseñas con password_hash), tienen un perfil con sus estadísticas y compiten en un ranking de los 10 mejores, calculado con una consulta SQL con JOIN y GROUP BY.',
      'Hecho con PHP y MySQL (PDO), sin frameworks, y con CSS escrito a mano.',
    ],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    links: [
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
      'Mi primer proyecto de 1.º de DAM. Convierte euros a unas 160 monedas con las tasas de una API pública (open.er-api.com).',
      'Valida los datos en el servidor y, si hay una base de datos configurada, guarda cada conversión en un historial de MySQL.',
    ],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'API REST'],
    links: [{ label: 'Código en GitHub', href: 'https://github.com/soytavodev/ChangeIt' }],
    media: [
      { type: 'image', src: '/projects/changeit-1.webp', alt: 'ChangeIT!: pantalla del conversor' },
      { type: 'image', src: '/projects/changeit-2.webp', alt: 'ChangeIT!: resultado de una conversión' },
    ],
  },
]
