import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'

export function RandomIndex() {
  usePageMeta('lotanna okoli — random', 'Lotanna Okoli — random updates')

  return (
    <Layout section="random">
      <section id="random">
        <h2>/ random</h2>
        <ul className="project-list">
          <li><Link to="/random/povray.html">pov-ray</Link></li>
        </ul>
      </section>
    </Layout>
  )
}