import TopBar from './TopBar'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ section, activeItem, children }) {
  return (
    <>
      <TopBar />
      <div className="layout">
        <Sidebar section={section} activeItem={activeItem} />
        <main>
          <hr />
          {children}
          <hr />
          <Footer />
        </main>
      </div>
    </>
  )
}
