import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimRoutes from "./components/AnimRoutes"

function App() {

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        
      </Router>
    </>
  )
}

export default App
