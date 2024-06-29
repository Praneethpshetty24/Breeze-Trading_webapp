import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './pay1.css';

function Pay1() {
  const location = useLocation();
  const navigate = useNavigate();
  const stockName = location.state?.stockName || 'Stock Name';
  const [quantity, setQuantity] = useState(1);
  const [exchange, setExchange] = useState('NSE');
  const [verificationCode, setVerificationCode] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // State for current price (Assume initial price is 50)
  const initialPrice = 50;
  const [currentPrice, setCurrentPrice] = useState(initialPrice);
  const [fixedPrice, setFixedPrice] = useState(null);

  // Simulate fetching and updating stock price
  useEffect(() => {
    const getRandomStockPriceChange = () => (Math.random() - 0.5) * 2;

    const updatePrice = () => {
      setCurrentPrice(prevPrice => {
        const newPrice = prevPrice + getRandomStockPriceChange();
        return newPrice;
      });
    };

    const intervalId = setInterval(updatePrice, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let interval;
    if (verificationCode) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [verificationCode]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleExchangeChange = (e) => {
    setExchange(e.target.value);
  };

  const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    setTimer(30);
    alert(`Your verification code is ${code}`);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const verifyCode = () => {
    if (userInput === verificationCode && timer > 0) {
      setVerified(true);
    } else {
      alert('Invalid or expired verification code');
      setVerificationCode(null);
      setUserInput('');
      setTimer(30);
    }
  };

  const handleBuy = () => {
    setFixedPrice(currentPrice);
    setShowConfirmation(true);
  };

  const handlePayNow = () => {
    alert('Payment Successful!');
    setShowConfirmation(false);
    navigate('/invest1'); // Redirect to Invest1 component
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="pay1-container">
      <h1>Purchase Details</h1>
      <div className="details-box">
        <div className="exchange-selector">
          <span>Exchange:</span>
          <select id="exchange" value={exchange} onChange={handleExchangeChange}>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
          </select>
        </div>
        <div className="details-container">
          <div className="detail-item">
            <span>Stock Name:</span> {stockName}
          </div>
          <div className="vertical-line"></div>
          <div className="detail-item">
            <span>Quantity:</span>
            <div className="quantity-selector">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="detail-item">
            <span>Current Price:</span>
            <div className="price-value">₹{currentPrice.toFixed(2)}</div>
          </div>
        </div>
        <div className="action-section">
          <div className="action-buttons">
            {verificationCode && !verified && (
              <div className="verification-section">
                <hr className="horizontal-line" />
                <p>Enter the verification code sent to you:</p>
                <input type="text" value={userInput} onChange={handleInputChange} />
                <button onClick={verifyCode}>Verify</button>
                <p className="timer">Code expires in: {timer} seconds</p>
              </div>
            )}
            {!verificationCode && !verified && (
              <button onClick={generateVerificationCode}>Verify Sell</button>
            )}
            {verified && (
              <button className="buy-button" onClick={handleBuy}>Buy</button>
            )}
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-modal">
            <div className="confirmation-container">
              <h2>Confirmation</h2>
              <div className="confirmation-detail">
                <span>Stock Name:</span> {stockName}
              </div>
              <div className="confirmation-detail">
                <span>Quantity:</span> {quantity}
              </div>
              <div className="confirmation-detail">
                <span>Exchange:</span> {exchange}
              </div>
              <div className="confirmation-detail">
                <span>Fixed Price:</span> ₹{fixedPrice?.toFixed(2)}
              </div>
              <button className="close-button" onClick={handleCloseConfirmation}>
                x
              </button>
              <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pay1;
