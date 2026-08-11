import Layout from '../components/Layout'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta('Lotanna Okoli', 'Lotanna Okoli — personal page')

  return (
    <Layout section="home">
      <section id="about">
        <p>
          i started programming on roblox studio because i thought i could make something better than the games
          roblox had to offer. i couldn't, but i decided i liked programming anyways so i started learning more
          languages and working on other things. my top languages are probablly C, C++, python, java, and JS/TS.
        </p>

        <p>
          im currently studying computer science at washu. some of my favorite cs classes ive taken so far are
          intro to systems software (CSE 3601), operating systems (CSE 4202), and discrete math (CSE 2400).
        </p>

        <p>outside of computers, i like to play basketball and chess. i also occasionally try to do calisthenics.</p>

        <p className="meta">
          <em>focus</em> &mdash; systems programming, agentic systems, application development
          <br />
          <em>current</em> &mdash; CS Research
          <br />
          <em>base</em> &mdash; St. Louis / Kansas City
          <br />
          <em>preference</em> &mdash; minimalist software, open source applications
        </p>
      </section>
    </Layout>
  )
}
