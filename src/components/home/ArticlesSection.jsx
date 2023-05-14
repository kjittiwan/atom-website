import { Link } from "react-router-dom"
import { useContext } from "react"
import { ArticleContext } from "../../context/ArticleContext"
import ArticleCard from "./ArticleCard"
import Articles from "../../data/Articles"

export default function () {
  return (
    <section className='section snap-start'>
      <div className='section flex flex-col items-center justify-center w-full h-full px-8 lg:px-32 pt-10'>
        <p className='uppercase  text-sm text-grey'>Articles</p>
        <h1 className='font-primary text-[35px] lg:text-[54px] mb-4 lg:mb-10'>Latest Blogs</h1>
        <div className="mb-2 w-full">
          <div className="grid lg:grid-cols-4 grid-rows-1 gap-4 lg:gap-[40px] max-w-none mx-auto">
            {Articles.map((article) => {
              return <ArticleCard key={article.id} article={article} />
            })}    
          </div>
        </div>
        <Link to={'/'}>
          <button className='mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit'>Read articles</button>
        </Link>
      </div>
    </section>
  )
}
