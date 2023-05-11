import { useState, createContext } from "react"
import { articlesData } from "../data/Articles"
export const ArticleContext = createContext()
export default function ArticleProvider( {children }) {
  const [articles, setArticles] = useState(articlesData)
  return (
    <ArticleContext.Provider value={{ articles }}>{children}</ArticleContext.Provider>
  )
}
