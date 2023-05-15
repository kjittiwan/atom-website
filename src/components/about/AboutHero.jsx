export default function AboutHero() {
  return (
    <section className='section snap-start flex flex-col justify-center  items-center px-32 pt-24 gap-y-14'>
      <div className='flex justify-center  w-full gap-x-36'>
        <div className='font-primary text-[54px]  leading-tight'>We are Atom.</div> 
        <div className=' text-grey w-[40%] text-lg'>Our dedicated team of visionary architects, skilled craftsmen, and meticulous project managers work seamlessly to deliver remarkable results. From the initial concept and detailed planning to the precise execution, we leave no stone unturned in ensuring the highest quality and innovation in every project.</div>
      </div>
      <div className='w-full h-[55%] bg-aboutHero bg-cover rounded-md'></div>
    </section>
  )
}
