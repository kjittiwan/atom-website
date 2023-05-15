import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import { Routes, Route, useLocation } from 'react-router-dom'
import Blog from '../pages/Blog'
import ProjectDetails from '../pages/ProjectDetails'
import { AnimatePresence } from 'framer-motion'
export default function AnimRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />}/>
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </AnimatePresence>
    
    
  )
}
