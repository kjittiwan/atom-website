import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function MobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    setMenuIsOpen(prev => !prev)
  }
  const menuVariants = {
    hidden: {
      x: '100%'
    },
    show: {
      x:0,
      transition: {
        ease: 'easeOut',
      }
    }
  }
  return (
    <nav className='xl:hidden'>
      <div onClick={toggleMenu} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      <motion.div 
        variants={menuVariants} 
        initial='hidden'
        animate={menuIsOpen ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        <div onClick={toggleMenu} className='text-4xl absolute z-30 left-4 top-14 cursor-pointer'>
          <BsArrowLeftShort />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 font-semibold text-3xl'>
          <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
            <Link to={'/'} onClick={toggleMenu} >Home</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
            <Link onClick={toggleMenu} to={'/about'} >About</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
            <Link onClick={toggleMenu} to={'/projects'} >Projects</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 active:translate-y-1'>
            <Link onClick={toggleMenu} to={'/contact'} >Contact</Link>
          </li>
         
        </ul>
      </motion.div>
    </nav>
  )
}
