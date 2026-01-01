import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-card">
        
        {/* Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
          alt="Weather App"
          className="weather-image"
        />

        {/* Title */}
        <h1 className="landing-title">Weather App</h1>

        {/* Description */}
        <p className="landing-description">
          Get real-time weather updates for any city in the world.
          Fast, simple, and reliable.
        </p>

        {/* 3D Button */}
        <button
          className="start-btn"
          onClick={() => navigate("/weather")}
        >
          Check Weather
        </button>

      </div>
    </div>
  );
}

export default LandingPage;
