import React from 'react';
import './Invest1.css';

function Invest1() {
  return (
    <div className="invest1-container">
      <div className="header">
        <div className="photo-box"></div>
        <h1 className="stock-name">vhfvb</h1>
        <button className="like-button">Like</button>
        <button className="watchlist-button">Add to Watchlist</button>
      </div>
      <div className="graph-section">
        <button className="graph-button">1 Day</button>
        <button className="graph-button">1 Week</button>
        <button className="graph-button">1 Month</button>
        <div className="graph-placeholder">Graph will be displayed here</div>
      </div>
      <div className="fundamentals-section">
        <h2>Fundamentals</h2>
        <div className="fundamentals-grid">
          <div className="fundamental-item">Mkt Cap: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">PE Ratio: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">PB Ratio: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">Industry PE: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">Debt to Equity: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">ROE: <span className="data-box">N/A</span></div>
          <div className="fundamental-item">Div Yield: <span className="data-box">N/A</span></div>
        </div>
      </div>
    </div>
  );
}

export default Invest1;
