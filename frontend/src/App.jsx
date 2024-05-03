import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
    </div>
  )
}

export default App
