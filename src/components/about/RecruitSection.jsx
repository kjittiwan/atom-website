
export default function RecruitSection() {
  return (
    <section className='section snap-start flex flex-col justify-center items-center px-52 gap-y-14 pt-14'>
        <div className='flex justify-between w-full'>
          <div className='w-[40%] text-3xl font-semibold'>We work hard, but we also play hard together, like our virtual happy hours, game nights, and costume parties.</div>
          <div className='w-[40%] text-xl text-grey'>And although we're always learning from industry experts, we don't take ourselves too seriously. You'll find a great, supportive team here at Atom, where you can grow your career and find opportunities to shine.</div>
        </div>
        <div className='w-full h-[45%] bg-light rounded-md flex flex-col items-center justify-center gap-y-6'>
          <div className='text-[40px] font-primary'>Interested in joining our team?</div>
          <div className='text-xl text-center w-[45%] text-grey'>Curious about our story? Want to tell us more about yourself? We'd love to hear from you!</div>
          <button className='btn px-4 py-2'>Contact us</button>
        </div>
    </section>
  )
}
