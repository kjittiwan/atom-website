import MobileNav from './MobileNav'
import Logo from '../images/header/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const linkStyle = ' hover:underline hover:underline-offset-4 active:translate-y-1 hover:scale-105'
  return (
    <header className='  drop-shadow-xl fixed w-full z-30 py-4 lg:py-6 flex items-center px-8 lg:px-32 font-secondary'>
      <div className='flex flex-col w-full lg:flex-row lg:items-center justify-between'>
        <Link to={'/'} className={`${linkStyle}`}>
          <img src={Logo} alt="logo" className='lg:h-[40px] max-w-[100px] lg:max-w-[150px]' />
        </Link>
        <nav className='hidden xl:flex gap-x-8 font-semibold'>
          <Link to={'/'} className={`${linkStyle}`}>Home</Link>
          <Link to={'/about'} className={`${linkStyle}`}>About</Link>
          <Link to={'/projects'} className={`${linkStyle}`}>Projects</Link>
          <Link to={'/contact'} className={`${linkStyle}`}>Contact</Link>
        </nav>
      </div>
      <MobileNav />      
    </header>
  )
}
