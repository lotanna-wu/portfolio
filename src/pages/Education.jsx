import Layout from '../components/Layout'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Education() {
  usePageMeta('lotanna okoli — education', 'Lotanna Okoli — education')

  return (
    <Layout section="education">
      <section id="education">
        <h3>
          Washington University in St. Louis{' '}
          <span className="meta">&mdash; Aug. 2024 &ndash; May 2028</span>
        </h3>
        <p>B.S. computer science, McKelvey School of Engineering</p>
        <p>
          coursework: data structures &amp; algorithms, digital logic &amp; computer design, object-oriented
          programming in C++, parallel and concurrent programming, operating systems.
        </p>

        <h3>
          Ewing Marion Kauffman School <span className="meta">&mdash; Aug. 2020 &ndash; May 2024</span>
        </h3>
        <p>weighted GPA: 4.80 &mdash; Summa Cum Laude, Salutatorian</p>
      </section>
    </Layout>
  )
}
