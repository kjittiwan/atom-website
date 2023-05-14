import Team from '../../data/Team'

export default function TeamSection() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center px-44 gap-y-6'>
        <div className='text-[30px] font-primary'>Our Team</div>
        <div className='grid grid-cols-4 grid-rows-2 w-full h-[75%] gap-y-10 gap-x-6 '>
          {Team.map((member) => {
            return (
              <div className='h-full w-full flex flex-col'>
                <img src={member.image} alt="" className='h-[90%] w-full object-cover' />
                <p className='font-bold text-lg'>{member.name}</p>
                <p className='text-grey'>{member.position}</p>
              </div>
            )
          })}
        </div>
    </section>
  )
}
