import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import Articles from '../data/Articles'
import ArticleCard from '../components/home/ArticleCard'
import Projects from '../data/Projects'
export default function About() {
  return (
    <section className='section snap-y snap-mandatory overflow-y-scroll'>
      <div className='section snap-start flex flex-col justify-center  items-center px-32 pt-24 gap-y-14'>
      <div className='flex justify-center  w-full gap-x-36'>
        <div className='font-primary text-[54px]  leading-tight'>We are Atom.</div> 
        <div className=' text-grey w-[40%] text-lg'>Our dedicated team of visionary architects, skilled craftsmen, and meticulous project managers work seamlessly to deliver remarkable results. From the initial concept and detailed planning to the precise execution, we leave no stone unturned in ensuring the highest quality and innovation in every project.</div>
      </div>
      <div className='w-full h-[55%] bg-aboutHero bg-cover rounded-md'></div>
      </div>
      <div className='section snap-start flex flex-col justify-center items-center relative gap-y-10'>
        <div className='font-primary w-[65%] text-[30px] text-center'>
        "At Atom, we are more than just architects and builders - we are creators of extraordinary spaces. With a collective passion for <span className='italic font-semibold'>design</span> and <span className='italic font-semibold'>construction</span>, we are driven to bring your visions to life, exceeding expectations at every step."
        </div>
        <div className=' font-primary text-center'>
          <p className='text-3xl mb-4'>Muhammad Ali</p>
          <p className=''>CEO & Co-founder</p>
        </div>
        <div className='flex gap-x-2 items-center absolute bottom-4'>
          <p className='uppercase'>scroll down to learn more</p>
          <BsArrowDown  className=' text-base'/>
        </div>
      </div>
      <div className='section snap-start flex flex-col justify-center items-center  gap-y-16 pt-10 px-32'>
        <div className='flex h-[45%] w-full items-center justify-center bg-darkBg bg-cover'>
          <div className='font-primary text-[70px] text-white w-full h-full bg-white bg-opacity-10 flex justify-center items-center'>Why us?</div>
        </div>
        <div className='flex justify-between gap-x-10 text-lg font-primary '>
          <div className='w-1/3'>What sets us apart is our unwavering commitment to craftsmanship and attention to detail. Our holistic approach combines innovative design concepts with expert construction techniques, resulting in spaces that are not only visually stunning but also functional and enduring.</div>
          <div className='w-1/3'>We understand that your space is a reflection of your personality and aspirations, and we take pride in bringing your dreams to reality. We listen closely to your ideas, working collaboratively to create bespoke solutions that resonate with your vision.</div>
          <div className='w-1/3'>
          Whether you're looking to build a custom home, renovate a commercial space, or embark on a large-scale architectural project, Atom is your trusted partner. We are dedicated to transforming spaces into extraordinary works of art that inspire, uplift, and leave a lasting impression.
          </div>
        </div>
      </div>
      <div className='section snap-start flex flex-col justify-center items-center px-52 gap-y-14 pt-14'>
        <div className='flex justify-between w-full'>
          <div className='w-[40%] text-3xl font-semibold'>We work hard, but we also play hard together, like our virtual happy hours, game nights, and costume parties.</div>
          <div className='w-[40%] text-xl text-grey'>And although we're always learning from industry experts, we don't take ourselves too seriously. You'll find a great, supportive team here at Atom, where you can grow your career and find opportunities to shine.</div>
        </div>
        <div className='w-full h-[45%] bg-light rounded-md flex flex-col items-center justify-center gap-y-6'>
          <div className='text-[40px]'>Interested in joining our team?</div>
          <div className='text-xl text-center w-[45%]'>Curious about our story? Want to tell us more about yourself? We'd love to hear from you!</div>
          <button className='btn px-4 py-2'>Contact us</button>
        </div>
      </div>
      <div className='section snap-start flex flex-col justify-center items-center px-32 gap-y-24'>
        <div className='font-primary text-[54px]'>Our Blogs</div>
        <div className="grid grid-cols-4 grid-rows-1 gap-[40px] max-w-none mx-auto">
          {Articles.map((article) => {
            return <ArticleCard key={article.id} article={article} />
          })}    
       </div>
      </div>
    
    </section>
  )
}
