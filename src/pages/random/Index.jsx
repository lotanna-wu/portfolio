import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export function RandomIndex() {
  usePageMeta('lotanna okoli — random', 'Lotanna Okoli — random updates')

  return (
    <Layout section="random">
      <section id="random">
        <h2>/ random</h2>
        <p>WIP</p>
      </section>
    </Layout>
  )
}
