import { Link } from 'react-router-dom'
import Building from '../images/home/building.jpg'

export default function Home() {
  return (
    <section className="section bg-building bg-cover ">
      <div className='container mx-auto h-full w-full relative '>
        <div className='flex flex-col items-center  lg:items-start justify-center h-full lg:pl-48 z-20 relative'>
          <h1 className='h1'>Design.<br/>Build.<br/>Atom.</h1>
          <p className='font-light font-secondary italic text-[16px] lg:text-[28px]'>Your space, our expertise</p>
          <Link to={'/projects'}>
            <button className='mt-3 btn px-4 py-2 font-light text-[14px] lg:text-[24px]'>Our projects</button>
          </Link>
        </div>
      </div>
      
    </section>
  )
}
