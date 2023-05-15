import { useParams } from "react-router-dom"
import ProjectsData from "../data/ProjectsData"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

export default function ProjectDetails() {
  const { id } = useParams()
  const [nextProject, setNextProject] = useState(0)
  const [prevProject, setPrevProject] = useState(0)
  useEffect(() => {
    getNextProject(parseInt(id))
    getPrevProject(parseInt(id))
  }, [id])
  const getNextProject = (id) => {
    if (id !== 8) setNextProject(id + 1)
  }
  const getPrevProject = (id) => {
    if (id !== 1) setPrevProject(id - 1)
  }
  const project = [...ProjectsData].find((item) => item.id === parseInt(id))
  return (
    <section
      className='section snap-start'
      >
        <div className='section mx-auto px-8 lg:px-32 flex items-center justify-evenly'>
          <div className='h-[60%] w-[30%] hidden lg:block'>
            <img src={project.image} alt={project.title}  className='object-cover opacity-90'/>
          </div>
          <div
            className=' w-full lg:w-[30%] flex flex-col gap-y-3 items-center lg:items-start'
          >
            <h1 className='font-primary text-[35px] capitalize'>{project.title}</h1>
            <p className='text-grey'>{project.description}</p>
            <div className="flex text-2xl items-end">
              <Link to={'/contact'}>
                <button className='mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit mr-4'>Contact us</button>
              </Link>
              {project.id > 1 && <Link to={`/projects/${prevProject}`} className="bg-light text-black bg-opacity-70  hover:bg-opacity-100 h-fit text-3xl rounded-full p-1 mr-2">
                <MdKeyboardArrowLeft />
              </Link>}
              {project.id < 8 && <Link to={`/projects/${nextProject}`} className="bg-light text-black bg-opacity-70  hover:bg-opacity-100 h-fit text-3xl rounded-full p-1">
                <MdKeyboardArrowRight />
              </Link>}
            </div>
           
            
            
          </div>
        </div>
      </section>
  )
}
