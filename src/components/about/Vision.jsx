import { BsArrowDown } from 'react-icons/bs'
export default function Vision() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center relative gap-y-10 px-8 lg:px-0'>
      <div className='font-primary w-[100%] lg:w-[65%]  text-[25px] lg:text-[30px] text-center'>
      "At Atom, we are more than just architects and builders - we are creators of extraordinary spaces. With a collective passion for <span className='italic font-semibold'>design</span> and <span className='italic font-semibold'>construction</span>, we are driven to bring your visions to life, exceeding expectations at every step."
      </div>
      <div className=' font-primary text-center'>
        <p className='text-2xl lg:text-3xl mb-4 font-semibold'>Muhammad Ali</p>
        <p className=''>CEO & Co-founder</p>
      </div>
      <div className='flex gap-x-2 items-center absolute bottom-4'>
        <p className='uppercase'>scroll down to learn more</p>
        <BsArrowDown  className=' text-base'/>
      </div>
    </section>
  )
}
