import { motion as m } from "framer-motion"
import { Link } from "react-router-dom"
import { transition1, container, container2, item, item2 } from "../../../transition"

export default function HeroSection() {
  return (
        <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1} 
        className='section snap-start flex flex-col items-center  lg:items-start justify-center lg:pl-48 bg-building bg-cover'
        >
          <m.div
          variants={container}
          initial='hidden'
          animate='show'
          >
            <div className="overflow-hidden">
              <m.h1
              variants={item}
              animate={{y:'0%'}}
              initial={{y:'-100%'}}
              transition={transition1}
              className='h1'>Design.</m.h1>
            </div>
            <div className="overflow-hidden">
              <m.h1
              variants={item}
              animate={{y:'0%'}}
              initial={{y:'-100%'}}
              transition={transition1}
              className='h1'>Build.</m.h1>
            </div>
            <div className="overflow-hidden">
              <m.h1
              variants={item}
              animate={{y:'0%'}}
              initial={{y:'-100%'}}
              transition={transition1}
              className='h1'>Atom.</m.h1>
            </div>
          </m.div>
            <m.div
            variants={container2}
            initial='hidden'
            animate='show'>
              <div className="overflow-hidden">
                <m.p 
                variants={item2}
                animate={{x:'0%'}}
                initial={{x:'-100%'}}
                transition={transition1}
                className='font-light font-secondary italic text-[16px] lg:text-[28px]'>Your space, our expertise</m.p>
              </div>
              <Link to={'/projects'}>
                <div className='overflow-hidden'>
                  <m.button
                  animate={{x:'0%'}}
                  initial={{x:'-100%'}}
                  transition={transition1} 
                  variants={item2}
                  className='mt-3 btn px-4 py-2 font-light text-[14px] lg:text-[24px]'>Our projects</m.button>
                </div>
                
              </Link>
            </m.div>
        </m.section>

  )
}
