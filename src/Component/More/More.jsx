import React, { useState } from 'react';
import './more.css';
import image1 from './img/1.jpeg';
import image2 from './img/2.jpeg';
import image3 from './img/3.jpeg';
import image4 from './img/4.jpeg';
import image5 from './img/5.jpeg';
import image6 from './img/6.jpeg';
import image7 from './img/7.jpeg'
import image8 from './img/8.jpeg'
import image9 from './img/9.jpeg'
import image10 from './img/10.jpeg'
import image11 from './img/11.jpeg'
import image12 from './img/12.jpeg'
import image13 from './img/13.jpeg'
import image14 from './img/14.jpeg'
import image15 from './img/15.jpeg'
import image16 from './img/16.jpeg'
import image17 from './img/17.jpeg'
import image18 from './img/18.jpeg'
import image19 from './img/19.jpeg'
import image20 from './img/20.jpeg'
import image21 from './img/21.jpeg'
import image22 from './img/22.jpeg'
import image23 from './img/23.jpeg'
import image24 from './img/24.jpeg'
import image25 from './img/25.jpeg'
import image26 from './img/26.jpeg';
import image27 from './img/27.jpeg';
import image28 from './img/28.jpeg';
import image29 from './img/29.jpeg';
import image30 from './img/30.jpeg';
import image31 from './img/31.jpeg';
import image32 from './img/32.jpeg';
import image33 from './img/33.jpeg';
import image34 from './img/34.jpeg';
import image35 from './img/35.jpeg';
import image36 from './img/36.jpeg';
import image37 from './img/37.jpeg';
import image38 from './img/38.jpeg';
import image39 from './img/39.jpeg';
import image40 from './img/40.jpeg';
import image41 from './img/41.jpeg';
import image42 from './img/42.jpeg';
import image43 from './img/43.jpeg';
import image44 from './img/44.jpeg';
import image45 from './img/45.jpeg';
import image46 from './img/46.jpeg';
import image47 from './img/47.jpeg';
import image48 from './img/48.jpeg';
import image49 from './img/49.jpeg';
import image50 from './img/50.jpeg';



const stockData = [
  { name: 'Stock 1', price: '₹100', image: image1 },
  { name: 'Stock 2', price: '₹100', image: image2 },
{ name: 'Stock 3', price: '₹100', image: image3 },
{ name: 'Stock 4', price: '₹100', image: image4 },
{ name: 'Stock 5', price: '₹100', image: image5 },
{ name: 'Stock 6', price: '₹100', image: image6 },
{ name: 'Stock 7', price: '₹100', image: image7 },
{ name: 'Stock 8', price: '₹100', image: image8 },
{ name: 'Stock 9', price: '₹100', image: image9 },
{ name: 'Stock 10', price: '₹100', image: image10 },
{ name: 'Stock 11', price: '₹100', image: image11 },
{ name: 'Stock 12', price: '₹100', image: image12 },
{ name: 'Stock 13', price: '₹100', image: image13 },
{ name: 'Stock 14', price: '₹100', image: image14 },
{ name: 'Stock 15', price: '₹100', image: image15 },
{ name: 'Stock 16', price: '₹100', image: image16 },
{ name: 'Stock 17', price: '₹100', image: image17 },
{ name: 'Stock 18', price: '₹100', image: image18 },
{ name: 'Stock 19', price: '₹100', image: image19 },
{ name: 'Stock 20', price: '₹100', image: image20 },
{ name: 'Stock 21', price: '₹100', image: image21 },
{ name: 'Stock 22', price: '₹100', image: image22 },
{ name: 'Stock 23', price: '₹100', image: image23},
{ name: 'Stock 24', price: '₹100', image: image24 },
{ name: 'Stock 25', price: '₹100', image: image25 },
{ name: 'Stock 26', price: '₹100', image: image26 },
{ name: 'Stock 27', price: '₹100', image: image27 },
{ name: 'Stock 28', price: '₹100', image: image28 },
{ name: 'Stock 29', price: '₹100', image: image29 },
{ name: 'Stock 30', price: '₹100', image: image30 },
{ name: 'Stock 31', price: '₹100', image: image31 },
{ name: 'Stock 32', price: '₹100', image: image32 },
{ name: 'Stock 33', price: '₹100', image: image33 },
{ name: 'Stock 34', price: '₹100', image: image34 },
{ name: 'Stock 35', price: '₹100', image: image35 },
{ name: 'Stock 36', price: '₹100', image: image36 },
{ name: 'Stock 37', price: '₹100', image: image37 },
{ name: 'Stock 38', price: '₹100', image: image38 },
{ name: 'Stock 39', price: '₹100', image: image39 },
{ name: 'Stock 40', price: '₹100', image: image40 },
{ name: 'Stock 41', price: '₹100', image: image41 },
{ name: 'Stock 42', price: '₹100', image: image42 },
{ name: 'Stock 43', price: '₹100', image: image43 },
{ name: 'Stock 44', price: '₹100', image: image44 },
{ name: 'Stock 45', price: '₹100', image: image45 },
{ name: 'Stock 46', price: '₹100', image: image46 },
{ name: 'Stock 47', price: '₹100', image: image47 },
{ name: 'Stock 48', price: '₹100', image: image48 },
{ name: 'Stock 49', price: '₹100', image: image49 },
{ name: 'Stock 50', price: '₹100', image: image50 },

  
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
