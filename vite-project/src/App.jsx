import { Routes, Route } from "react-router-dom"

import './App.css'
import EmploymentSolutionLanding from "./Pages/EmploymentSolutionLanding"
import Home from './Pages/Home'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmploymentSolution" element={<EmploymentSolutionLanding />}/>
      </Routes>
    </div>
  )
}

export default App
