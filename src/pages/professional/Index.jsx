import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export function ProfessionalIndex() {
  usePageMeta('professional', 'professional')

  return (
    <Layout section="professional">
      <section id="experience">
        <h2>/ professional</h2>
        <ul className="project-list">
          <li><Link to="/professional/chaingestl.html">chaingestl</Link></li>
          <li><Link to="/professional/washu-satellite.html">washu satellite</Link></li>
          <li><Link to="/professional/wecode-kc.html">wecode kc</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
