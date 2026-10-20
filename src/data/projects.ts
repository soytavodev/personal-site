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
  {
    slug: 'analizador-ids',
    number: '04',
    title: 'Analizador IDS',
    summary: 'Prototipo de detector de intrusos que revisa los accesos a una web y busca ataques.',
    description: [
      'Lee los últimos accesos guardados en una base de datos SQLite y detecta intentos de SQL Injection, XSS, Path Traversal y escaneos de bots. Un segundo script simula al atacante escribiendo peticiones maliciosas en la base de datos.',
      'Tiene dos modos: uno por reglas, que busca patrones conocidos (decodificando antes la URL, porque los atacantes la codifican para esquivar filtros), y otro con IA local mediante Ollama, que recibe ejemplos de tráfico normal y de ataques dentro del prompt y devuelve un informe en JSON. Con los dos a la vez se compara qué detecta cada uno.',
      'En mi prueba, sin tarjeta gráfica y con un modelo pequeño (qwen2.5:1.5b), las reglas detectaron los 7 ataques. La IA no detectó ninguno cuando recibía todos los registros a la vez; al mandárselos en lotes de 8 acertó 4 (las inyecciones SQL, el XSS y el path traversal) con un falso positivo, pero no vio los escaneos de bots. Además, el programa descarta los registros que la IA se inventa.',
      'Empezó como un prototipo en mis prácticas en empresa. Lo adapté para que funcione solo, con una base de datos de ejemplo, y añadí pruebas con unittest.',
    ],
    stack: ['Python', 'SQLite', 'Ollama', 'Regex', 'unittest'],
    links: [{ label: 'Código en GitHub', href: 'https://github.com/soytavodev/Analizador-ids' }],
    media: [
      { type: 'image', src: '/projects/analizador-ids-reglas.webp', alt: 'Analizador IDS: informe del análisis por reglas en la terminal' },
      { type: 'image', src: '/projects/analizador-ids-ia.webp', alt: 'Analizador IDS: informe de la IA local y comparación con las reglas' },
      { type: 'image', src: '/projects/analizador-ids-tests.webp', alt: 'Analizador IDS: pruebas con unittest superadas' },
    ],
  },
  {
    slug: 'deeplens',
    number: '05',
    title: 'DeepLens',
    summary: 'Genera capturas de las pantallas de un proyecto web a partir de su código, con IA local.',
    description: [
      'Lee el código de un proyecto (PHP, HTML, Python...), pide a un modelo de IA que se ejecuta en local con Ollama que deduzca sus pantallas en HTML estático, les aplica estilos con Pico.css y les saca una captura con Playwright. Así se obtiene una vista del proyecto sin montar su servidor ni su base de datos.',
      'Nunca envía a la IA archivos que suelen tener contraseñas (db.php, .env, config/...) y limpia la respuesta del modelo, que a veces añade texto alrededor del JSON.',
      'En mi prueba, sin tarjeta gráfica y con un modelo pequeño (qwen2.5:1.5b), cada análisis tardó entre 1 y 2 minutos. Con GuessIt generó la pantalla de perfil (la captura de abajo), pero solo detectó una pantalla de varias, y los resultados varían entre ejecuciones. Para resultados estables hace falta un modelo más grande, como el que usé en mis prácticas.',
    ],
    stack: ['Python', 'Ollama', 'Playwright', 'Pico.css'],
    links: [{ label: 'Código en GitHub', href: 'https://github.com/soytavodev/DeepLens' }],
    media: [
      { type: 'image', src: '/projects/deeplens-guessit.webp', alt: 'DeepLens: pantalla de perfil de GuessIt generada a partir de su código' },
      { type: 'image', src: '/projects/deeplens-terminal.webp', alt: 'DeepLens: ejecución en la terminal analizando GuessIt' },
    ],
  },
]
