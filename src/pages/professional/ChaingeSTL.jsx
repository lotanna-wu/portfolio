import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function ChaingeSTL() {
  usePageMeta('professional - chaingestl', 'ChaingeSTL')

  return (
    <Layout section="professional" activeItem="chaingestl">
      <section id="position">
        <h2>professional / chaingestl</h2>

        <h3>
          Full Stack Software Engineering Intern{' '}
          <span className="meta">&mdash; ChaingeSTL, St. Louis, MO &mdash; May 2025 &ndash; Aug. 2025</span>
        </h3>
        <p>
          ChaingeSTL is a nonprofit-focused platform connecting organizations with volunteers and donors in the
          St. Louis area. Over the summer I owned the backend end-to-end, building an Express.js + MongoDB server
          from scratch and designing the data models for organizations, events, and users.
        </p>
        <p>
          One of the more interesting challenges was the authentication system. I implemented Google SSO alongside
          traditional email/password login, including a full email verification flow, which meant thinking
          carefully about edge cases like credential conflicts and session management.
        </p>
        <p>
          On the product side, I built out an event management system that lets nonprofits create and manage
          sign-up events, as well as dynamic organization pages and a browsable index designed to make it easier
          for people to discover and engage with local nonprofits.
        </p>
      </section>
    </Layout>
  )
}
