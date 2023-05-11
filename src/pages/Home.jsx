import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { transition1, transition2, transition3, transition4, transition5} from '../../transition'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/AboutSection'
import AboutSection from '../components/home/AboutSection'
import ServiceSection from '../components/home/ServiceSection'
import Testimonials from '../components/home/Testimonials'
import ArticlesSection from '../components/home/ArticlesSection'
export default function Home() {
  return (
    <section 
    
      className="section snap-y snap-mandatory overflow-y-scroll"
    >
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <Testimonials />
    <ArticlesSection />
      
    </section>
  )
}
