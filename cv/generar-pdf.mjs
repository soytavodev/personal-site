// Genera public/cv-gustavo-delnardo.pdf a partir de cv/cv.html.
// Uso: npm run cv
import { chromium } from 'playwright'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const carpeta = dirname(fileURLToPath(import.meta.url))
const entrada = join(carpeta, 'cv.html')
const salida = join(carpeta, '..', 'public', 'cv-gustavo-delnardo.pdf')
const vistaPrevia = process.argv[2] // opcional: ruta para guardar una captura PNG

const navegador = await chromium.launch()
const pagina = await navegador.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 1.5 })
await pagina.goto(pathToFileURL(entrada).href)
await pagina.evaluate(() => document.fonts.ready)

// Comprueba que nada se sale de la página A4 (1123 px de alto)
const fin = await pagina.evaluate(() =>
  Math.round(Math.max(...[...document.querySelectorAll('.main > *, .side > *')].map((e) => e.getBoundingClientRect().bottom))),
)
console.log(`El contenido acaba en el píxel ${fin} de 1123.`)
if (fin > 1100) console.warn('⚠️  Muy justo: puede que algo se corte al final de la página.')

await pagina.pdf({ path: salida, format: 'A4', printBackground: true, preferCSSPageSize: true })
if (vistaPrevia) await pagina.screenshot({ path: vistaPrevia })
await navegador.close()
console.log(`PDF generado en ${salida}`)
