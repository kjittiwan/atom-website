

export default function ArticleCard({article}) {
  const {id, title, date, image} = article
  return (
    <div className=" flex flex-col h-[400px]">
      <div className=" h-[75%] mb-4">
        <img src={image} alt="" className='h-full w-full object-cover' />
      </div>
      <div className=''>
        <p className="text-grey text-xs">{date}</p>
        <p className="capitalize">{title}</p>
      </div> 
    </div>
  )
}
