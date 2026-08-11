import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function POVRay() {
  usePageMeta('lotanna okoli — pov ray', 'Lotanna Okoli — CHIP-8 Emulator')

  return (
    <Layout section="random" activeItem="povray">
      <section id="project">
        <h2>random / povray</h2>

        <p>recently i've been getting into creating 3d renders using POV-Ray. its a raytracing engine that lets you create images from a scene description language.</p>
        <p>here are some of the renders i've made so far:</p>
        <p className="imgs">
          <img src="/images/01.png"/>
        </p>
      </section>
    </Layout>
  )
}
