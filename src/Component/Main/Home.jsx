import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './home.css';

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleInvestClick = () => {
    navigate('/stocks'); // Navigate to the /stocks route when the button is clicked
  };

  return (
    <div className="green-border">
      <div className="home-container">
        <h1 className="invest-title">Investment made easy</h1>
        <div className="section">
          <div className="text">Top Gainer</div>
          <div className="image-row">
            <div className="image-box"></div>
            <div className="image-box"></div>
            <div className="image-box"></div>
          </div>
        </div>

        <div className="section">
          <div className="text">Top Loser</div>
          <div className="image-row">
            <div className="image-box"></div>
            <div className="image-box"></div>
            <div className="image-box"></div>
          </div>
        </div>
        <button className="invest-button" onClick={handleInvestClick}>Invest</button> {/* Add onClick handler */}
      </div>
    </div>
  );
}

export default Home;
