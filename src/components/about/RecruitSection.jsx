/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

export default function RecruitSection() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center px-8 lg:px-52 gap-y-14 pt-14'>
        <div className='flex justify-between w-full items-center'>
          <div className='w-[45%] lg:w-[40%] text-xl lg:text-3xl font-semibold'>We work hard, but we also play hard together, like our virtual happy hours, game nights, and costume parties.</div>
          <div className='w-[50%] lg:w-[40%] lg:text-xl text-grey'>And although we're always learning from industry experts, we don't take ourselves too seriously. You'll find a great, supportive team here at Atom, where you can grow your career and find opportunities to shine.</div>
        </div>
        <div className='w-full lg:h-[45%] bg-light rounded-md flex flex-col items-center justify-center gap-y-6 pt-10 pb-12'>
          <div className='text-[28px] lg:text-[40px] font-primary'>Interested in joining our team?</div>
          <div className='lg:text-xl text-center w-[65%] lg:w-[45%] text-grey'>Curious about our story? Want to tell us more about yourself? We'd love to hear from you!</div>
          <Link to={'/contact'}>
            <button className='btn px-4 py-2'>Contact us</button>
          </Link>
          
        </div>
    </section>
  )
}
