import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Portfolio() {
  usePageMeta('lotanna okoli — portfolio', 'Lotanna Okoli — this site')

  return (
    <Layout section="projects" activeItem="portfolio">
      <section id="project">
        <h2>projects / portfolio</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/portfolio.png" alt="Portfolio screenshot" />
          <img src="/images/portfolio-1.png" alt="Portfolio screenshot" />
        </p>
      </section>
    </Layout>
  )
}
