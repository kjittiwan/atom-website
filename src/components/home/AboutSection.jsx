import Building from '../../images/about/building.jpg'
import { Link } from 'react-router-dom'
  
export default function AboutSection() {
  return (
      <section
      className='section snap-start'
      >
        <div className='section mx-auto px-8 lg:px-32 flex items-center justify-between'>
          <div className='w-[650px] h-[450px] hidden lg:block'>
            <img src={Building} alt="building"  className='object-cover opacity-90'/>
          </div>
          <div
            className=' w-full lg:w-[400px] flex flex-col gap-y-3 items-center lg:items-start'
          >
            <p className='uppercase  text-sm text-grey'>About us</p>
            <h1 className='font-primary text-[40px] lg:text-[54px]'>Who are we?</h1>
            <p className='text-grey'>Atom is a dynamic fusion of visionary architects and skilled builders, united by a shared passion for creating exceptional spaces. With a meticulous attention to detail, we bring your dreams to life, from initial concept to final construction.</p>
            <Link to={'/about'}>
              <button className='mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit'>Read more</button>
            </Link>
            
          </div>
        </div>
      </section>
    
  )
}
