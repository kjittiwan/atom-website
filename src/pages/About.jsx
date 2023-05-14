import React from 'react'
import AboutHero from '../components/about/AboutHero'
import Vision from '../components/about/Vision'
import Differentiation from '../components/about/Differentiation'
import TeamSection from '../components/about/TeamSection'
import RecruitSection from '../components/about/RecruitSection'

export default function About() {
  return (
    <section className='section snap-y snap-mandatory overflow-y-scroll'>
      <AboutHero />
      <Vision />
      <Differentiation />
      <TeamSection />
      <RecruitSection />
    </section>
  )
}
