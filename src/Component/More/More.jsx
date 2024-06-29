import React, { useState } from 'react';
import './more.css';

const stockData = [
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  // Add more stock data here...
];

function More() {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleStockClick = (stock) => {
    setSelectedStock(stock);
  };

  const closePopup = () => {
    setSelectedStock(null);
  };

  return (
    <div className="more-container">
      <div className="stocks-container">
        {stockData.map((stock, index) => (
          <div key={index} className="stock-box">
            <img src={stock.image} alt={stock.name} className="stock-image" />
            <div className="stock-name">{stock.name}</div>
            <div className="stock-price">{stock.price}</div>
            <button className="details-button" onClick={() => handleStockClick(stock)}>
              Details
            </button>
          </div>
        ))}
      </div>
      {selectedStock && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={closePopup}>&times;</button>
            <h2>{selectedStock.name} Details</h2>
            <p>Mkt Cap: N/A</p>
            <p>PB Ratio: N/A</p>
            <p>Industry PE: N/A</p>
            <p>Debt to Equity: N/A</p>
            <p>ROE: N/A</p>
            <p>Div Yield: N/A</p>
          </div>
        </div>
      )}
      <button className="more-back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default More;
