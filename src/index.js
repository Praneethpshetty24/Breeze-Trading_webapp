import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/Login/SignUp';
import SignIn from './Component/Login/SignIn';
import Protected from './Component/Protected/Protected';
import Home from './Component/Main/Home';
import Invest1 from './Component/Invest/Invest1/Invest1'; // Import Invest1.jsx
import Invest2 from './Component/Invest/Invest2/Invest2'; // Import Invest2.jsx
import Invest3 from './Component/Invest/Invest3/Invest3'; // Import Invest3.jsx
import Invest4 from './Component/Invest/Invest4/Invest4'; // Import Invest4.jsx
import Invest5 from './Component/Invest/Invest5/Invest5'; // Import Invest5.jsx
import Invest6 from './Component/Invest/Invest6/Invest6'; // Import Invest6.jsx
import Stocks from './Component/List/Stocks'; // Corrected import path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/stocks" element={<Stocks />} />
        {/* Routes for Investment pages */}
        <Route path="/invest1" element={<Invest1 />} />
        <Route path="/invest2" element={<Invest2 />} />
        <Route path="/invest3" element={<Invest3 />} />
        <Route path="/invest4" element={<Invest4 />} />
        <Route path="/invest5" element={<Invest5 />} />
        <Route path="/invest6" element={<Invest6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
