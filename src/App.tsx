import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import LandingPage from "./Components/LandingPage/LandingPage"

function App() {

  return (
    <Routes>
      <Route path="/" element = {<LandingPage />}/>
      <Route path="/login" element = {<Login/>}/>
    </Routes>
  )
}

export default App
