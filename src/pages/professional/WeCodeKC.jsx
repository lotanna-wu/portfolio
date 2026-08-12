import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function WeCodeKC() {
  usePageMeta('professional - wecode-kc', 'WeCode KC')

  return (
    <Layout section="professional" activeItem="wecode-kc">
      <section id="position">
        <h2>professional / wecode-kc</h2>

        <h3>
          Web Development Intern{' '}
          <span className="meta">&mdash; WeCode KC, Kansas City, MO &mdash; June 2023 &ndash; Aug. 2024</span>
        </h3>
        <p>
          WeCode KC is a nonprofit coding education organization in Kansas City. I started there the summer before
          my senior year of high school, building full-stack client projects in React and Node.js, including a
          platform that let hundreds of students register for, attend, and track their progress through coding
          classes.
        </p>
        <p>
          Alongside the engineering work, I also taught Roblox Studio and Scratch to over 100 kids aged 8&ndash;15.
          Teaching forced me to develop a kind of clarity I didn't get from coding alone.
        </p>
      </section>
    </Layout>
  )
}
