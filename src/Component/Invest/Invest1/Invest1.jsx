import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
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

  // Chart.js related states and variables
  const [stockChart, setStockChart] = useState(null);
  const initialPrice = 50; // Starting stock price
  const [currentPrice, setCurrentPrice] = useState(initialPrice);
  const maxDataPoints = 50;
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for holding quantity
  const [holdingQuantity, setHoldingQuantity] = useState(0);

  // State for today's high and low prices
  const [todayHigh, setTodayHigh] = useState(initialPrice);
  const [todayLow, setTodayLow] = useState(initialPrice);

  useEffect(() => {
    // Fetch company data from an API (dummy URL used for demonstration)
    fetch('https://api.example.com/company')
      .then(response => response.json())
      .then(data => setCompanyData(data))
      .catch(error => console.error('Error fetching company data:', error));

    // Initialize the chart on component mount
    const ctx = document.getElementById('stockChart').getContext('2d');
    const initialData = {
      labels: Array.from({ length: maxDataPoints }, () => ''),
      datasets: [{
        label: 'Stock Price',
        data: Array.from({ length: maxDataPoints }, () => null),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
        tension: 0.1
      }]
    };
    const config = {
      type: 'line',
      data: initialData,
      options: {
        scales: {
          x: { display: false },
          y: { beginAtZero: false }
        },
        plugins: {
          tooltip: {
            callbacks: { label: tooltipItem => `Price: ${tooltipItem.raw.toFixed(2)}` }
          },
          legend: { display: false }
        }
      }
    };
    const chartInstance = new Chart(ctx, config);
    setStockChart(chartInstance);

    // Clean up function
    return () => {
      chartInstance.destroy();
    };
  }, []);

  // Function to simulate random stock price changes
  const getRandomStockPriceChange = () => (Math.random() - 0.5) * 2;

  // Function to update the chart with new data
  const updateChart = () => {
    setCurrentPrice(prevPrice => {
      const newPrice = prevPrice + getRandomStockPriceChange();

      // Update today's high and low
      if (newPrice > todayHigh) {
        setTodayHigh(newPrice);
      }
      if (newPrice < todayLow) {
        setTodayLow(newPrice);
      }

      if (currentIndex >= maxDataPoints) {
        // Remove the oldest data point (last in the array)
        stockChart.data.datasets[0].data.pop();
        stockChart.data.labels.pop();
      }

      // Add new data point at the beginning of the array
      stockChart.data.datasets[0].data.unshift(newPrice);
      stockChart.data.labels.unshift('');

      stockChart.update();
      setCurrentIndex(prevIndex => prevIndex + 1);

      return newPrice;
    });
  };

  // Function to gradually decrease the update interval over 30 minutes
  const decreaseInterval = (initialInterval) => {
    let interval = initialInterval;
    const intervalId = setInterval(() => {
      clearInterval(intervalId);

      if (interval < 60000) {
        interval += 1000; // Increase the interval by 1000 milliseconds each time
        setInterval(updateChart, interval);
        setTimeout(() => decreaseInterval(interval), 60000); // Call decreaseInterval again after 1 minute
      } else {
        clearInterval(intervalId); // Stop updating after the interval reaches 1 minute
        console.log('Chart update stopped after 30 minutes.');
      }
    }, interval);
  };

  // Start updating the chart at the initial interval of 2000 milliseconds (2 seconds)
  useEffect(() => {
    const initialInterval = 2000;
    const intervalId = setInterval(updateChart, initialInterval);

    // Start decreasing the interval after 30 minutes
    setTimeout(() => decreaseInterval(initialInterval), 1800000); // 1800000 milliseconds = 1800 seconds = 30 minutes

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [stockChart]);


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

  const handleQuantityChange = (e) => {
    setHoldingQuantity(parseInt(e.target.value, 10));
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
        <canvas id="stockChart"></canvas>
      </div>
      <div className="content-wrapper">
        <div className="section current-price-section">
          <h2>Current Price</h2>
          <div className="current-price-box">
            <span className="current-price-value">₹{currentPrice.toFixed(2)}</span>
          </div>
          <div className="section holding-quantity-section">
            <h2>Quantity</h2>
            <div className="holding-quantity-box">
                <input  type="text"
                        className="quantity-input"
                        value={holdingQuantity}
                        onChange={handleQuantityChange}
                        placeholder="Enter quantity"
                      />
                       
                    </div>

          </div>
        </div>

        <div className="section new-stock-graph-display-placeholder">
          <h2>Stock Graph Display Placeholder (New)</h2>
          <div className="new-stock-graph-data">
            <div className="today-high">
              <span>Today's High:</span>
              <span className="data-box">₹{todayHigh.toFixed(2)}</span>
            </div>
            <div className="today-low">
              <span>Today's Low:</span>
              <span className="data-box">₹{todayLow.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="section fundamentals-and-company-section">
          <div className="fundamentals-section">
            <h2>Fundamentals</h2>
            <div className="fundamentals-grid">
              <div className="fundamental-item">
                <span>Mkt Cap:</span>
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

          <div className="about-company-section">
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
      </div>
      
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

      <div className="analyse-buy-buttons">
        <button className="analyse-button" onClick={() => navigate('/analyse')}>Analyse</button>
        <button className="back-button" onClick={() => navigate('/stocks')}>Back</button>
        <button className="buy-now-button" onClick={() => navigate('/pay1')}>Buy Now</button>
      </div>
    </div>
  );
}

export default Invest1;
