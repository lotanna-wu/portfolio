import Layout from '../../components/Layout'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function MultiplayerSnake() {
  usePageMeta('lotanna okoli — multiplayer snake', 'Lotanna Okoli — Multiplayer Snake')

  return (
    <Layout section="projects" activeItem="multiplayer-snake">
      <section id="project">
        <h2>projects / multiplayer-snake</h2>

        <p>these are a wip.</p>
        <p className="imgs">
          <img src="/images/multiplayersnake-lobby.png" alt="Multiplayer Snake lobby and room creation screen" />
          <img src="/images/multiplayersnake-game.png" alt="Multiplayer Snake in-game view with score and chat" />
        </p>
      </section>
    </Layout>
  )
}
