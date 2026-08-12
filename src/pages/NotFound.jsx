import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('404', 'page not found')

  return (
    <Layout section="home">
      <section id="not-found">
        <h2>404</h2>
        <p>this page doesn't exist.</p>
        <Link to="/">go back</Link>
      </section>
    </Layout>
  )
}
