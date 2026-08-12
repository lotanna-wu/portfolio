import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function GeometrySlash() {
  usePageMeta('projects - geometry-slash', 'Geometry Slash')

  return (
    <Layout section="projects" activeItem="geometry-slash">
      <section id="project">
        <h2>projects / geometry-slash</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/hack-washu.png" alt="Geometry Slash screenshot" />
        </p>
      </section>
    </Layout>
  )
}
