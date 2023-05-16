import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"
import Articles from "../../data/Articles"

export default function ArticlesSection() {
  return (
    <section className='section snap-start'>
      <div className='section flex flex-col items-center justify-center w-full h-full px-8 lg:px-32 pt-10'>
        <p className='uppercase  text-sm text-grey'>Articles</p>
        <h1 className='font-primary text-[30px] lg:text-[54px] mb-4 lg:mb-10'>Latest Blogs</h1>
        <div className="mb-2 w-full">
          <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-[40px] max-w-none mx-auto">
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
