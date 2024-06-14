import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stocks.css';

function Stocks() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [portfolioData, setPortfolioData] = useState({
    currentAmount: 0,
    investedAmount: 0,
    totalReturns: 0,
    addedStocks: []
  });

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closePortfolio = () => {
    setIsPortfolioOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Send message to API (replace with your API call logic)
    console.log('Sending message:', message);

    // Clear message input after sending
    setMessage('');
  };

  const handleInvestClick = (index) => {
    // Determine the path based on index
    switch (index) {
      case 0:
        navigate('/invest1');
        break;
      case 1:
        navigate('/invest2');
        break;
      case 2:
        navigate('/invest3');
        break;
      case 3:
        navigate('/invest4');
        break;
      case 4:
        navigate('/invest5');
        break;
      case 5:
        navigate('/invest6');
        break;
      default:
        break;
    }
  };

  return (
    <div className="stocks-container">
      <div className="boxes-wrapper">
        <div className="box-row">
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(0)}>
              Invest
            </button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(1)}>
              Invest
            </button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(2)}>
              Invest
            </button>
          </div>
        </div>
        <div className="box-row">
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(3)}>
              Invest
            </button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(4)}>
              Invest
            </button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button" onClick={() => handleInvestClick(5)}>
              Invest
            </button>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="back-button" onClick={handleBackClick}>
          ← Back
        </button>
        <button className="portfolio-button" onClick={togglePortfolio}>
          Portfolio
        </button>
        <button className="ai-chat-button" onClick={toggleSidebar}>
          AI Chat
        </button>
      </div>
      {/* Portfolio Sidebar */}
      <div className={`sidebar left-sidebar ${isPortfolioOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closePortfolio}>
          ✕ {/* Close symbol (close button) */}
        </button>
        <div className="sidebar-content">
          <h3>Portfolio</h3>
          <div className="portfolio-box">
            <p>Current Amount: <span>{portfolioData.currentAmount}</span></p>
            <p>Invested Amount: <span>{portfolioData.investedAmount}</span></p>
            <p>Total Returns: <span>{portfolioData.totalReturns}</span></p>
          </div>
          <div className="stocks-list">
            <h4>My Added Stocks:</h4>
            {/* Placeholder for added stocks */}
            {portfolioData.addedStocks.map((stock, index) => (
              <div key={index} className="stock-item">
                {stock}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* AI Chat Sidebar */}
      <div className={`sidebar right-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>
          ✕ {/* Close symbol (close button) */}
        </button>
        <div className="sidebar-content">
          <h3>Chat with AI</h3>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message..."
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
