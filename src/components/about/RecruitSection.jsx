/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Footer from '../Footer'

export default function RecruitSection() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center px-8 lg:px-52 gap-6 relative pb-4'>
        <div className='flex flex-col gap-6 lg:flex-row justify-between w-full items-center'>
          <div className='w-full lg:w-[40%] text-lg text-center lg:text-left lg:text-3xl font-semibold'>We work hard, but we also play hard together, like our virtual happy hours, game nights, and costume parties.</div>
          <div className='w-full lg:w-[40%] lg:text-xl text-grey text-center lg:text-left'>And although we're always learning from industry experts, we don't take ourselves too seriously. You'll find a great, supportive team here at Atom, where you can grow your career and find opportunities to shine.</div>
        </div>
        <div className='w-full lg:h-[45%] bg-light rounded-md flex flex-col items-center justify-center gap-y-4 pt-4 pb-12'>
          <div className='text-[20px] lg:text-[40px] font-primary text-center'>Interested in joining our team?</div>
          <div className='text-sm lg:text-xl text-center w-[65%] lg:w-[45%] text-grey'>Curious about our story? Want to tell us more about yourself? We'd love to hear from you!</div>
          <Link to={'/contact'}>
            <button className='btn px-4 py-2'>Contact us</button>
          </Link>
        </div>
        <Footer />
    </section>
  )
}
