import Building from '../../images/about/building2.jpg'
import { Link } from 'react-router-dom'
import List from './List'
export default function ServiceSection() {
  return (
    <section
    className='section snap-start'
    
    >
      <div className='section mx-auto px-32 flex items-center justify-between'>
        
        <div
          className='font-primary w-[400px] flex flex-col gap-y-3'
        >
          <p className='uppercase font-secondary text-sm text-grey'>Our services</p>
          <h1 className=' text-[54px]'>What We Offer</h1>
          <div className='flex flex-col text-grey'>
            <List order='01' title='residential design' />
            <List order='02' title='public & institutional design' />
            <List order='03' title='commercial design' />
            <List order='04' title='landscape architecture' />
            <List order='05' title='industrial design' />
          </div>
         
          
        </div>
        <div className='w-[650px] h-[450px]'>
          <img src={Building} alt="building"  className='object-cover opacity-90'/>
        </div>
      </div>
    </section>
  )
}
