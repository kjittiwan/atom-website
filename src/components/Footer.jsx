import { BsInstagram, BsLine, BsFacebook } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-dark py-4 lg:py-6 absolute bottom-0 w-full text-white flex justify-between items-center px-4 lg:px-10 text-sm lg:text-base">
        <div className="text-grey">&copy; 2023 <span className="text-white text-sm lg:text-lg">ATOM</span>. All rights reserved.</div>
        <div className='flex gap-x-4'>
          <div className='cursor-pointer hover:scale-105 active:translate-y-1'> 
            <FiPhoneCall />
          </div>
          <div className='cursor-pointer hover:scale-105 active:translate-y-1'>
            <BsFacebook />
          </div>
          <div className='cursor-pointer hover:scale-105 active:translate-y-1'>
            <BsInstagram/> 
          </div>
          <div className='cursor-pointer hover:scale-105 active:translate-y-1'>
            <BsLine />
          </div>
        </div>
    </footer>
  )
}
