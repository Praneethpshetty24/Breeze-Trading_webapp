import React from 'react';
import './more.css';

const stockData = [
  { name: 'Stock 1', price: '$100', image: 'path/to/image1.jpg' },
  { name: 'Stock 2', price: '$200', image: 'path/to/image2.jpg' },
  { name: 'Stock 3', price: '$300', image: 'path/to/image3.jpg' },
  { name: 'Stock 4', price: '$400', image: 'path/to/image4.jpg' },
  { name: 'Stock 5', price: '$500', image: 'path/to/image5.jpg' },
  { name: 'Stock 6', price: '$600', image: 'path/to/image6.jpg' },
  { name: 'Stock 7', price: '$700', image: 'path/to/image7.jpg' },
  { name: 'Stock 8', price: '$800', image: 'path/to/image8.jpg' },
  { name: 'Stock 9', price: '$900', image: 'path/to/image9.jpg' },
  { name: 'Stock 10', price: '$1000', image: 'path/to/image10.jpg' },
  { name: 'Stock 11', price: '$1100', image: 'path/to/image11.jpg' },
  { name: 'Stock 12', price: '$1200', image: 'path/to/image12.jpg' },
  { name: 'Stock 13', price: '$1300', image: 'path/to/image13.jpg' },
  { name: 'Stock 14', price: '$1400', image: 'path/to/image14.jpg' },
  { name: 'Stock 15', price: '$1500', image: 'path/to/image15.jpg' },
  { name: 'Stock 16', price: '$1600', image: 'path/to/image16.jpg' },
  { name: 'Stock 17', price: '$1700', image: 'path/to/image17.jpg' },
  { name: 'Stock 18', price: '$1800', image: 'path/to/image18.jpg' },
  { name: 'Stock 19', price: '$1900', image: 'path/to/image19.jpg' },
  { name: 'Stock 20', price: '$2000', image: 'path/to/image20.jpg' },
  { name: 'Stock 21', price: '$2100', image: 'path/to/image21.jpg' },
  { name: 'Stock 22', price: '$2200', image: 'path/to/image22.jpg' },
  { name: 'Stock 23', price: '$2300', image: 'path/to/image23.jpg' },
  { name: 'Stock 24', price: '$2400', image: 'path/to/image24.jpg' },
  { name: 'Stock 25', price: '$2500', image: 'path/to/image25.jpg' },
  { name: 'Stock 26', price: '$2600', image: 'path/to/image26.jpg' },
  { name: 'Stock 27', price: '$2700', image: 'path/to/image27.jpg' },
  { name: 'Stock 28', price: '$2800', image: 'path/to/image28.jpg' },
  { name: 'Stock 29', price: '$2900', image: 'path/to/image29.jpg' },
  { name: 'Stock 30', price: '$3000', image: 'path/to/image30.jpg' },
  { name: 'Stock 31', price: '$3100', image: 'path/to/image31.jpg' },
  { name: 'Stock 32', price: '$3200', image: 'path/to/image32.jpg' },
  { name: 'Stock 33', price: '$3300', image: 'path/to/image33.jpg' },
  { name: 'Stock 34', price: '$3400', image: 'path/to/image34.jpg' },
  { name: 'Stock 35', price: '$3500', image: 'path/to/image35.jpg' },
  { name: 'Stock 36', price: '$3600', image: 'path/to/image36.jpg' },
  { name: 'Stock 37', price: '$3700', image: 'path/to/image37.jpg' },
  { name: 'Stock 38', price: '$3800', image: 'path/to/image38.jpg' },
  { name: 'Stock 39', price: '$3900', image: 'path/to/image39.jpg' },
  { name: 'Stock 40', price: '$4000', image: 'path/to/image40.jpg' },
  { name: 'Stock 41', price: '$4100', image: 'path/to/image41.jpg' },
  { name: 'Stock 42', price: '$4200', image: 'path/to/image42.jpg' },
  { name: 'Stock 43', price: '$4300', image: 'path/to/image43.jpg' },
  { name: 'Stock 44', price: '$4400', image: 'path/to/image44.jpg' },
  { name: 'Stock 45', price: '$4500', image: 'path/to/image45.jpg' },
  { name: 'Stock 46', price: '$4600', image: 'path/to/image46.jpg' },
  { name: 'Stock 47', price: '$4700', image: 'path/to/image47.jpg' },
  { name: 'Stock 48', price: '$4800', image: 'path/to/image48.jpg' },
  { name: 'Stock 49', price: '$4900', image: 'path/to/image49.jpg' },
  { name: 'Stock 50', price: '$5000', image: 'path/to/image50.jpg' },
];

function More() {
  return (
    <div className="stocks-container">
      {stockData.map((stock, index) => (
        <div key={index} className="stock-box">
          <img src={stock.image} alt={stock.name} className="stock-image" />
          <div className="stock-name">{stock.name}</div>
          <div className="stock-price">{stock.price}</div>
        </div>
      ))}
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default More;
