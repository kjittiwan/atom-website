import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import ProjectsData from "../../data/ProjectsData";
import { Link } from "react-router-dom";
export default function ProjectsSection() {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[]);

  return (
    <section className="section snap-start">
      <div className="section flex flex-col justify-center lg:gap-y-8 pt-10">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <p className='uppercase  text-sm text-grey'>portfolios</p>
          <h1 className='font-primary text-[40px]'>Our Works</h1>
        </div>
        <motion.div
        ref={carousel}
        whileTap={{cursor:"grabbing"}}
        className=" cursor-grab overflow-hidden flex  lg:h-[60%]" >
          <motion.div
          drag="x"
          dragConstraints={{right:0, left:-width}}
          className=" flex">
            {ProjectsData.map((project) => {
              return(
                <motion.div key={project.title}  className=" min-w-[10rem] lg:min-w-[20rem] max-h-[300px] lg:max-h-none lg:min-h-[250px] flex flex-col">
                  <img src={project.image} alt={project.title}
                  className="w-full h-[90%] object-cover pointer-events-none"  
                  />
                  <p className="flex items-center justify-center capitalize font-light text-sm lg:text-base">{project.title}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        <Link to={'/projects'} className='w-full flex justify-center'>
          <button className='mt-4 lg:mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit'>View all works</button>
        </Link>
      </div>
    </section>
  )
}
