import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Eva() {
  usePageMeta('projects - eva', 'Eva, EMT Virtual Assistant')

  return (
    <Layout section="projects" activeItem="eva">
      <section id="project">
        <h2>projects / eva</h2>

        <p>these are a wip.</p>
      </section>
    </Layout>
  )
}
