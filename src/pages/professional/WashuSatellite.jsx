import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function WashuSatellite() {
  usePageMeta('lotanna okoli — washu satellite', 'Lotanna Okoli — WashU Satellite Ground Station and Controls')

  return (
    <Layout section="professional" activeItem="washu-satellite">
      <section id="position">
        <h2>professional / washu-satellite</h2>

        <h3>
          Full Stack Developer{' '}
          <span className="meta">
            &mdash; WashU Satellite Ground Station and Controls, St. Louis, MO &mdash; Aug. 2024 &ndash; Aug. 2025
          </span>
        </h3>
        <ul>
          <li>Built UI and communication layer between ground station and satellite using TypeScript and Next.js.</li>
          <li>Implemented satellite telemetry data retrieval and visualization on a web-based dashboard.</li>
        </ul>
      </section>
    </Layout>
  )
}
