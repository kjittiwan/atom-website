import React from 'react'

export default function About() {
  return (
    <section className='section '>
      <div className='w-full h-full mx-auto flex items-center'>
        <div className='w-[60%]'>

        </div>
        <div className='font-primary w-[400px] flex flex-col gap-y-3'>
          <p className='uppercase font-secondary text-sm text-gray-500'>About us</p>
          <h1 className=' text-[54px]'>Who are we?</h1>
          <p>We are a team of visionary architects and skilled builders. Creating exceptional spaces, from concept to completion. Welcome to the harmonious fusion of design and construction.</p>
          <button className='mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit'>Read more</button>
        </div>
      </div>
    </section>
  )
}
