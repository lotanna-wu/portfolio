import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function InternX() {
  usePageMeta('projects - internx', 'Intern X')

  return (
    <Layout section="projects" activeItem="internx">
      <section id="project">
        <h2>projects / internx</h2>

        <p>these are a wip.</p>
      </section>
    </Layout>
  )
}
