import ProjectsData from "../data/ProjectsData"
import { useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"
import { transition1 } from "../../transition"
export default function Projects() {
  const firstSlide = ProjectsData.slice(0,4)
  const secondSlide = ProjectsData.slice(4)
  const [currentSlide, setCurrentSlide] = useState(firstSlide)
  return (
    <m.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section snap-y snap-mandatory overflow-y-scroll'>
      <div className="section snap-start flex justify-center items-center px-8 lg:px-32 flex-col gap-y-4 lg:pt-0">
          <div className="font-primary text-[35px] md:text-[54px] lg:text-[54px]">Our Projects</div>
          <div className="text-grey mb-4 lg:mb-16 text-center text-sm lg:text-base w-[90%] lg:w-full">Discover our showcase of extraordinary projects, where creativity and <br/> precision converge to redefine the art of architectural design.</div>
          <div className="lg:flex lg:justify-center lg:items-center lg:h-[40%]  w-full gap-x-2 gap-y-8 lg:gap-6 grid grid-rows-2 grid-cols-4">
            <button onClick={() => setCurrentSlide(firstSlide)} className={`${currentSlide === firstSlide ? 'bg-grey text-gray-500' : 'bg-light text-black'} bg-opacity-70  hover:bg-opacity-100 h-fit text-xl lg:text-3xl rounded-full p-2 active:translate-y-1 lg:block hidden`}><MdKeyboardArrowLeft /></button>
            {currentSlide.map((project) => {
              return (
                <div key={project.id} className='lg:block hidden'>
                  <m.div
                  initial={{x:'-100%'}}
                  animate={{x:'0%'}}
                  exit={{x:'100%'}}
                  transition={transition1}
                  className="flex flex-col gap-y-2 w-full">
                    <Link to={`/projects/${project.id}`} className="relative h-full group hover:scale-105 transition-all duration-300">
                      <m.img 
                      src={project.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex justify-center">
                        <div className="bg-white w-full items-center py-4 justify-center bg-opacity-40 text-xl font-semibold group-hover:flex hidden ">Learn more</div>
                      </div>
                    </Link>
                    <div className="flex w-full h-[10%] items-center justify-center capitalize font-light">{project.title}</div>
                  </m.div>
                </div>  
              )
            })}
            {ProjectsData.map((project) => {
              return (
                <div key={project.id} className='block lg:hidden'>
                  <m.div
                  initial={{x:'-100%'}}
                  animate={{x:'0%'}}
                  exit={{x:'100%'}}
                  transition={transition1}
                  className="flex flex-col gap-y-2 w-full">
                    <Link to={`/projects/${project.id}`} className="relative group hover:scale-105 transition-all duration-300">
                      <m.img 
                      src={project.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex justify-center">
                        <div className="bg-white w-full items-center py-4 justify-center bg-opacity-40 lg:text-xl font-semibold group-hover:flex hidden truncate">Learn more</div>
                      </div>
                    </Link>
                    <div className="w-full flex items-center justify-center h-[40px] capitalize font-light text-sm lg:text-base text-center">{project.title}</div>
                  </m.div>
                </div>  
              )
            })}
            <button onClick={() => setCurrentSlide(secondSlide)} className={`${currentSlide === secondSlide ? 'bg-grey text-gray-500' : 'bg-light text-black'} bg-opacity-70  hover:bg-opacity-100 h-fit text-xl lg:text-3xl rounded-full p-2 active:translate-y-1 lg:block hidden`}><MdKeyboardArrowRight /></button>
              
          </div>
        
      </div>     
    </m.section>
  )
}
