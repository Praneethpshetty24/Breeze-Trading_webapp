import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stocks.css';

function Stocks() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsPortfolioOpen(false); // Close Portfolio sidebar if open
  };

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
    setIsSidebarOpen(false); // Close AI Chat sidebar if open
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

  return (
    <div className="stocks-container">
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      <div className="boxes-wrapper">
        <div className="box-row">
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
        </div>
        <div className="box-row">
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
          <div className="box">
            <div>Box Content</div>
            <button className="invest-button">Invest</button>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="portfolio-button" onClick={togglePortfolio}>
          Portfolio
        </button>
        <button className="ai-chat-button" onClick={toggleSidebar}>
          AI Chat
        </button>
      </div>
      {/* Portfolio Sidebar */}
      <div className={`sidebar ${isPortfolioOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closePortfolio}>
          ✕ {/* Close symbol (close button) */}
        </button>
        <div className="sidebar-content">
          <h3>Portfolio</h3>
          {/* Add your portfolio content here */}
        </div>
      </div>
      {/* AI Chat Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
