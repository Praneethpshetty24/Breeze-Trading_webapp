import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Invest1.css';

function Invest1() {
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    parentOrganization: 'N/A',
    ceo: 'N/A',
    founded: 'N/A',
    nseSymbol: 'N/A',
  });

  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [liked, setLiked] = useState(false);
  const [watchlistAdded, setWatchlistAdded] = useState(false);
  const [aiChatActive, setAiChatActive] = useState(false);

  useEffect(() => {
    fetch('https://api.example.com/company')
      .then(response => response.json())
      .then(data => setCompanyData(data))
      .catch(error => console.error('Error fetching company data:', error));
  }, []);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
    setAiChatActive(!aiChatActive);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage('');
  };

  const toggleWatchlist = () => {
    setWatchlistAdded(!watchlistAdded);
    setShowWatchlist(!showWatchlist);
  };

  const addToWatchlist = (item) => {
    setWatchlist([...watchlist, item]);
    setWatchlistAdded(true);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="invest1-container">
      <div className="header">
        <div className="left-section">
          <div className="photo-box"></div>
          <div className="stock-name">Stock Name</div>
        </div>
        <div className="right-section">
          <button className="ai-chat-button" onClick={toggleChatBox}>
            {aiChatActive ? '🤖📢 AI Chat ' : 'AI Chat 🤖'}
          </button>
          <button className="watchlist-button" onClick={toggleWatchlist}>
            {watchlistAdded ? ' ✅ Added to Watchlist  ' : ' Add to Watchlist 📋'}
          </button>
          <button className="like-button" onClick={handleLike}>
            {liked ? '❤️' : '🤍'}
          </button>
        </div>    
      </div>

      <div className="stock-graph-display-placeholder">
        <h2>Stock Graph Display Placeholder</h2>
      </div>

      <div className="content-wrapper">
        <div className="section fundamentals-section">
          <h2>Fundamentals</h2>
          <div className="fundamentals-grid">
            <div className="fundamental-item">
              <span>Mkt Cap:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>PE Ratio:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>PB Ratio:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>Industry PE:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>Debt to Equity:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>ROE:</span>
              <span className="data-box">N/A</span>
            </div>
            <div className="fundamental-item">
              <span>Div Yield:</span>
              <span className="data-box">N/A</span>
            </div>
          </div>
        </div>

        <div className="section about-company-section">
          <h2>About Company</h2>
          <div className="about-company-grid">
            <div className="company-item">
              <span>Parent Organization:</span>
              <span className="data-box">{companyData.parentOrganization}</span>
            </div>
            <div className="company-item">
              <span>CEO:</span>
              <span className="data-box">{companyData.ceo}</span>
            </div>
            <div className="company-item">
              <span>Founded in:</span>
              <span className="data-box">{companyData.founded}</span>
            </div>
            <div className="company-item">
              <span>NSE Symbol:</span>
              <span className="data-box">{companyData.nseSymbol}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section new-stock-graph-display-placeholder">
        <h2>Stock Graph Display Placeholder (New)</h2>
        <div className="new-stock-graph-data">
          <div className="graph-item">
            <span>Today's High:</span>
            <span className="data-box">N/A</span>
          </div>
          <div className="graph-item">
            <span>Today's Low:</span>
            <span className="data-box">N/A</span>
          </div>
        </div>
      </div>

      {showChatBox && (
        <div className={`chat-box ${showChatBox ? 'visible' : ''}`}>
          <div className="chat-header">AI Chat</div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
                <div className="chat-timestamp">{msg.timestamp}</div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}

      {showWatchlist && (
        <div className={`watchlist-box ${showWatchlist ? 'visible' : ''}`}>
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

      <div className="analyse-buy-buttons">
        <button className="analyse-button" onClick={() => navigate('/analyse')}>Analyse</button>
        <button className="back-button" onClick={() => navigate('/stocks')}>Back</button>
        <button className="buy-now-button" onClick={() => navigate('/pay1')}>Buy Now</button>
      </div>
    </div>
  );
}

export default Invest1;
