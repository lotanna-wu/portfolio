import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function POVRay() {
  usePageMeta('lotanna okoli — pov ray', 'Lotanna Okoli — POV-Ray projects')

  return (
    <Layout section="random" activeItem="povray">
      <section id="project">
        <h2>random / pov-ray</h2>

        <p>recently i've been getting into creating 3d renders using <a href="https://www.povray.org/" target="_blank" >POV-Ray</a>. its a raytracing engine that lets you create images from a scene description language.</p>
        <p>here are some of the renders i've made so far:</p>
        <p className="imgs">
          <img src="/images/01.png" alt="blue glass torus on a red and white checkered plane" />
          <img src="/images/02.png" alt="chrome spheres in a grassy field" />
        </p>
      </section>
    </Layout>
  )
}
