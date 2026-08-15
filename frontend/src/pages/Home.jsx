import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Footer from '../components/common/Footer.jsx'
import Navbar from '../components/common/Navbar.jsx'
import ProjectList from '../components/projects/ProjectList.jsx'
import ProjectDetail from './ProjectDetail.jsx'
import { getProjects } from '../services/projectsService.js'

const Arrow = () => <ArrowUpRight className="arrow" aria-hidden="true" />

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedProject(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    getProjects().then(setProjects).catch((error) => console.error(error))
  }, [])

  return (
    <p>daniella</p>
  )
}
