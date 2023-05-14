import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import { Routes, Route, useLocation } from 'react-router-dom'
import Blog from '../pages/Blog'
export default function AnimRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    
  )
}
