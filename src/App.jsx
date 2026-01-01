// import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WeatherApp from "./WeatherApp"
function App() {
  
  return (
    <>
     <Routes>
      {/* First page */}
      <Route path="/" element={<LandingPage />} />

      {/* Main weather page */}
      <Route path="/weather" element={<WeatherApp />} />
    </Routes>
     {/* <WeatherApp/> */}

    </>
  )
}

export default App
