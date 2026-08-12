import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function IndexMobile() {
  usePageMeta('projects - index', 'Index, AI-Powered Handwriting Tutor')

  return (
    <Layout section="projects" activeItem="index-mobile">
      <section id="project">
        <h2>projects / index</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/index-svc.png" alt="Index service overview" />
          <img src="/images/index-svc-1.png" alt="Index service detail view" />
        </p>
      </section>
    </Layout>
  )
}
