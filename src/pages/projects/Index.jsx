import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export function ProjectsIndex() {
  usePageMeta('lotanna okoli — projects', 'Lotanna Okoli — projects')

  return (
    <Layout section="projects">
      <section id="projects">
        <h2>/ projects</h2>
        <ul className="project-list">
          <li><Link to="/projects/mp3qt.html">mp3qt</Link></li>
          <li><Link to="/projects/chronopy.html">chronpy</Link></li>
          <li><Link to="/projects/geometry-slash.html">geometry slash</Link></li>
          <li><Link to="/projects/eva.html">eva</Link></li>
          <li><Link to="/projects/internx.html">intern x</Link></li>
          <li><Link to="/projects/chip8.html">chip-8 emulator</Link></li>
          <li><Link to="/projects/multiplayer-snake.html">multiplayer snake</Link></li>
          <li><Link to="/projects/dogtag.html">dogtag</Link></li>
          <li><Link to="/projects/index-mobile.html">index</Link></li>
          <li><Link to="/projects/portfolio.html">lotanna okoli</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
