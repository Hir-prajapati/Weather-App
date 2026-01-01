import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* App Title */}
      <h1 className="app-title">Weather App</h1>

      {/* Short Description */}
      <p className="app-description">
        Get real-time weather updates for any city
      </p>

      {/* Main Action Button */}
      <button
        className="start-button"
        onClick={() => navigate("/weather")}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
