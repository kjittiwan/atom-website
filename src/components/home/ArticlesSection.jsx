import { Link } from "react-router-dom"
import { useContext } from "react"
import { ArticleContext } from "../../context/ArticleContext"
import ArticleCard from "./ArticleCard"
export default function () {
  const {articles} = useContext(ArticleContext)
  return (
    <section className='section snap-start'>
      <div className='section flex flex-col items-center justify-center w-full h-full px-32 pt-10'>
        <p className='uppercase  text-sm text-grey'>Articles</p>
        <h1 className='font-primary text-[54px] mb-10'>Latest Blogs</h1>
        <div className="mb-12 w-full">
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] max-w-none mx-auto">
            {articles.map((article) => {
              return <ArticleCard key={article.id} article={article} />
            })}
            {/* <div className="bg-blue-200 h-[350px] w-[full]">
              <div className="bg-red-200 h-[75%] mb-2"></div>
              <div>
                <p className="text-grey text-xs">16 FEB 2021</p>
                <p className="capitalize">Minimalism is always good for a the creating designs</p>
              </div> 
            </div>
            <div className="bg-blue-200 h-[350px] w-[full]">
              <div className="bg-red-200 h-[75%] mb-2"></div>
              <div>
                <p className="text-grey text-xs">16 FEB 2021</p>
                <p className="capitalize">Minimalism is always good for a the creating designs</p>
              </div> 
            </div>
            <div className="bg-blue-200 h-[350px] w-[full]">
              <div className="bg-red-200 h-[75%] mb-2"></div>
              <div>
                <p className="text-grey text-xs">16 FEB 2021</p>
                <p className="capitalize">Minimalism is always good for a the creating designs</p>
              </div> 
            </div>
            <div className="bg-blue-200 h-[350px] w-[full]">
              <div className="bg-red-200 h-[75%] mb-2"></div>
              <div>
                <p className="text-grey text-xs">16 FEB 2021</p>
                <p className="capitalize">Minimalism is always good for a the creating designs</p>
              </div> 
            </div> */}
            
          </div>

        </div>
        
        <Link to={'/'}>
          <button className='mt-3 btn px-5 py-2 font-light text-sm font-secondary w-fit'>Read articles</button>
        </Link>
      </div>
    </section>
  )
}
