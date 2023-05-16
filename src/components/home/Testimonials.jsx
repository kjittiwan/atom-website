export default function Testimonials() {
  return (
    <section className="section snap-start flex items-center justify-center pt-14 lg:pt-10">
      <div className="bg-light py-8 lg:h-[75%]  mx-8 lg:mx-32 flex flex-col items-center lg:py-14 justify-center lg:justify-start">
        <p className='uppercase  text-sm text-grey lg:mb-4'>testimonials</p>
        <h1 className='font-primary text-[30px] lg:text-[35px]'>What Clients Say</h1>
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start items-center lg:mx-10 mt-8 lg:mt-16 gap-y-4 px-4 lg:px-0">
          <div className=' w-full lg:w-1/4 text-center flex flex-col justify-between h-full'>
            <p className="text-grey  lg:mb-6 mb-4">"Working with Atom was a seamless experience. Their professionalism, expertise, and commitment to quality made our project a success."</p>
            <div>
              <p className="lg:mb-2 font-bold text-lg">Ragnar Lothbrok</p>
              <p className="text-sm">KG Architects</p>
            </div>
            
          </div>
          <div className=' w-full lg:w-1/4 text-center flex flex-col justify-between h-full'>
            <p className="text-grey lg:mb-6 mb-4">"Atom truly understood our vision and brought it to life. Their collaborative approach and exceptional craftsmanship made the process enjoyable."</p>
            <div>
              <p className="lg:mb-2 font-bold text-lg">Hector Salamanca</p>
              <p className="text-sm">Restaurant Owner</p>
            </div>
            
          </div>
         
          
          
        </div>

      </div>
    </section>
  )
}
