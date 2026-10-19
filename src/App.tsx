import { NavLink, Link, Route, Routes, useLocation } from 'react-router-dom'
import LogoMark from './components/LogoMark'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import HistoriaPage from './pages/HistoriaPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { projects } from './data/projects'

const navigation = [
  { to: '/', label: 'Inicio', number: '01', end: true },
  { to: '/portfolio', label: 'Portfolio', number: '02', end: false },
  { to: '/sobre-mi', label: 'Sobre mí', number: '03', end: false },
  { to: '/historia', label: 'Historia', number: '04', end: false },
  { to: '/contacto', label: 'Contacto', number: '05', end: false },
]

function useBreadcrumb(): string[] {
  const { pathname } = useLocation()
  if (pathname === '/') return ['Inicio']
  if (pathname === '/portfolio') return ['Portfolio']
  if (pathname.startsWith('/portfolio/')) {
    const slug = pathname.split('/')[2]
    const project = projects.find((p) => p.slug === slug)
    return project ? ['Portfolio', project.title] : ['Portfolio']
  }
  if (pathname === '/sobre-mi') return ['Sobre mí']
  if (pathname === '/historia') return ['Mi historia']
  if (pathname === '/contacto') return ['Contacto']
  return ['404']
}

function App() {
  const breadcrumb = useBreadcrumb()

  return (
    <div className="app-shell">
      <ScrollToTop />

      <aside className="sidebar">
        <Link className="brand" to="/" aria-label="Volver al inicio">
          <span className="brand-mark">
            <LogoMark />
          </span>
          <span className="brand-name">
            GUSTAVO<span>DELNARDO</span>
          </span>
        </Link>

        <div className="sidebar-label">NAVEGACIÓN</div>

        <nav className="navigation" aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <span className="nav-number">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && <span className="nav-indicator" aria-hidden="true" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="status-indicator">
            <span className="status-dot" />
            <span>EN FORMACIÓN</span>
          </div>
          <p className="sidebar-caption">
            Estudiante de DAM.
            <br />
            Valencia, España.
          </p>
          <span className="sidebar-version">PORTFOLIO · 2026</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="breadcrumb">
            <span>GUSTAVO DELNARDO</span>
            {breadcrumb.map((part) => (
              <span key={part} className="breadcrumb-part">
                <span className="breadcrumb-separator">/</span>
                <span>{part}</span>
              </span>
            ))}
          </div>
          <div className="topbar-status">
            <span className="status-dot" />
            <span>WEB PERSONAL</span>
          </div>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectPage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Gustavo Delnardo</span>
          <span>
            HECHO CON REACT Y VITE
            <span className="footer-mark">.</span>
          </span>
        </footer>
      </main>
    </div>
  )
}

export default App
