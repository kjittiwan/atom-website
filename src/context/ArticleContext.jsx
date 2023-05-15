import { useState, createContext } from "react"
import Articles from "../data/Articles"
export const ArticleContext = createContext()
export default function ArticleProvider( { children }) {
  const [articles, setArticles] = useState(Articles)
  return (
    <ArticleContext.Provider value={{ articles }}>{children}</ArticleContext.Provider>
  )
}
