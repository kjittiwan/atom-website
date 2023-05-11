import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { transition1, transition2, transition3, transition4, transition5 } from "../../../transition"

export default function HeroSection() {
  return (
        <section 
        className='section snap-start flex flex-col items-center  lg:items-start justify-center lg:pl-48 bg-building bg-cover'
        >
          <h1 className='h1'>Design.</h1>
          <h1 className='h1'>Build.</h1>
          <h1 className='h1'>Atom.</h1>
          <motion.div>
            <p className='font-light font-secondary italic text-[16px] lg:text-[28px]'>Your space, our expertise</p>
            <Link to={'/projects'}>
              <button className='mt-3 btn px-4 py-2 font-light text-[14px] lg:text-[24px]'>Our projects</button>
            </Link>
          </motion.div>
          
        </section>

  )
}
