

export default function ArticleCard({article}) {
  const {id, title, date, image} = article
  return (
    <div className=" flex flex-col h-[100px] lg:h-[400px] relative group w-full">
      <div className=" h-full lg:h-[75%] mb-4">
        <img src={image} alt="" className='h-full w-full object-cover' />
      </div>
      <div className='absolute w-full h-full bg-white bg-opacity-30 lg:bg-opacity-0 flex flex-col justify-end pb-4 pl-4 font-semibold group-hover:bg-opacity-0'>
        <p className="lg:text-grey text-xs">{date}</p>
        <p className="capitalize">{title}</p>
      </div> 
    </div>
  )
}
