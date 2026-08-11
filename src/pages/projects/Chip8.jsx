import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Chip8() {
  usePageMeta('lotanna okoli — chip-8 emulator', 'Lotanna Okoli — CHIP-8 Emulator')

  return (
    <Layout section="projects" activeItem="chip8">
      <section id="project">
        <h2>projects / chip8</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/pong-chip8.png" alt="CHIP-8 Pong running in the emulator" />
          <img src="/images/slipperyslope-chip8.png" alt="CHIP-8 Slippery Slope running in the emulator" />
          <img src="/images/chip8-debug.png" alt="CHIP-8 verbose debug output" />
        </p>
      </section>
    </Layout>
  )
}
