/* eslint-disable react/no-unescaped-entities */

export default function Differentiation() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center gap-y-6 lg:gap-y-16 pt-10 px-8 lg:px-32'>
        <div className='flex h-[20%] lg:h-[40%] w-full items-center justify-center bg-darkBg bg-cover'>
          <div className='font-primary text-[35px] lg:text-[70px] text-white w-full h-full bg-white bg-opacity-10 flex justify-center items-center'>
            Why Atom?
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-x-10 lg:text-2xl w-full gap-y-4'>
          <div className='lg:w-1/3'>
            <h3 className="font-semibold mb-2 lg:mb-4 text-lg lg:text-3xl font-primary">Adept.</h3>
            Our holistic approach combines <span className="font-bold">innovative</span> design concepts with <span className="font-bold">expert</span> construction techniques, resulting in the perfect space.
          </div>
          <div className='lg:w-1/3'>
            <h3 className="font-semibold mb-2 lg:mb-4 text-lg lg:text-3xl font-primary">Insightful.</h3>
            We understand that your space is a reflection of your <span className="font-bold">personality</span> and <span className="font-bold">aspirations</span>, and we take pride in bringing your dreams to reality.
          </div>
          <div className='lg:w-1/3'>
            <h3 className="font-semibold mb-2 lg:mb-4 text-lg lg:text-3xl font-primary">Dependable.</h3>
            Whether you&apos;re looking to build a custom home, renovate a commercial space, or embark on a large-scale project, <span className="font-bold">Atom is your trusted partner</span>.
          </div>
        </div>
    </section>
  )
}
