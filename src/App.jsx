import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import { RandomIndex } from './pages/random/Index'
import NotFound from './pages/NotFound'
import { ProfessionalIndex } from './pages/professional/Index'
import ChaingeSTL from './pages/professional/ChaingeSTL'
import WashuSatellite from './pages/professional/WashuSatellite'
import WeCodeKC from './pages/professional/WeCodeKC'
import { ProjectsIndex } from './pages/projects/Index'
import Mp3qt from './pages/projects/Mp3qt'
import ChronoPy from './pages/projects/ChronoPy'
import GeometrySlash from './pages/projects/GeometrySlash'
import Eva from './pages/projects/Eva'
import InternX from './pages/projects/InternX'
import Chip8 from './pages/projects/Chip8'
import MultiplayerSnake from './pages/projects/MultiplayerSnake'
import Dogtag from './pages/projects/Dogtag'
import IndexMobile from './pages/projects/IndexMobile'
import Portfolio from './pages/projects/Portfolio'
import POVRay from './pages/random/POVRay'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/professional" element={<Navigate to="/professional/" replace />} />
      <Route path="/professional/" element={<ProfessionalIndex />} />
      <Route path="/professional/chaingestl.html" element={<ChaingeSTL />} />
      <Route path="/professional/washu-satellite.html" element={<WashuSatellite />} />
      <Route path="/professional/wecode-kc.html" element={<WeCodeKC />} />

      <Route path="/projects" element={<Navigate to="/projects/" replace />} />
      <Route path="/projects/" element={<ProjectsIndex />} />
      <Route path="/projects/mp3qt.html" element={<Mp3qt />} />
      <Route path="/projects/chronopy.html" element={<ChronoPy />} />
      <Route path="/projects/geometry-slash.html" element={<GeometrySlash />} />
      <Route path="/projects/eva.html" element={<Eva />} />
      <Route path="/projects/internx.html" element={<InternX />} />
      <Route path="/projects/chip8.html" element={<Chip8 />} />
      <Route path="/projects/multiplayer-snake.html" element={<MultiplayerSnake />} />
      <Route path="/projects/dogtag.html" element={<Dogtag />} />
      <Route path="/projects/index-mobile.html" element={<IndexMobile />} />
      <Route path="/projects/portfolio.html" element={<Portfolio />} />

      <Route path="/education.html" element={<Education />} />

      <Route path="/random" element={<Navigate to="/random/" replace />} />
      <Route path="/random/" element={<RandomIndex />} />
      <Route path="/random/povray.html" element={<POVRay />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
