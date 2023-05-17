import { BsInstagram, BsLine, BsFacebook } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { motion as m } from "framer-motion"
import { transition1 } from "../../transition"

function Contact() {
  return (
    <m.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section'>
      <div className=" section flex flex-col items-center justify-center gap-y-6 lg:gap-y-10 px-8">
        <div className='flex flex-col items-center gap-y-2 lg:gap-y-4 pt-16'>
          <div className="uppercase text-2xl lg:text-[30px] font-primary">Get in touch with us</div>
          <div className="text-center text-sm lg:text-base font-light text-gray-500">We&apos;re here to help! Contact us by clicking these links or filling out the form below</div>
          <div className='flex gap-x-8 text-xl lg:text-2xl text-black pt-3'>
            <div className='cursor-pointer hover:scale-105 active:translate-y-1'> <FiPhoneCall /> </div>
            <div className='cursor-pointer hover:scale-105 active:translate-y-1'> <BsFacebook /> </div>
            <div className='cursor-pointer hover:scale-105 active:translate-y-1'> <BsInstagram/> </div>
            <div className='cursor-pointer hover:scale-105 active:translate-y-1'> <BsLine /> </div>
          </div>
        </div>
        <form action="" className='flex flex-col  w-full md:w-[40%] gap-y-4 lg:gap-y-6 border p-4 border-zinc-500 text-slate-700'>
          <label className='block'>
            <span className={`after:content-['*'] after:ml-0.5 `}>First name</span>
          <input 
          type="text"
          placeholder='John'
          name='firstName'
          id='firstName'
          required
          className='w-full h-6 border-b border-zinc-500 focus:outline-none placeholder:text-sm'
          />
          </label>
          <label className='block'>
            <span className={`after:content-['*'] after:ml-0.5`}>Last name</span>
          <input 
          type="text"
          placeholder='Doe'
          name='lastName'
          id='lastName'
          required
          className='w-full h-6 border-b border-zinc-500 focus:outline-none placeholder:text-sm'
          />
          </label>
          <label className='block'>
          <span className={`after:content-['*'] after:ml-0.5`}>Email</span>
          <input 
          type="email"
          placeholder='john_doe@example.com'
          name='email'
          id='email'
          required
          className='w-full h-6 border-b border-zinc-500 focus:outline-none placeholder:text-sm'
          />
          </label>
          <label className='block'>
            <span className={`after:content-['*'] after:ml-0.5`}>Phone number</span>
            <input 
            type="phone"
            placeholder='01-234-5678'
            name='phone'
            id='phone'
            required
            className='w-full h-6 border-b border-zinc-500 focus:outline-none placeholder:text-sm'
            />
          </label>
        
          <label className='block'>
            <span className={`after:content-['*'] after:ml-0.5`}>Message</span>
            <textarea 
            placeholder='Please enter your message'
            name='message'
            id='message'
            required
            className='w-full h-16 border p-2 border-zinc-500 focus:outline-none placeholder:text-sm'
            />
          </label>
          <button className='btn self-center border w-[60%] py-2 lg:py-3'>SUBMIT</button>
        </form>
      </div>
    </m.section>
  );
}

export default Contact;
