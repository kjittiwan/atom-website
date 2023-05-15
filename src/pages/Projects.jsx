import ProjectsData from "../data/ProjectsData"
import { useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-router-dom"

export default function Projects() {
  const firstSlide = ProjectsData.slice(0,4)
  const secondSlide = ProjectsData.slice(4)
  const [currentSlide, setCurrentSlide] = useState(firstSlide)
  console.log(currentSlide)
  return (
    <section className='section snap-y snap-mandatory overflow-y-scroll'>
      <div className="section snap-start flex justify-center items-center px-32 flex-col gap-y-4">
          <div className="font-primary text-[54px]">Our Projects</div>
          <div className="text-grey mb-16 text-center">Discover our showcase of extraordinary projects, where creativity and <br/> precision converge to redefine the art of architectural design.</div>
          <div className="flex justify-center items-center h-[40%]  w-full gap-6">
            <button onClick={() => setCurrentSlide(firstSlide)} className={`${currentSlide === firstSlide ? 'bg-grey text-gray-500' : 'bg-light text-black'} bg-opacity-70  hover:bg-opacity-100 h-fit text-3xl rounded-full p-2`}><MdKeyboardArrowLeft /></button>
            {currentSlide.map((project) => {
              return (
                <div key={project.id} className="flex flex-col gap-y-2">
                  <Link to={`/projects/${project.id}`} className="relative h-full group hover:scale-105 transition-all duration-300">
                    <img src={project.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex justify-center">
                      <div className="bg-white w-full items-center py-4 justify-center bg-opacity-40 text-xl font-semibold group-hover:flex hidden truncate">Learn more</div>
                    </div>
                  </Link>
                  <p className="flex h-[10%] items-center justify-center capitalize font-light">{project.title}</p>
                </div>
                
              )
            })}
            <button onClick={() => setCurrentSlide(secondSlide)} className={`${currentSlide === secondSlide ? 'bg-grey text-gray-500' : 'bg-light text-black'} bg-opacity-70  hover:bg-opacity-100 h-fit text-3xl rounded-full p-2`}><MdKeyboardArrowRight /></button>
              
          </div>
        
      </div>     
    </section>
  )
}
