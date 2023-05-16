import Team from '../../data/Team'

export default function TeamSection() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center px-8 lg:px-44 gap-y-6 pt-10 lg-pt-0'>
        <div className='text-[30px] font-primary'>
          Our Team
        </div>
        <div className='grid grid-cols-4 grid-rows-2 w-full  lg:h-[75%] lg:gap-y-10 lg:gap-x-6 gap-x-2 gap-y-6 '>
          {Team.map((member) => {
            return (
              <div key={member.name} className=' w-full flex flex-col '>
                <img src={member.image} alt="" className='lg:h-[90%] h-[150px]  w-full object-cover' />
                <div className='flex flex-col  h-[30%] '>
                  <p className='font-bold lg:text-lg'>{member.name}</p>
                  <p className='text-grey text-sm lg:text-base'>{member.position}</p>
                </div>
                
              </div>
            )
          })}
        </div>
    </section>
  )
}
