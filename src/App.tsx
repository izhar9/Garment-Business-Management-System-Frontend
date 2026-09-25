import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import LandingPage from "./Components/LandingPage/LandingPage"
import ProtectedRoute from "./Components/ProtectedRoute";
import AppOwner from "./Components/AppOwner/AppOwner"

function App() {

  return (
    <Routes>
      <Route path="/" element = {<LandingPage />}/>
      <Route path="/login" element = {<Login/>}/>
      <Route element={<ProtectedRoute />}>
        <Route path="/appOwnerDashboard" element={<AppOwner />}/>
        <Route path="/employees" element={<div>Employees</div>}/>
        <Route path="/production" element={<div>Production</div>}/>
      </Route>
    </Routes>
  )
}

export default App
