import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
import leftImage from './image/left.jpeg';
import rightImage from './image/right.jpg';

function Home() {
  const navigate = useNavigate();

  const handleInvestClick = () => {
    navigate('/stocks');
  };

  const handleLiveClick = () => {
    navigate('/real'); // Navigate to the /real route when the button is clicked
  };

  return (
    <div className="home-wrapper">
      <button className="live-button" onClick={handleLiveClick}>Live</button>
      <img src={leftImage} alt="Left" className="side-image left-image" />
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
          <button className="invest-button" onClick={handleInvestClick}>Invest</button>
        </div>
      </div>
      <img src={rightImage} alt="Right" className="side-image right-image" />
    </div>
  );
}

export default Home;
