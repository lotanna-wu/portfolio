import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function ChronoPy() {
  usePageMeta('projects - chronopy', 'ChronoPy')

  return (
    <Layout section="projects" activeItem="chronopy">
      <section id="project">
        <h2>projects / chronopy</h2>

        <p>these are a wip.</p>
      </section>
    </Layout>
  )
}
