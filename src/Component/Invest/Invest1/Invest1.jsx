import React, { useState, useEffect } from 'react';
import './Invest1.css';

function Invest1() {
  const [companyData, setCompanyData] = useState({
    parentOrganization: 'N/A',
    ceo: 'N/A',
    founded: 'N/A',
    nseSymbol: 'N/A',
    // Add more fields as needed
  });

  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false); // State to manage watchlist visibility
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Example API fetch for company data
    fetch('https://api.example.com/company')
      .then(response => response.json())
      .then(data => setCompanyData(data))
      .catch(error => console.error('Error fetching company data:', error));
  }, []);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() === '') return; // Prevent sending empty messages

    const newMessage = {
      text: message,
      sender: 'user', // Indicates message sent by user
      timestamp: new Date().toISOString() // Example timestamp
    };

    // Update chatMessages state to include new message
    setChatMessages([...chatMessages, newMessage]);

    // Clear message input after sending
    setMessage('');
  };

  const addToWatchlist = () => {
    // Assuming you have some identifier like companyData.nseSymbol to uniquely identify the stock
    if (!watchlist.includes(companyData.nseSymbol)) {
      setWatchlist([...watchlist, companyData.nseSymbol]);
    }
    
    // Toggle watchlist visibility
    setShowWatchlist(!showWatchlist);
  };

  return (
    <div className="invest1-container">
      <div className="header">
        <div className="left-section">
          <div className="photo-box"></div>
          <h1 className="stock-name">vhfvb</h1>
        </div>
        <div className="right-section">
          <button className="like-button">Like</button>
          <button className="watchlist-button" onClick={addToWatchlist}>
            Add to Watchlist
          </button>
          <button className="ai-chat-button" onClick={toggleChatBox}>
            AI Chat
          </button>
        </div>
      </div>
      <div className="stock-graph-section">
        {/* Add your stock graph display component or elements here */}
        <div style={{ border: '2px solid green', padding: '10px', marginBottom: '10px' }}>
          Stock Graph Display Placeholder
        </div>
      </div>
      <div className="green-box"></div> {/* Green border box */}
      <div className="gap-after-green-box"></div> {/* Space after green box */}
      <div className="content-wrapper">
        <div className="fundamentals-section section">
          <h2>Fundamentals</h2>
          <div className="fundamentals-grid">
            <div className="fundamental-item">
              Mkt Cap: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              PE Ratio: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              PB Ratio: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              Industry PE: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              Debt to Equity: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              ROE: <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              Div Yield: <span className="data-box">N/A</span>
            </div>
          </div>
        </div>
        <div className="about-company-section section">
          <h2>About Company</h2>
          <div className="about-company-grid">
            <div className="company-item">
              Parent Organization:{' '}
              <span className="data-box">{companyData.parentOrganization}</span>
            </div>
            <div className="company-item">
              CEO: <span className="data-box">{companyData.ceo}</span>
            </div>
            <div className="company-item">
              Founded in: <span className="data-box">{companyData.founded}</span>
            </div>
            <div className="company-item">
              NSE Symbol: <span className="data-box">{companyData.nseSymbol}</span>
            </div>
            {/* Add more fields as needed */}
          </div>
        </div>
        {/* New Stock Graph Display Placeholder */}
        <div className="new-stock-graph-display-placeholder">
          <h2>Stock Graph Display Placeholder (New)</h2>
          <div className="new-stock-graph-data">
            <div className="today-high">
              Today's High: <span className="data-box">N/A</span>
            </div>
            <div className="today-low">
              Today's Low: <span className="data-box">N/A</span>
            </div>
          </div>
        </div>
      </div>

      {showChatBox && (
        <div className="chat-box">
          <div className="chat-header">AI Chat</div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}

      {showWatchlist && (
        <div className="watchlist-box">
          <div className="watchlist-header">Watchlist</div>
          <div className="watchlist-items">
            {watchlist.map((item, index) => (
              <div key={index} className="watchlist-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Invest1;
