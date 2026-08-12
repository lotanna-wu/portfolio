import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Mp3qt() {
  usePageMeta('projects - mp3qt', 'mp3qt')

  return (
    <Layout section="projects" activeItem="mp3qt">
      <section id="project">
        <h2>projects / mp3qt</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/mp3qt-cloud.png" alt="mp3qt cloud theme screenshot" />
          <img src="/images/mp3qt-default.png" alt="mp3qt default theme screenshot" />
        </p>
      </section>
    </Layout>
  )
}
