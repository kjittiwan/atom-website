import { motion as m } from "framer-motion"
import { transition1 } from "../../../transition"
export default function AboutHero() {
  return (
    <m.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1} 
    className='section snap-start flex flex-col justify-center  items-center px-8 lg:px-32 pt-10 lg:pt-24 gap-y-10 lg:gap-y-14'>
      <div className='flex flex-col lg:flex-row justify-center  w-full gap-x-36'>
        <div className='font-primary text-[54px] mb-4  leading-tight'>
          We are Atom.
        </div> 
        <div className=' text-grey w-[100%] lg:w-[40%] text-lg'>
          Our dedicated team of visionary architects, skilled craftsmen, and meticulous project managers work seamlessly to deliver remarkable results. From the initial concept and detailed planning to the precise execution, we leave no stone unturned in ensuring the highest quality and innovation in every project.
        </div>
      </div>
      <div className='w-full h-[40%] lg:h-[55%] bg-aboutHero bg-cover rounded-md'></div>
    </m.section>
  )
}
