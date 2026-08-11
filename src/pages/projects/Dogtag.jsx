import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Dogtag() {
  usePageMeta('lotanna okoli — dogtag', 'Lotanna Okoli — DogTag')

  return (
    <Layout section="projects" activeItem="dogtag">
      <section id="project">
        <h2>projects / dogtag</h2>

        <p>these are a wip.</p>
      </section>
    </Layout>
  )
}
