import { Link } from 'react-router-dom'
import { PROFESSIONAL_ITEMS, PROJECT_ITEMS, RANDOM_ITEMS } from '../data/nav'

function SubLink({ to, label, active }) {
  return (
    <>
      &nbsp;&nbsp;<Link to={to}>{active ? '»' : '›'} {label}/</Link><br />
    </>
  )
}

export default function Sidebar({ section, activeItem }) {
  return (
    <aside id="side-bar">
      <h1>
        <Link to="/">
          lotanna okoli <span className="tagline">is this thing on ?</span>
        </Link>
      </h1>
      <nav>
        pages:<br />
        <Link to="/projects/">{section === 'projects' ? '»' : '›'} projects/</Link><br />
        {section === 'projects' &&
          PROJECT_ITEMS.map((item) => (
            <SubLink key={item.slug} to={item.path} label={item.label} active={activeItem === item.slug} />
          ))}
        <Link to="/professional/">{section === 'professional' ? '»' : '›'} professional/</Link><br />
        {section === 'professional' &&
          PROFESSIONAL_ITEMS.map((item) => (
            <SubLink key={item.slug} to={item.path} label={item.label} active={activeItem === item.slug} />
          ))}
        <Link to="/education.html">{section === 'education' ? '››' : '›'} education/</Link><br />
        <Link to="/random/">{section === 'random' ? '»' : '›'} random/</Link><br />
        {section === 'random' &&
          RANDOM_ITEMS.map((item) => (
            <SubLink key={item.slug} to={item.path} label={item.label} active={activeItem === item.slug} />
          ))}
      </nav>
    </aside>
  )
}
