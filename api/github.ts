// Función de Vercel: /api/github
// Pide a GitHub los repositorios públicos de Gustavo y devuelve solo lo que usa la web.
// La CDN de Vercel guarda la respuesta 1 hora (y la sigue sirviendo hasta 1 día si
// GitHub falla), así que GitHub recibe muy pocas peticiones aunque haya muchas visitas.
// Si en Vercel se define la variable GITHUB_TOKEN, se usa para tener un límite mayor.

const USUARIO = 'soytavodev'

type RepoGitHub = {
  name: string
  description: string | null
  language: string | null
  pushed_at: string
  html_url: string
  fork: boolean
}

export async function GET() {
  const cabeceras: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'gustavo-delnardo-web',
  }
  const token = process.env.GITHUB_TOKEN
  if (token) cabeceras.Authorization = `Bearer ${token}`

  const respuesta = await fetch(
    `https://api.github.com/users/${USUARIO}/repos?sort=pushed&per_page=100`,
    { headers: cabeceras },
  )

  if (!respuesta.ok) {
    return Response.json(
      { error: `GitHub respondió ${respuesta.status}` },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const repos = (await respuesta.json()) as RepoGitHub[]
  const datos = repos.map(({ name, description, language, pushed_at, html_url, fork }) => ({
    name,
    description,
    language,
    pushed_at,
    html_url,
    fork,
  }))

  return Response.json(datos, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
