import Sketch from '../../images/home/sketch.png'
export default function NewsletterSection() {
  return (
    <section className="section snap-start">
     
      <div className="section mx-auto  flex items-center justify-between">
        <div className="flex flex-col w-[40%] ml-32">
          <p className='uppercase  text-sm text-grey'>offers & latest news</p>
          <h1 className='font-primary text-[54px]'>Don't Miss Out!</h1> 
          <p className="text-grey text-lg mt-2">Join our community of design enthusiasts. Subscribe to our newsletter for curated content, industry insights, and special promotions delivered straight to your inbox.</p>
          <form action="" className="flex w-[80%] mt-6">
            <input 
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail adress here"
            className="flex-1 border-2 border-r-0 px-4 py-2 placeholder:text-grey"
            />
            <button className="btn text-sm px-4">submit</button>
          </form>
        </div>
        <div className='w-[42%] h-[45%]'>
          <img src={Sketch} alt="" className='object-cover h-full opacity-80'/>
        </div>
       
        
      </div>
    </section>
  )
}
