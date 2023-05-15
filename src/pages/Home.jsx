import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServiceSection from '../components/home/ServiceSection'
import Testimonials from '../components/home/Testimonials'
import ArticlesSection from '../components/home/ArticlesSection'
import NewsletterSection from '../components/home/NewsletterSection'
import ProjectsSection from '../components/home/ProjectsSection'

export default function Home() {
  return (
    <section className="section snap-y snap-mandatory overflow-y-scroll ">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <Testimonials />
      <ArticlesSection />
      <NewsletterSection />
    </section>
  )
}
