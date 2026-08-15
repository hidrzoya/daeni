import { useEffect } from 'react'
import Home from '../pages/Home.jsx'
import Projects from '../pages/Projects.jsx'
import AdminDashboard from '../pages/AdminDashboard.jsx'
import Notes from '../pages/Notes.jsx'

const routes = {
  '/projects': Projects,
  '/admin-dashboard': AdminDashboard,
  '/notes': Notes,
}

export default function AppRoutes() {
  const Page = window.location.pathname.startsWith('/notes/') ? Notes : routes[window.location.pathname] ?? Home
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')
    const targets = document.querySelectorAll('[data-reveal], main > section, main > article, main > form, .note-card, .project')
    if (!targets.length) return undefined
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
  return <Page />
}
